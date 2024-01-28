//Desenvolva um algoritmo que receba 120 valores numéricos inteiros, numa matriz 10 x 12 e mostre a soma destes 120 números.


import javax.swing.JOptionPane;

public class exemplo2 {

    public static void main(String[] args) {

        int MatSoma[][];
        int a;
        int b;
        int soma = 0;

        MatSoma = new int[10][12];

        for (a = 0; a <= 9; a++) {
            for (b = 0; b <= 11; b++) {
                MatSoma[a][b] = Integer.parseInt(JOptionPane.showInputDialog("Digite um numero inteiro"));
                soma = soma + MatSoma[a][b];
            }
        }

        System.out.println("A soma dos 120 valores digitados é: " + soma);
    }
}
