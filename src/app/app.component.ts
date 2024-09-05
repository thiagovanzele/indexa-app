import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormulairoContatoComponent } from "./pages/formulairo-contato/formulairo-contato.component";
import { ListaContatosComponent } from "./pages/lista-contatos/lista-contatos.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormulairoContatoComponent,
    ListaContatosComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

}
