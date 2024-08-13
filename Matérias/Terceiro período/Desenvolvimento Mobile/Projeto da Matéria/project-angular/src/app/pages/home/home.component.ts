import { Component } from '@angular/core';

@Component({
	selector: 'app-home',
	standalone: true,
	imports: [],
	templateUrl: './home.component.html',
	styleUrl: './home.component.css'
})
export class HomeComponent {
	mensagem: string = '';
	mensagem2: string = '';

	OnButtonEnter(): void {
		this.mensagem = 'O mouse entrou!';
	}

	OnButtonLeave(): void {
		this.mensagem2 = 'O mouse saiu!';
	}
}
