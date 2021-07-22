import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-atencion-ciudadano',
  templateUrl: './atencion-ciudadano.component.html',
  styleUrls: ['./atencion-ciudadano.component.scss']
})
export class AtencionCiudadanoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(this.setView());
  }

  setView(): any {
    $('#dat').show();
    $('#con').hide();
    $('#ven').hide();
    $('#mec').hide();
    $('#gdat').click(function () {
      $('#dat').show();
      $('#con').hide();
      $('#ven').hide();
      $('#mec').hide();
    });
    $('#gcon').click(function () {
      $('#dat').hide();
      $('#con').show();
      $('#ven').hide();
      $('#mec').hide();
    });
    $('#gven').click(function () {
      $('#dat').hide();
      $('#con').hide();
      $('#ven').show();
      $('#mec').hide();
    });
    $('#gmec').click(function () {
      $('#dat').hide();
      $('#con').hide();
      $('#ven').hide();
      $('#mec').show();
    });
  }
}
