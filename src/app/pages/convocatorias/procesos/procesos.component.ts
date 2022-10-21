import { Component, OnInit } from '@angular/core';
import { ProcesosService } from 'src/app/services/procesos.service';

@Component({
  selector: 'app-procesos',
  templateUrl: './procesos.component.html',
  styleUrls: ['./procesos.component.scss']
})
export class ProcesosComponent implements OnInit {
  data: any[] = [];
  index: any = null;

  constructor(private procesosService: ProcesosService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): any {
    this.procesosService.getData().subscribe((x: any) => {
      this.data = x;
      this.getId(this.data[0].list[0].id);
    })
  }

  getId(id: any): any {
    this.index = id;
  }
}
