import { useState } from "react";   

const ComplexState = () => {
    // este es el estado inicial que le vamos a pasar el satado de counter
    const initalState = {
        left: 0,
        right: 0,
        message: 'Este es un estado complejo '
    };
    const [counter, setCounter] = useState(initalState);
    const [click, setClick] = useState([]);

    const handleClickLeft = () => {
        const newCounter = {
            ...counter,
            left: counter.left + 1
        };
        const preClick = [...click, 'L'];
        setCounter(newCounter);
        setClick(preClick)
    };

    const handleClickRight = () => {
        const newCounter = {
            ...counter,
            right: counter.right + 1
        };
        const preClick = [...click, 'R'];
        setCounter(newCounter);
        setClick(preClick);
    };

    const handleClickRest = () => {
        setCounter(initalState)
        setClick([])
    }




    return (
        <div>
            <h2>Ejemplo estado complejo</h2>
            <p>
                En este ejemplo utilizaremos un objeto que nos podra ayudar a entender que un estado puede ir cualquier cosa como array o array con objetos. En estos estados es recomendable utilizar los expresopereitor ya que puede crecer mucho un estado de react. los estados comomlas props son inmutables ya que esto úede generar erroes en react
            </p>
            <div className="ejemplo">
                {counter.left}
                <button onClick={handleClickLeft}>Left</button>
                <button onClick={handleClickRest}>Rest</button>
                <button onClick={handleClickRight}>Right</button>
                {counter.right}
                <p>{counter.message}</p>
                <p>{click.join(". ")}</p>
            </div>
            

        </div>
    )
}

export default ComplexState