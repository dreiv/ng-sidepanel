import { AfterContentInit, Component, ContentChildren, HostBinding, HostListener, QueryList } from '@angular/core';
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
  template: `
    <ng-content></ng-content>`,
  styleUrls: ['./sidepanel-container.component.scss']
})
export class SidepanelContainerComponent implements AfterContentInit {
  @ContentChildren(SidepanelComponent) panels: QueryList<SidepanelComponent>;

  @HostBinding('class.hasBackdrop')
  get hasBackdrop() {
    return this._start.opened || this._end.opened;
  }

  /** The sidepanel child with the `start` position. */
  get start() { return this._start; }

  /** The sidepanel child with the `end` position. */
  get end() { return this._end; }

  /** The sidepanel at the start/end position. */
  private _start: SidepanelComponent | null;
  private _end: SidepanelComponent | null;

  constructor() { }

  ngAfterContentInit(): void {
    startWith.call(this.panels.changes, null).subscribe(() => {
      this.validatePanels();
    });
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

  @HostListener('click', ['$event'])
  public onClick(event: MouseEvent): void {
    console.log('clicked');
  }
}
