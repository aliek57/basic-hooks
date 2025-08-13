import { useState } from 'react';

const Contador = () => {
    const [contador, setContador] = useState(0);
  return (
    <div>
        <h3>Contador: {contador}</h3>
        <div>
            <button onClick={() => setContador(contador + 1)}>+</button>
            <button onClick={() => setContador(0)}>0</button>
            <button onClick={() => setContador(contador - 1)}>-</button>
        </div>
    </div>
  )
}

export default Contador