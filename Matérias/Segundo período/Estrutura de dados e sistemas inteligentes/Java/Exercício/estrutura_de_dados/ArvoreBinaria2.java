package estrutura_de_dados;

import javax.swing.JOptionPane;

public class ArvoreBinaria2 {
    
    static class BIntNo {
        int valor;
        BIntNo esq, dir;

        public BIntNo(int novoValor) {
            valor = novoValor;
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
            System.out.println(arv.valor);
        }
    }

    public void exibirNoEsq() {
        exibirEsquerdo(Raiz);
    }

    private void exibirDireito(BIntNo arv) {
        if (arv != null) {
            exibirDireito(arv.dir);
            System.out.println(arv.valor);
        }
    }

    public void exibirNoDir() {
        exibirDireito(Raiz);
    }

    public void exibirRaiz() {
        System.out.println("raiz " + Raiz.valor);
    }

    public void exibirNo() {
        exibirNoEsq();
        exibirRaiz();
        exibirNoDir();
    }

    public void excluirNo(int item) {
        try {
            BIntNo tempNo, pai, filho, temp;
            tempNo = Raiz;
            pai = null;
            filho = Raiz;

            while (tempNo != null && tempNo.valor != item) {
                pai = tempNo;
                if (item < tempNo.valor) {
                    tempNo = tempNo.esq;
                } else {
                    tempNo = tempNo.dir;
                }
            }

            if (tempNo == null) {
                System.out.println("item não localizado!");
            }

            if (pai == null) {
                if (tempNo.dir == null) {
                    Raiz = tempNo.esq;
                } else {
                    if (tempNo.esq == null) {
                        for (temp = tempNo, filho = tempNo.esq; filho.dir != null; temp = filho, filho = filho.dir);
                        if (filho != tempNo.esq) {
                            temp.dir = filho.esq;
                            filho.esq = Raiz.esq;
                        }
                        filho.dir = Raiz.dir;
                        Raiz = filho;
                    }
                }
            } else {
                if (tempNo.dir == null) {
                    if (pai.esq == tempNo) {
                        pai.esq = tempNo.esq;
                    } else {
                        pai.dir = tempNo.esq;
                    }
                } else {
                    if (tempNo == null) {
                        if (pai.esq == tempNo) {
                            pai.esq = tempNo.dir;
                        } else {
                            pai.dir = tempNo.dir;
                        }
                    } else {
                        for (temp = tempNo, filho = tempNo.esq; filho.dir != null; temp = filho, filho = filho.dir);
                        if (filho != tempNo.esq) {
                            temp.dir = filho.esq;
                            filho.esq = tempNo.esq;
                        }
                        filho.dir = tempNo.dir;
                        if (pai.esq == tempNo) {
                            pai.esq = filho;
                        } else {
                            pai.dir = filho;
                        }
                    }
                }
            }
        } catch (NullPointerException erro) {
            // item não encontrado
        }
    }

    public static void main(String args[]) {
        ArvoreBinaria2 arv = new ArvoreBinaria2();

        arv.inserirNo(Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro")));
        arv.inserirNo(Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro")));
        arv.inserirNo(Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro")));
        arv.inserirNo(Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro")));
        arv.inserirNo(Integer.parseInt(JOptionPane.showInputDialog("Digite um número inteiro")));

        arv.exibirNo();

        System.exit(0);
    }
}
