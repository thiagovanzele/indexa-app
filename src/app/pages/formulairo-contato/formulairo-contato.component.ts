import { Component } from '@angular/core';
import { ContainerComponent } from "../../componentes/container/container.component";
import { SeparadorComponent } from "../../componentes/separador/separador.component";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulairo-contato',
  standalone: true,
  imports: [
    ContainerComponent,
    ContainerComponent, 
    SeparadorComponent,
    ReactiveFormsModule,
    CommonModule
  ],

  templateUrl: './formulairo-contato.component.html',
  styleUrl: './formulairo-contato.component.css'
})
export class FormulairoContatoComponent {

  contatoForm: FormGroup;

  constructor() {
    this.contatoForm = new FormGroup({
      nome: new FormControl('', Validators.required),
      telefone: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      aniversario: new FormControl(''),
      redes: new FormControl(''),
      observacoes: new FormControl('')
    })
  }

  salvarContato() {
    console.log(this.contatoForm.value)
  }
}
