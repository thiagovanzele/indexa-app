
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Contato } from '../../componentes/contato/contato';
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { CabecalhoComponent } from '../../componentes/cabecalho/cabecalho.component';
import { ContainerComponent } from '../../componentes/container/container.component';
import { ContatoComponent } from '../../componentes/contato/contato.component';
import { FormulairoContatoComponent } from '../formulairo-contato/formulairo-contato.component';

import agenda from "../../agenda.json"
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-contatos',
  standalone: true,
  imports: [
    SeparadorComponent,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormulairoContatoComponent,
    RouterLink
  ],
  templateUrl: './lista-contatos.component.html',
  styleUrl: './lista-contatos.component.css'
})
export class ListaContatosComponent {

  alfabeto: string = 'abcdefghijklmnopqrstuvwxyz';
  contatos: Array<Contato> = agenda;

  filtroPorTexto: string = '';

  private removerAcentos(texto: string): string {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }

  filtrarContatoPorNome(): Contato[] {
    if (!this.filtroPorTexto) {
      return this.contatos;
    }
    return this.contatos.filter(contato => {
      return this.removerAcentos(contato.nome).toLowerCase().includes(this.removerAcentos(this.filtroPorTexto).toLowerCase());
    })
    
  }

  filtrarContatoPorLetraInicial(letra: string): Contato[] {
    return this.filtrarContatoPorNome().filter(contato => {
      return this.removerAcentos(contato.nome.toLowerCase()).startsWith(this.removerAcentos(letra).toLowerCase());
    })
  }

}
