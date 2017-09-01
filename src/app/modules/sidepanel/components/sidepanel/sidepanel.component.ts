import { Component, Input, OnInit } from '@angular/core';

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

  @Input()
  get position() { return this._position; }

  set position(value) {
    this._position = value === 'end' ? 'end' : 'start';
  }

  private _position: 'start' | 'end' = 'start';

  /**
   * Whether the side panel is opened. We overload this because we trigger an event when it
   * starts or end.
   */
  @Input()
  get opened(): boolean { return this._opened; }

  set opened(value: boolean) {
    this.toggle(value);
  }

  private _opened = false;

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
  toggle(isOpen: boolean = !this.opened) {
    this._opened = isOpen;
  }

}
