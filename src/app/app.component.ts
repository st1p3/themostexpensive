import { Component, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { visits } from './visits';
import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //from input listeners
  @ViewChild('assignClaimName', { static: false }) assignClaimNameRef?: any;
  @ViewChild('assignClaimLastName', { static: false })
  assignClaimLastNameRef?: any;
  @ViewChild('assignClaimDOB', { static: false }) assignClaimDOBRef?: any;

  // data for the modal which will be compared to existing claims
  public allVisits: any = visits;
  public claimantName: string = '';
  public claimantLastName: string = '';
  public claimantDOB: any;

  claimFormBuilder = new FormBuilder();
  // kendo date picker display format
  public format: any = {
    displayFormat: 'MM/dd/yyyy',
    inputFormat: 'MM/dd/yyyy',
  };
  public value: Date = new Date();

  // samo testing purposes, obicni string da bi se printalo u htmlu

  dialogAction: string = '';
  claimAssociation: string = '';
  // samo testing purposes, obicni string da bi se printalo u htmlu

  claimNumber: string = '';

  comparedData: any = [];

  // dialog proceed used for claim search , this method is called from the dialog component
  // this method will handle aditional actions if needed

  handleDialogProceed(action: string) {
    this.dialogAction = action;
  }
  // get selected claim number
  onDisplayClaimedData(data: any) {
    this.claimNumber = data.claimNumber;
    this.claimForm.controls['claimNumberFB'].setValue(data.claimNumber);
  }

  // dialog actions

  public opened = false;
  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  onProceed() {
    this.close();
    this.claimAssociation = 'RECORD ADDED';
  }

  // after seach claim (claim select) modal user inputs Name and DOB and compares to existing claims
  // if there is a match it will show the result in the modal warning the user of data duplication

  claimForm = this.claimFormBuilder.group({
    claimNumberFB: ['', [Validators.required, Validators.minLength(18)]],
    firstNameFB: ['', Validators.required],
    lastNameFB: ['', Validators.required],
    dobFB: ['', Validators.required],
  });

  onAssignClaimFB(data: any) {
    this.comparedData = [];
    this.claimantName = data.firstNameFB;
    this.claimantLastName = data.lastNameFB;
    let claimantDOBobject = data.dobFB;

    let claimantDOBformated = moment(claimantDOBobject).format('MM/DD/yyy');
    this.claimantDOB = claimantDOBformated;

    const existingClaim = this.allVisits.find((priorRecord: any) => {
      if (
        priorRecord.claimNumber === this.claimNumber &&
        ((priorRecord.claimantName === this.claimantName &&
          priorRecord.claimantLastName === this.claimantLastName) ||
          priorRecord.dob === this.claimantDOB)
      ) {
        priorRecord['claimCompare'] = 'Prior Visit';
        priorRecord['fullName'] =
          priorRecord.claimantName + ', ' + priorRecord.claimantLastName;

        this.comparedData.push({
          claimCompare: 'This Visit',
          claimID: 1,
          claimNumber: this.claimNumber,
          fullName: this.claimantName + ', ' + this.claimantLastName,
          email: 'nebitno sad',
          dob: this.claimantDOB,
          visitDate: 'nebitno 06/02/2021',
        });
        this.comparedData.push(priorRecord);

        return true;
      } else {
        return false;
      }
    });

    if (existingClaim) {
      this.open();
    } else {
      this.claimAssociation = 'RECORD ADDED';
    }
  }

  public submitForm(): void {
    this.claimForm.markAllAsTouched();
    this.onAssignClaimFB(this.claimForm.value);
  }

  public clearForm(): void {
    this.claimForm.reset();
  }
}
