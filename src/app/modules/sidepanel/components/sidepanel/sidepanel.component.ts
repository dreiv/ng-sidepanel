import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

/**
 * <app-sidepanel>
 *
 * This component corresponds to a side panel that can be opened in the side panel container.
 *
 * Please refer to README.md for examples on how to use it.
 */
@Component({
  selector: 'app-sidepanel',
  template: `
    <ng-content></ng-content>
  `,
  styleUrls: ['./sidepanel.component.scss']
})

export class SidepanelComponent {
  /** Whether the side panel is opened. */
  @HostBinding('class.opened') opened: boolean;

  /** Whether the side panel is located at the start of it's container. */
  @HostBinding('class.start')
  get isStart() {
    return this.position === 'start';
  }

  /** Whether the side panel is located at the end of it's container. */
  @HostBinding('class.end')
  get isEnd() {
    return this.position === 'end';
  }

  /** The side that the panel is attached to. */
  @Input() position: 'start' | 'end';
  /** Whether the side panel is docked to the side of the container. */
  @Input() dock: boolean;

  /** Emits whenever the panel has started opening. */
  @Output() onOpen = new EventEmitter();

  /** Emits whenever the panel has started closing. */
  @Output() onClose = new EventEmitter();

  constructor() {}

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
