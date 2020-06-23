import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor() {}

  messageToast(
    icon: 'success' | 'error' | 'warning' | 'info' | 'question' | undefined,
    title: string,
    timer: number | undefined,
    text?: string
  ) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer,
    });

    Toast.fire({
      icon,
      title,
      text,
    });
  }

  showModal(title: string, html: string, icon: 'error' | 'warning' | 'success' | 'info') {
    Swal.fire({
      title,
      html,
      icon,
      confirmButtonColor: '#009999'
    });
  }

}
