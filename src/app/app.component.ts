import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // samo testing purposes, obicni string da bi se printalo u htmlu
  dialogAction: string = '';
  // samo testing purposes, obicni string da bi se printalo u htmlu

  claimSearchData: any = [];
  claimNumber: string = '';

  handleDialogProceed(action: string) {
    this.dialogAction = action;
  }
  onDisplayClaimedData(data: any) {
    this.claimNumber = data[0].claimNumber;
  }
}
