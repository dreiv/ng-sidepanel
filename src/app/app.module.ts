import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FillerComponent } from './filler/filler.component';
import { FooterComponent } from './footer/footer.component';
import { SidepanelModule } from './modules/sidepanel/sidepanel.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    FillerComponent,
  ],
  imports: [
    BrowserModule,
    SidepanelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
