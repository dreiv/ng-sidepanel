import { Component, EventEmitter, HostBinding, Input, OnInit, Output } from '@angular/core';

/**
 * <app-sidepanel>
 *
 * This component corresponds to a side panel that can be opened in the side panel container.
 *
 * Please refer to README.md for examples on how to use it.
 */
@
  Component({
    selector: 'app-sidepanel',
    templateUrl: './sidepanel.component.html',
    styleUrls: ['./sidepanel.component.scss']
  })

export class SidepanelComponent implements OnInit {
  /** Whether the side panel is opened. */
  @HostBinding('class.opened') opened: boolean;

  @HostBinding('class.start')
  get isStart() {
    return this.position === 'start';
  }

  @HostBinding('class.end')
  get isEnd() {
    return this.position === 'end';
  }

  @Input() position: 'start' | 'end';

  @Output() onOpen = new EventEmitter();

  @Output() onClose = new EventEmitter();

  constructor() {}

  ngOnInit() {
  }

  /** Open the side panel. */
  public open() {
    this.toggle(true);
  }

  /** Close the side panel. */
  public close() {
    this.toggle(false);
  }

  /**
   * Toggle the side panel.
   * @param isOpen Whether the side panel should be open.
   */
  toggle(isOpen: boolean = !this.opened) {
    this.opened = isOpen;
    isOpen ? this.onOpen.emit() : this.onClose.emit();
  }

}
