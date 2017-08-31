import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidepanel-container',
  templateUrl: './sidepanel-container.component.html',
  styleUrls: ['./sidepanel-container.component.css']
})
export class SidepanelContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  onBackdropClicked() {
    console.log('backdrop clicked');
  }
}
