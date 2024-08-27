import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './componentes/container/container.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { SeparadorComponent } from './componentes/separador/separador.component';
import { ContatoComponent } from './componentes/contato/contato.component';
import { Contato } from './componentes/contato/contato';
import { FormsModule } from '@angular/forms';

import agenda from './agenda.json'
import { FormulairoContatoComponent } from "./pages/formulairo-contato/formulairo-contato.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ContainerComponent,
    CabecalhoComponent,
    SeparadorComponent,
    ContatoComponent,
    FormsModule,
    FormulairoContatoComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
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
