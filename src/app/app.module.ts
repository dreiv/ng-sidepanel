import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { FillerComponent } from './filler/filler.component';
import { SidePanelContainerComponent } from './modules/side-panel/components/side-panel-container/side-panel-container.component';
import { SidePanelComponent } from './modules/side-panel/components/side-panel/side-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FillerComponent,
    SidePanelContainerComponent,
    SidePanelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
