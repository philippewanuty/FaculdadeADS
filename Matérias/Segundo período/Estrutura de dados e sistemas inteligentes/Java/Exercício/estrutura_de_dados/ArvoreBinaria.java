package estrutura_de_dados;

import java.util.Scanner;

public class ArvoreBinaria {

    static class BIntNo {
        int valor;
        BIntNo esq, dir;

        public BIntNo(int valor) {
            this.valor = valor;
            esq = null;
            dir = null;
        }
    }

    private BIntNo Raiz;

    private BIntNo inserir(BIntNo arvore, int novoNo) {
        if (arvore == null) {
            return new BIntNo(novoNo);
        } else {
            if (novoNo < arvore.valor) {
                arvore.esq = inserir(arvore.esq, novoNo);
            } else {
                arvore.dir = inserir(arvore.dir, novoNo);
            }
            return arvore;
        }
    }

    public void inserirNo(int novoValor) {
        Raiz = inserir(Raiz, novoValor);
    }

    private void exibirEsquerdo(BIntNo arv) {
        if (arv != null) {
            exibirEsquerdo(arv.esq);
            System.out.print(arv.valor + " ");
        }
    }

    public void exibirNoEsq() {
        exibirEsquerdo(Raiz);
    }

    private void exibirDireito(BIntNo arv) {
        if (arv != null) {
            exibirDireito(arv.dir);
            System.out.print(arv.valor + " ");
        }
    }

    public void exibirNoDir() {
        exibirDireito(Raiz);
    }

    private void exibirRaiz() {
        System.out.println("Raiz: " + Raiz.valor);
    }

    public void exibirNo() {
        System.out.print("Elementos à esquerda: ");
        exibirNoEsq();
        System.out.println();
        exibirRaiz();
        System.out.print("Elementos à direita: ");
        exibirNoDir();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        ArvoreBinaria arvore = new ArvoreBinaria();

        System.out.println("Insira cinco números inteiros:");
        for (int i = 0; i < 5; i++) {
            int num = scanner.nextInt();
            arvore.inserirNo(num);
        }

        arvore.exibirNo();
    }
}
