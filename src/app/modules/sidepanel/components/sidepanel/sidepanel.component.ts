import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export class ToggleResult {
  constructor(public type: 'open' | 'close', public animationFinished: boolean) {}
}

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
    value = value === 'end' ? 'end' : 'start';
  }

  private _position: 'start' | 'end' = 'start';

  /** Event emitted when the drawer is fully opened. */
  @Output('open') onOpen = new EventEmitter<ToggleResult | void>();

  /** Event emitted when the drawer is fully closed. */
  @Output('close') onClose = new EventEmitter<ToggleResult | void>();

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
  open(): Promise<ToggleResult> {
    return this.toggle(true);
  }

  /** Close the side panel. */
  close(): Promise<ToggleResult> {
    return this.toggle(false);
  }

  /**
   * Toggle the side panel.
   * @param isOpen Whether the side panel should be open.
   */
  toggle(isOpen: boolean = !this.opened): Promise<ToggleResult> {
    return null;
  }

}
