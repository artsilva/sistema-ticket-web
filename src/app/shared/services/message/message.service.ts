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
      confirmButtonText: 'Aceptar',
      timer,
    });

    Toast.fire({
      icon,
      title,
      text,
    });
  }

  showModal(
    title: string,
    html: string,
    icon: 'error' | 'warning' | 'success' | 'info'
  ) {
    Swal.fire({
      title,
      html,
      icon,
      // confirmButtonColor: '#009999',
      allowOutsideClick: false,
      confirmButtonText: 'Aceptar',
    });
  }

  async showModalTextArea(title: string) {
    return Swal.fire({
      title,
      input: 'textarea',
      inputPlaceholder: 'Ingrese el motivo aquí...',
      inputAttributes: {
        'aria-label': 'Ingrese el motivo aquí',
      },
      // showCancelButton: true,
      allowOutsideClick: false,
      allowEscapeKey: false,
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      onOpen: () => {
        Swal.disableButtons();
        Swal.getInput().addEventListener('keyup', (e) => {
          if (e.target) {
            Swal.enableButtons();
          } else {
            Swal.disableButtons();
          }
        });
      },
    });
  }

  async confirmDialog(title: string, text: string, icon: 'error' | 'warning' | 'success' | 'info') {
    return Swal.fire({
      title,
      text,
      icon,
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      allowOutsideClick: false,
    });
  }

}
