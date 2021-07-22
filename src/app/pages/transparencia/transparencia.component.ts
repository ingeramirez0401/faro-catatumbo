import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-transparencia',
  templateUrl: './transparencia.component.html',
  styleUrls: ['./transparencia.component.scss'],
})
export class TransparenciaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $(document).ready(this.setView());
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
