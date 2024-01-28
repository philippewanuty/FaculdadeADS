
// Desenvolva um algoritmo que receba 100 valores numéricos inteiros e mostre a soma desses 100 números
import javax.swing.JOptionPane;
public class exemplo1 {


  public static void main(String[] args) {
    
    double Num[];
    int i;
    double soma = 0;
    double media;


    Num = new double [50];


    for (i = 0 ; i <= 49; i++){


        Num[i] = Double.parseDouble(JOptionPane.showInputDialog("Digite um numero inteiro")); 
        soma = soma+Num[i];



    }


      media = soma/10;


    System.out.println("A media das 50 notas digitadas é: " + media);


    System.exit(0);



  }
  
}


