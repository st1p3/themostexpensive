import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancelButtonComponent } from './buttons/cancel-button/cancel-button.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';




@NgModule({
  declarations: [
    AppComponent,
    CancelButtonComponent
  ],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DialogsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
