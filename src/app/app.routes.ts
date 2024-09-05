import { Routes } from '@angular/router';
import { ListaContatosComponent } from './pages/lista-contatos/lista-contatos.component';
import { FormulairoContatoComponent } from './pages/formulairo-contato/formulairo-contato.component';

export const routes: Routes = [
    {
        path: "contatos",
        component: ListaContatosComponent
    },
    {
        path: "adicionar-contato",
        component: FormulairoContatoComponent
    },
    {
        path: "",
        redirectTo: "/contatos",
        pathMatch: "full"
    }
];
