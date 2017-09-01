import { Component, HostBinding, Input, OnInit } from '@angular/core';

export type SidepanelPosition = 'end' | 'start';

export const SidepanelPosition = {
  End: 'end' as SidepanelPosition,
  Start: 'start' as SidepanelPosition
};

/**
 * <app-sidepanel>
 *
 * This component corresponds to a side panel that can be opened in the side panel container.
 *
 * Please refer to README.md for examples on how to use it.
 */
@Component({
  selector: 'app-sidepanel',
  templateUrl: './sidepanel.component.html',
  styleUrls: ['./sidepanel.component.css']
})
export class SidepanelComponent implements OnInit {

  @HostBinding('class.open')
  isOpen: boolean;

  @Input()
  get position() { return this._position; }

  set position(position: SidepanelPosition) {
    this._position = position;
  }

  private _position: SidepanelPosition;

  constructor() {}

  ngOnInit() {
  }

  /** Open the side panel. */
  open() {
    this.toggle(true);
  }

  /** Close the side panel. */
  close() {
    this.toggle(false);
  }

  /**
   * Toggle the side panel.
   * @param isOpen Whether the side panel should be open.
   */
  toggle(isOpen: boolean) {
    if (this.isOpen !== isOpen) {
      this.isOpen = isOpen;
    }
  }

}
