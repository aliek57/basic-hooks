import { useState } from 'react';
import './Contador.css'

const Contador = () => {
    const [contador, setContador] = useState(0);
  return (
    <div className='Contador'>
        <h3>Contador: {contador}</h3>
        <div className='btns'>
            <button onClick={() => setContador(contador + 1)} id='up'>+</button>
            <button onClick={() => setContador(0)} id='zero'>0</button>
            <button onClick={() => setContador(contador - 1)} id='down'>-</button>
        </div>
    </div>
  )
}

export default Contador