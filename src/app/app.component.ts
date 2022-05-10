import { Cnpj } from './core/models/cnpj.model';
import { Component } from '@angular/core';
import { CnpjService } from './core/service/cnpj.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Busca de CNPJ';

  cnpj = new Cnpj();
  valor: number;

constructor(private cnpjService: CnpjService) { }


  carregarDados(){
    this.cnpjService.obterDados(this.valor)
    .then(obj => this.cnpj = obj)
    console.log(this.cnpj);
  }
}