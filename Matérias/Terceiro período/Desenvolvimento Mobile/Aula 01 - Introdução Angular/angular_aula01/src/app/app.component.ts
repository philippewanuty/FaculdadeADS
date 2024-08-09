import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Teste1Component } from './Components/teste1/teste1.component';
import { Teste2Component } from './Components/teste2/teste2.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet ,Teste1Component,Teste2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_aula01';
}
