import {useState, useMemo, useCallback} from 'react'
import './Calculos.css'

const Calculos = () => {
    const [numero, setNumero] = useState([1, 2, 3]);

    // useMemo vai guardar o resultado da função 
    const soma = useMemo(() => {
        console.log("Calculando soma");
        return numero.reduce((a,b) => a+b, 0);
    }, [numero]); // Se o array mudar a função vai ser recalculada e mostrar o novo resultado

    // useCallback vai guardar a função
    const filtrarPares = useCallback(() => {
        console.log("Filtrando pares");
        return numero.filter(num => num%2 == 0);
    }, [numero]); // Se o array mudar a função vai ser recriada
  return (
    <div className='Calculos'>        
        <h3>Números: {numero.join(" ")}</h3>
        <h4>Soma: {soma}</h4>
        <h4>Pares: {filtrarPares().join(" ")}</h4>
        <button 
            onClick={() => setNumero([...numero, numero.length+1])}>
                Adicionar número
        </button>
    </div>
  )
}

export default Calculos