import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProcesosService {
  url: any = environment.api;

  constructor(private http: HttpClient) { }

  getData(): any {
    return this.http.get(`${this.url}/processes/user`);
  }
}
