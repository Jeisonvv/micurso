import { useState } from "react";

const UseState2 = () => {
    const [left, setleft] = useState(0);
    const [right, setright] = useState(0)

    const increaseLeft = () => {
        setleft(left + 1)
    }
    const increaseRight = () => {
        setright(right + 1)
    }
    const reset = () => {
        setleft(0)
        setright(0)
    }
    return (
        <div>
            <h2>Ejemplo de un estado atomico</h2>
            <p>
                es buena practica tener los estados atomicos muy bien separados y entendibles. Pero recordar  que tiennen que ser esenciales para no generar estados inecesarios 
            </p>
            <div className="ejemplo">
                 {left}
                 <button onClick={increaseLeft}>left</button>
                 <button onClick={reset}>reset</button>
                 <button onClick={increaseRight}>right</button>
                 {right}
            </div>
            
        </div>
    )

}


export default UseState2