import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { TrackerComponent } from './components/tracker/tracker.component';
import { TrackerService } from './services/tracker.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TrackerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [TrackerService],
  bootstrap: [AppComponent]
})
export class AppModule { }