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
    value = value === 'end' ? 'end' : 'start';
  }

  private _position: 'start' | 'end' = 'start';

  constructor() { }

  ngOnInit() {
  }

}
