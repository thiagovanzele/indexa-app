import { Component } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulairo-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    ContainerComponent, 
    SeparadorComponent,
    ReactiveFormsModule
  ],

  templateUrl: './formulairo-contato.component.html',
  styleUrl: './formulairo-contato.component.css'
})
export class FormulairoContatoComponent {

  contatoForm: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('Thiago'),
      telefone: new FormControl('99 9999 9999'),
      email: new FormControl('thiago@teste.com'),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('Ola mundo!')
    })
  }
}
