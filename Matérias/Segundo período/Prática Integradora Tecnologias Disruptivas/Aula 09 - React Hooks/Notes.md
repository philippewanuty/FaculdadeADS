# React hooks

     São funções que simplificam nosso código.


## UseState

    O useState é um Hook do React que permite adicionar estado a componentes funcionais.
    Ele retorna um par: o valor do estado atual e uma função para atualizá-lo. 
    É utilizado assim:

```Javascript
import { useState } from 'react'; //Importa a funcão do react

function MeuComponente() {

  const [contador, setContador] = useState(0); //Declaração

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Clique aqui
      </button>
    </div>
  );
}```

