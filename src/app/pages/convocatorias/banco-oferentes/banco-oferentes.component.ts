import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from 'src/app/services/register.service';

declare var Swal: any;
declare var $: any;
@Component({
  selector: 'app-banco-oferentes',
  templateUrl: './banco-oferentes.component.html',
  styleUrls: ['./banco-oferentes.component.scss']
})
export class BancoOferentesComponent implements OnInit {
  atachFile: any;
  forma: FormGroup;

  constructor(private _registerService: RegisterService) {}

  ngOnInit(): void {
    $(document).ready(this.setView());

    this.formInit();
  }

  formInit() {
    this.forma = new FormGroup({
      ProveedorNombre: new FormControl(''),
      RepresentanteNombre: new FormControl(''),
      Identificacion: new FormControl(''),
      NombreIntegrantes: new FormControl(''),
      CorreoElectronico: new FormControl(''),
      Telefono: new FormControl(''),
      Fax: new FormControl(''),
      Direccion: new FormControl('')
    });
  }

  resetForm() {
    let empty = {
      ProveedorNombre: '',
      RepresentanteNombre: '',
      Identificacion: '',
      NombreIntegrantes: '',
      CorreoElectronico: '',
      Telefono: '',
      Fax: '',
      Direccion: ''
    };

    this.forma.setValue(empty);
  }

  saveChanges() {

    Swal.fire({
      icon: "warning",
      title:
        "La convocatoria del Banco de Oferentes de la Empresa EICE Faro del Catatumbo ha finalizado. Lo invitamos a participar en una próxima oportunidad",
      showConfirmButton: true,
    });
    return;


    if (
      this.forma.value.ProveedorNombre === "" || 
      this.forma.value.RepresentanteNombre === "" || 
      this.forma.value.Identificacion === "" || 
      this.forma.value.NombreIntegrantes === "" || 
      this.forma.value.CorreoElectronico === "" || 
      this.forma.value.Telefono === "" || 
      this.forma.value.Direccion === "" 
    ) {
      Swal.fire({
        icon: "warning",
        title:
          "Debes completar los campos requeridos del formulario para continuar.",
        showConfirmButton: true,
      });
      return;
    }

    this._registerService.saveData(this.forma.value).subscribe(
      (result: any) => {
        console.log(result);
        if (result.success === true) {
          Swal.fire({
            icon: "success",
            title:
              "El registro se ha realizado exitosamente.",
            showConfirmButton: true,
          });
          
          this.resetForm();
        } else {
          Swal.fire({
            icon: "warning",
            title:
              result.message,
            showConfirmButton: true,
          });
          return;
        }
      },
      (error) => {
        Swal.fire({
          icon: "error",
          title:
            "El registro no se ha podido realizar. Por favor intente más tarde.",
          showConfirmButton: true,
        });
        return;
      }
    );
  }

  setView(): any {
    $('#cont').show();
    $('#pol').show();
    $('#con').hide();
    $('#esc').hide();
    $('#inf').hide();
    $('#ins').hide();
    $('#nor').hide();
    $('#plan').hide();
    $('#pres').hide();
    $('#ser').hide();
    $('#planes').hide();
    $('#man').hide();
    $('#gest').hide();
    $('#gcont').click(function () {
      $('#cont').show();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#gcon').click(function () {
      $('#cont').hide();
      $('#con').show();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#gesc').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').show();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#ginf').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').show();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#gins').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').show();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#gnor').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').show();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#gplan').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').show();
      $('#pres').hide();
      $('#ser').hide();
    });
    $('#gpres').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').show();
      $('#ser').hide();
    });
    $('#gser').click(function () {
      $('#cont').hide();
      $('#con').hide();
      $('#esc').hide();
      $('#inf').hide();
      $('#ins').hide();
      $('#nor').hide();
      $('#plan').hide();
      $('#pres').hide();
      $('#ser').show();
    });
    $('#gpol').click(function () {
      $('#pol').show();
      $('#planes').hide();
      $('#man').hide();
      $('#gest').hide();
    });
    $('#gplanes').click(function () {
      $('#pol').hide();
      $('#planes').show();
      $('#man').hide();
      $('#gest').hide();
    });
    $('#gman').click(function () {
      $('#pol').hide();
      $('#planes').hide();
      $('#man').show();
      $('#gest').hide();
    });
    $('#ggest').click(function () {
      $('#pol').show();
      $('#planes').hide();
      $('#man').hide();
      $('#gest').show();
    });
  }
}

