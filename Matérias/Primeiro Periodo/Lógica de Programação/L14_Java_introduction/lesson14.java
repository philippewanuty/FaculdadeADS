package L14_Java_introduction;

import javax.swing.*;

public class lesson14  {
    public static void main(String args[]) {
       
        int numero1, numero2, quociente;
        double base, expoente, potencia;
        String msg1, msg2;
        
     

         numero1 = Integer.parseInt(JOptionPane.showInputDialog("Digite o primeiro número: "));
         numero2 = Integer.parseInt(JOptionPane.showInputDialog("Digite o segundo número: "));

         base = Double.parseDouble(JOptionPane.showInputDialog("Digite a base da potência: "));
         expoente = Double.parseDouble(JOptionPane.showInputDialog("Digite o expoente da potência: "));
      
         quociente = numero1 / numero2;
         potencia = Math.pow(base,expoente);

         msg1= " O quociente da divisão dos dois números é: ";
         msg2 = " A potência do primeiro número pelo segundo número é: ";

         JOptionPane.showMessageDialog(null,msg1  + quociente);
         JOptionPane.showMessageDialog(null,msg2 + potencia);
    }
}
