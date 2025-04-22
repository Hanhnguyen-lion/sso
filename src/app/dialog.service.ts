import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private modalService: NgbModal) { }

  openConfirmDialog(message: string, title: string): Observable<boolean>{
    const modalRef = this.modalService.open(ConfirmDialogComponent);
    modalRef.componentInstance.message = message;
    modalRef.componentInstance.title = title;

    return new Observable((observable) =>{
      modalRef.result.then(
        (result) =>{
          observable.next(result);
          observable.complete();
        },
        (reason) =>{
          observable.next(false);
          observable.complete();
        }
      )
    })
  }
}
