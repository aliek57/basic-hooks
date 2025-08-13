import Calculos from "../components/Calculos"

const HookMemo = () => {
  return (
    <div>
        <h2>Hook useMemo e useCallback</h2>
        <p>O useMemo memoriza o resultado de uma função e retorna o resultado dela</p>
        <p>O useCallback memoriza a função, garantindo que ela não seja recriada a cada renderização</p>
        <Calculos/>
    </div>
  )
}

export default HookMemo