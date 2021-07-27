import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(this.setView());
  }

  setView(): any {
    $('#1').show();
    $('#2').hide();
    $('#3').hide();
    $('#4').hide();
    $('#5').hide();
    $('#6').hide();
    $('#7').hide();
    $('#8').hide();
    $('#set1').click(function () {
      $('#1').show();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
      $('#5').hide();
      $('#6').hide();
      $('#7').hide();
      $('#8').hide();
    });
    $('#set2').click(function () {
      $('#1').hide();
      $('#2').show();
      $('#3').hide();
      $('#4').hide();
      $('#5').hide();
      $('#6').hide();
      $('#7').hide();
      $('#8').hide();
    });
    $('#set3').click(function () {
      $('#1').hide();
      $('#2').hide();
      $('#3').show();
      $('#4').hide();
      $('#5').hide();
      $('#6').hide();
      $('#7').hide();
      $('#8').hide();
    });
    $('#set4').click(function () {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').show();
      $('#5').hide();
      $('#6').hide();
      $('#7').hide();
      $('#8').hide();
    });
    $('#set5').click(function () {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
      $('#5').show();
      $('#6').hide();
      $('#7').hide();
      $('#8').hide();
    });
    $('#set6').click(function () {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
      $('#5').hide();
      $('#6').show();
      $('#7').hide();
      $('#8').hide();
    });
    $('#set7').click(function () {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
      $('#5').hide();
      $('#6').hide();
      $('#7').show();
      $('#8').hide();
    });
    $('#set8').click(function () {
      $('#1').hide();
      $('#2').hide();
      $('#3').hide();
      $('#4').hide();
      $('#5').hide();
      $('#6').hide();
      $('#7').hide();
      $('#8').show();
    });
  }
}
