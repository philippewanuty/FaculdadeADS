import javax.swing.*;



public class recursãosemCalda {

  static void fatP (int n, int x, int f) {

    if ( x == 0 || x == 1){

      System.out.println("O fatorial de " + n + " : " + f );
    
    }

    else {
      fatP (n, x-1, f*x);
    }

  }

  public static void main(String[] args) {

    int nro;

    nro = Integer.parseInt(JOptionPane.showInputDialog("Digite um valor que deseja saber o fatorial"));

    if (nro < 0) {
      System.out.println("Valor inválido, digite um valor igual ou maior que zero");
      System.exit(0);
      
    }

    else {
      fatP(nro, nro, 1);

    }
    System.exit(0);
    


  }



  






  
}
