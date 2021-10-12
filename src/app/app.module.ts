import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormGroup, FormControl, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CancelButtonComponent } from './buttons/cancel-button/cancel-button.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ClaimSearchComponent } from './claim-search/claim-search.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';


@NgModule({
  declarations: [AppComponent, CancelButtonComponent, ClaimSearchComponent],
  imports: [
    BrowserModule,
    ButtonsModule,
    BrowserAnimationsModule,
    DialogsModule,
    InputsModule,
    LabelModule,
    LayoutModule,
    FormsModule,
    GridModule,
    DateInputsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
