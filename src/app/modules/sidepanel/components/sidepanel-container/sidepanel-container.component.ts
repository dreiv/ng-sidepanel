import { AfterContentInit, Component, ContentChildren, EventEmitter, Output, QueryList } from '@angular/core';
import { startWith } from 'rxjs/operator/startWith';
import { SidepanelComponent } from '../sidepanel/sidepanel.component';

/** Throws an exception when two SidePanels are matching the same position. */
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
  styleUrls: ['./sidepanel-container.component.css']
})
export class SidepanelContainerComponent implements AfterContentInit {

  @ContentChildren(SidepanelComponent) panels: QueryList<SidepanelComponent>;

  /** The sidepanel child with the `start` position. */
  get start() { return this._start; }

  /** The sidepanel child with the `end` position. */
  get end() { return this._end; }

  /** The sidepanel at the start/end position. */
  private _start: SidepanelComponent | null;
  private _end: SidepanelComponent | null;

  /** Event emitted when the backdrop is clicked. */
  @Output() backdropClick = new EventEmitter<void>();

  constructor() { }

  ngAfterContentInit(): void {
    startWith.call(this.panels.changes, null).subscribe(() => {
      this.validatePanels();
    });
  }

  onBackdropClicked() {
    this.backdropClick.emit();
    console.log('backdrop clicked');
  }

  /** Validate the state of the side panel children components. */
  private validatePanels() {
    this._start = this._end = null;

    // Ensure that we have at most one start and one end side panel.
    this.panels.forEach(panel => {
      if (panel.position === 'end') {
        if (this._end) {
          throwDuplicatedSidePanelError('end');
        }

        this._end = panel;
      } else {
        if (this._start) {
          throwDuplicatedSidePanelError('start');
        }

        this._start = panel;
        this._start.position = 'start';
      }
    });
  }
}
