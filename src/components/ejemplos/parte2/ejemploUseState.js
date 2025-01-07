import { useState } from "react"
const UseState = () => {
    const [contador, setContador] = useState(0)
    // funcion para incrmentar el contador en uno
    const incrementar = () => {
        setContador(contador + 1)
    }
    // funcion para restar el contador en uno 
    const restar = () => {
        setContador(contador - 1)
    }
    // esta funcion resetea el contador a cero 
    const reset = () => {
        setContador(0)
    }
    // saber si es par o es inpar 
    const isevent = contador % 2 === 0;
    return (
        <div>
            <h3>Ejemplo de estado simple</h3>
            <p>
                aqui tenemos un estado sencillo para un contador que puede in crementar, restar y tambien volover acero gracial a los eventos para esto generamos unas funciones para cada evento al hacer click en los botones. es muy importatnte tratar de no tener muchos estados para que no utlice tantos recursos. 
            </p>
            <div className="ejemplo">
            <p>{contador}</p>
            <p>{isevent ? 'el numero es par' : 'este numero no es par'}</p>
            <button onClick={incrementar}>incrementar</button>
            <button onClick={restar}>restar</button>
            <button onClick={reset}>resetear</button>
            </div>
            
            
        </div>
    )
}

export default UseState