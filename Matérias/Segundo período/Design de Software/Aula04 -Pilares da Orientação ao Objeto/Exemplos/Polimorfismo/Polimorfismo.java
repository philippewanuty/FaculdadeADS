  
 // Classe base ou superclasse
class Animal {
    // Método que pode ser sobrescrito pelas subclasses
    void fazerBarulho() {
        System.out.println("O animal faz um barulho.");
    }
}

// Subclasse que herda da classe Animal
class Cachorro extends Animal {
    // Sobrescrita do método fazerBarulho
    void fazerBarulho() {
        System.out.println("Cachorro faz Au Au!.");
    }
}

// Subclasse que herda da classe Animal
class Gato extends Animal {
    // Sobrescrita do método fazerBarulho
    void fazerBarulho() {
        System.out.println("Gato faz Miau!.");
    }
}


public class Polimorfismo {


    public static void main(String[] args) {
        // Criando instâncias das subclasses
        Animal animal1 = new Cachorro();
        Animal animal2 = new Gato();
        Animal animal = new Animal();

        // Chamando o método fazerBarulho para cada instância
        animal.fazerBarulho();
        animal1.fazerBarulho(); // Saída: O cachorro late.
        animal2.fazerBarulho(); // Saída: O gato mia.
        
    }

}


/*Neste exemplo, temos uma classe base Animal com um método fazerBarulho(), e duas subclasses Cachorro e Gato que herdam da classe Animal e sobrescrevem o método fazerBarulho() com comportamentos específicos para cada tipo de animal. No método main, criamos instâncias das subclasses e chamamos o método fazerBarulho() para cada uma delas. Isso demonstra o polimorfismo, pois o método fazerBarulho() é chamado de forma polimórfica, com diferentes comportamentos dependendo do tipo de animal. */