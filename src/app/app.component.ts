import {AfterViewInit, Component} from '@angular/core';

declare var $: any;
declare function init_plugins();
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  ngAfterViewInit() {
    $("#status").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");

    setTimeout(() => {
      init_plugins();
    }, 500);
  }

}
