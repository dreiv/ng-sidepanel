import { Component, HostBinding, Input, OnInit } from '@angular/core';

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
  @HostBinding('class.open') private isOpen = false;
  @HostBinding('class') private classes = '';

  @Input()
  get position() {
    return this._position;
  }

  set position(position: 'end' | 'start') {
    this._position = position;
    this.classes += position;
  }

  private _position: 'end' | 'start';

  constructor() {
  }

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
