import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  standalone: false,
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrl: './confirm-dialog.component.css'
})
export class ConfirmDialogComponent {
  @Input() message: string = "";
  @Input() title: string = "";

  constructor(public activeModal: NgbActiveModal){}

  onConfirm(){
    this.activeModal.close(true);
  }

  onClose(){
    this.activeModal.dismiss();
  }
}
