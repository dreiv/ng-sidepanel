import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { startWith } from 'rxjs/operator/startWith';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';

/** Throws an exception when two <app-sidepanel>s are matching the same position. */
export function throwDuplicatedSidePanelError(position: string) {
  throw Error(`A side panel was already declared for 'position="${position}"'`);
}

/**
 * <app-sidepanel-container>
 *
 * This is the parent component to one up to two <app-sidepanel>s that validates their state internally and coordinates their backdrop and
 * content styling.
 */
@Component({
  selector: 'app-sidepanel-container',
  templateUrl: './sidepanel-container.component.html',
  styleUrls: ['./sidepanel-container.component.scss']
})
export class SidepanelContainerComponent implements AfterContentInit {
  @ContentChildren(SidepanelComponent) panels: QueryList<SidepanelComponent>;
  /** The sidepanel child with the `start` position. */
  private start: SidepanelComponent;
  /** The sidepanel child with the `end` position. */
  private end: SidepanelComponent;
  /** The sidepanel child that is currently opened. */
  active: SidepanelComponent;

  constructor() { }

  ngAfterContentInit(): void {
    startWith.call(this.panels.changes, null).subscribe(() => {
      this.validatePanels();
      this.panels.forEach(panel => this.watchToggle(panel));
    });
  }

  /** Validate the state of the side panel children components. */
  private validatePanels() {
    this.start = this.end = null;

    // Ensure that we have at most one start and one end side panel.
    this.panels.forEach(panel => {
      if (panel.position === 'end') {
        if (this.end) {
          throwDuplicatedSidePanelError('end');
        }

        this.end = panel;
      } else {
        if (this.start) {
          throwDuplicatedSidePanelError('start');
        }

        this.start = panel;
        this.start.position = 'start';
      }
    });
  }

  /** Close the active panel if it is defined. */
  closeActivePanel() {
    if (this.active) {
      this.active.close();
    }
  }

  /** Actions done on panel events such as close or open. */
  private watchToggle(panel: SidepanelComponent): void {
    panel.onOpen.subscribe(() => {
      if (this.active !== panel) {
        this.closeActivePanel();
      }

      this.active = panel;
    });

    panel.onClose.subscribe(() => {
      this.active = null;
    });
  }
}
