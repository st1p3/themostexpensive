import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { TextBoxComponent } from '@progress/kendo-angular-inputs';
import { claims } from './../claims';

@Component({
  selector: 'app-claim-search',
  templateUrl: './claim-search.component.html',
  styleUrls: ['./claim-search.component.css'],
})
export class ClaimSearchComponent implements OnInit {
  @Output() sendClaimedData = new EventEmitter();
  @ViewChild('claimSearchInput', { static: false }) searchClaimRef?: any;

  public opened = false;
  private claimedNumber: string = '';
  public allClaims: any[] = claims;
  public claimedData: any[] = [];
  onSearch() {
    this.claimedData = [];
    this.claimedNumber = this.searchClaimRef.value;
    this.allClaims.forEach((element) => {
      if (element.claimNumber === this.claimedNumber) {
        this.claimedData = [element];
      }
    });
  }

  selectClaim() {
    this.sendClaimedData.emit(this.claimedData);
    this.close();
  }

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  constructor() {}

  ngOnInit(): void {}
}
