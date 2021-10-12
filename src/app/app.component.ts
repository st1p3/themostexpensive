import { Component, ViewChild } from '@angular/core';
import { visits } from './visits';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('assignClaimName', { static: false }) assignClaimNameRef?: any;
  @ViewChild('assignClaimDOB', { static: false }) assignClaimDOBRef?: any;

  public allVisits: any = visits;
  public claimantName: string = '';
  public claimantDOB: any;
  public value: any = {};
  public format: any = {
    displayFormat: 'MM/dd/yyyy',
    inputFormat: 'MM/dd/yyyy',
  };
  public opened = false;

  // samo testing purposes, obicni string da bi se printalo u htmlu
  dialogAction: string = '';
  claimAssociation: string = '';
  // samo testing purposes, obicni string da bi se printalo u htmlu

  claimNumber: string = '';

  comparedData: any = [];

  handleDialogProceed(action: string) {
    this.dialogAction = action;
  }
  onDisplayClaimedData(data: any) {
    this.claimNumber = data[0].claimNumber;
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  proceed() {
    this.comparedData = [];
    this.claimantName = this.assignClaimNameRef.value;
    let claimantDOBobject = this.assignClaimDOBRef.value;

    let claimantDOBformated = moment(claimantDOBobject).format('MM/DD/yyy');
    this.claimantDOB = claimantDOBformated;

    const existing = this.allVisits.find((element: any) => {
      if (
        element.claimNumber === this.claimNumber &&
        (element.claimant === this.claimantName ||
          element.dob === this.claimantDOB)
      ) {
        element['claimCompare'] = 'Prior Visit';

        this.comparedData.push({
          claimCompare: 'This Visit',
          claimID: 1,
          claimNumber: this.claimNumber,
          claimant: this.claimantName,
          email: 'nebitno sad',
          dob: this.claimantDOB,
          visitDate: 'nebitno 06/02/2021',
        });
        this.comparedData.push(element);

        return true;
      } else {
        return false;
      }
    });
    if (existing) {
      this.open();
    } else {
      this.claimAssociation = 'RECORD ADDED';
    }
  }
}
