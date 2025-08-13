import {useState, useEffect} from 'react'

const APIRequest = () => {
    const [imagem, setImagem] = useState();

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => setImagem(data.message));
    }, []); // O array vazio [] como segundo argumento garante que o efeito seja executado apenas uma vez. Se colocar [imagem], o efeito será executado sempre que a imagem mudar  

  return (
    <div>
        <h3>Consulta API</h3>
        <img src={imagem} alt="Imagem de Cachorro" />
    </div>
  )
}

export default APIRequest