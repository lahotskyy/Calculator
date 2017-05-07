import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';
import { SimpleModeComponent } from './simple-mode/simple-mode.component';
import { AdvancedModeComponent } from './advanced-mode/advanced-mode.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleModeComponent,
    AdvancedModeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
