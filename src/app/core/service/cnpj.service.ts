import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CnpjService {

  apiUrl: string

  constructor(private http: HttpClient) {

    this.apiUrl = `https://brasilapi.com.br/api/cnpj/v1/19131243000197`;
   }

    obterDados(): Promise<any>{
      return this.http.get(`${this.apiUrl}`)
      .toPromise()
      .then( response => response);
    }

}
