import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { ContatoDetalhesComponent } from './pages/contato-detalhes/contato-detalhes.component';


export const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: 'contato', component: ContatoComponent,
    children:[
      {path:'detalhes', component: ContatoDetalhesComponent},
    ]
  }

];
