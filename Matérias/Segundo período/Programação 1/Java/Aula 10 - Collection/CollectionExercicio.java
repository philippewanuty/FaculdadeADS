

import java.util.ArrayList;
import java.util.Scanner;
import java.util.Iterator;

public class CollectionExercicio {
	
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		ArrayList<Integer> numeros = new ArrayList<>();
		
		System.out.println("Digite os numeros a serem somados.(Para parar digite um numero negativo):");
			
		while (true) {
	       int numero = scanner.nextInt();
	       if (numero < 0) {
	           break;
	       }
	       numeros.add(numero);
		}
		   
		System.out.println("Números armazenados:");
		
		Iterator<Integer> iterator = numeros.iterator();
		
		while (iterator.hasNext()) {
		    System.out.print(iterator.next() + " ");
		}
		
		System.out.println();
		
		Iterator<Integer> somaIterator = numeros.iterator();
		
		int soma = 0;
		
		while (somaIterator.hasNext()) {
		    soma += somaIterator.next();
		}
		
		System.out.println("Soma total dos números: " + soma);
		
		scanner.close();



	}

}

