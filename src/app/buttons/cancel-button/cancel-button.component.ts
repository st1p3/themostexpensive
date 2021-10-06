import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cancel-button',
  templateUrl: './cancel-button.component.html',
  styleUrls: ['./cancel-button.component.css'],
})
export class CancelButtonComponent {
  @Output() dialogProceed = new EventEmitter<string>();
  public opened = false;

  public close() {
    this.opened = false;
  }

  public open() {
    this.opened = true;
  }

  proceed() {
    this.dialogProceed.emit('funkcija');
    this.close();
  }
}
// triba installat:
// ng add @progress/kendo-angular-dialog
// ng add @progress/kendo-angular-buttons
