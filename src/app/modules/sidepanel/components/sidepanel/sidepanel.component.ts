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
  styleUrls: ['./sidepanel.component.scss'],
  host: {
    '[class.open]': 'this.opened',
    '[class.start]': 'this.position === "start"',
    '[class.end]': 'this.position === "end"'
  }
})
export class SidepanelComponent implements OnInit {
  /** Whether the side panel is opened. */
  private opened: boolean;
  @Input() position: 'end' | 'start';

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
  }

}
