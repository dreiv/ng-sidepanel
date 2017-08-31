import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SidepanelContainerComponent } from './components/sidepanel-container/sidepanel-container.component';
import { SidepanelComponent } from './components/sidepanel/sidepanel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SidepanelComponent,
    SidepanelContainerComponent
  ],
  exports: [
    SidepanelComponent,
    SidepanelContainerComponent
  ]
})
export class SidepanelModule {}
