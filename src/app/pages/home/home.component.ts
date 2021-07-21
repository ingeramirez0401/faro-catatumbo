import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

declare function init_slider();
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta
    ) { 
  }

  ngOnInit(): void {
    this.title.setTitle("Faro del Catatumbo - Inicio");
    this.meta.updateTag({name: "description", content: ''});

    setTimeout(() => {      
      $('#home').css({ 'height': ($(window).height()) + 'px' });
      $(window).resize(function() {
          $('#home').css({ 'height': ($(window).height()) + 'px' });
      });

      init_slider();
    }, 500);
  }

  ngAfterContentInit(): void {
    console.log('ejecuta');
  }

}
