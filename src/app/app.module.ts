import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillerComponent } from './filler/filler.component';
import { SidepanelModule } from './modules/sidepanel/sidepanel.module';
import { DocumentService } from './services/document.service';

@NgModule({
  declarations: [
    AppComponent,
    FillerComponent,
  ],
  imports: [
    BrowserModule,
    SidepanelModule
  ],
  providers: [DocumentService],
  bootstrap: [AppComponent]
})
export class AppModule {}
