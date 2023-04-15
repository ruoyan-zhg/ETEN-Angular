import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {


  public btnModificarDatosSeleccionado: boolean = false;
  public btnSubscripcionSeleccionada: boolean = false;
  public imagenSeleccionada: string = 'https://cdn-icons-png.flaticon.com/512/747/747376.png';

  public seleccionarImagen(): void {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      if (!inputElement || !inputElement.files || !inputElement.files[0]) {
        return;
      }
      const archivoSeleccionado = inputElement.files[0];
      const lector = new FileReader();
      lector.readAsDataURL(archivoSeleccionado);
      lector.onload = () => {
        if (lector.result != null) {
          this.imagenSeleccionada = lector.result.toString();
        }
      };
    };
    input.click();
  }

  public subscripcion() {
    this.btnSubscripcionSeleccionada = !this.btnSubscripcionSeleccionada;
  }

  public guardarCambios(): void {
    //Cambios al guardar los datos
    alert('guardar cambios por hacer')
    this.modificarDatos();
  }

  public modificarDatos(): void {
    this.btnModificarDatosSeleccionado = !this.btnModificarDatosSeleccionado;
    this.hacerInputEditableyNoEditable();
  }

  public hacerInputEditableyNoEditable() {
    var nombre = document.getElementById("form_nombre_user") as HTMLInputElement;
    var email = document.getElementById("form_email") as HTMLInputElement;
    nombre.readOnly = !nombre.readOnly;
    email.readOnly = !email.readOnly;
  }

}
