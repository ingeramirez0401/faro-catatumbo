import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseUrl: string = "";

  constructor(private http: HttpClient, private _configService: ConfigService) { 
    this.baseUrl = this._configService.getApiURI();
  }

  saveData(data: any) {
    let body = JSON.stringify({
      ProveedorNombre: data.ProveedorNombre,
      RepresentanteNombre: data.RepresentanteNombre,
      Identificacion: data.Identificacion,
      NombreIntegrantes: data.NombreIntegrantes,
      CorreoEletronico: data.CorreoElectronico,
      Telefono: data.Telefono,
      Fax: data.Fax,
      Direccion: data.Direccion
    });

    console.log(body);

    const httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
      }),
    };

    return this.http.post(this.baseUrl + "/BancoOferentesFaro/register", body, httpOptions);
  }

}
