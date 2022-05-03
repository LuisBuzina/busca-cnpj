import { Component, OnInit } from '@angular/core';

import { CnpjService } from './core/service/cnpj.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cnpj-busca';

  dados = [];

constructor(private cnpjService: CnpjService) { }

ngOnInit() {

  this.carregarDados();

  }

  carregarDados(){
    this.cnpjService.obterDados()
    .then(dados => this.dados = dados );

    console.log(this.dados);
  }
}