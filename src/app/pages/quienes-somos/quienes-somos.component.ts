import { Component, OnInit } from '@angular/core';

declare var ElastiStack: any;
declare var $: any;
@Component({
  selector: 'app-quienes-somos',
  templateUrl: './quienes-somos.component.html',
  styleUrls: ['./quienes-somos.component.scss']
})
export class QuienesSomosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      new ElastiStack( document.getElementById( 'elasticstack' ) );
    }, 500);
  }

}
