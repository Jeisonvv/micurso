import UseState from "./ejemplos/parte2/ejemploUseState"
import UseState2 from "./ejemplos/parte2/ejemploUseState2"
import ComplexState from "./ejemplos/parte2/ejemploUseState3"
const Parte2 = () => {
    return (
       <div>
        <article>
            <h1>ESTADOS DE COMPONENTES, RENDERISADO CONDICIONAL Y EVENTOS</h1>
            <p>
                En esta parte vamos a ver los esstado de los componente, tambien vamos a rederisados condicionales y por ultimo los eventos todo para que nuestra aplicacion sea mas dinamica
            </p>
            <h2>Estados del componente</h2>
            <p>
                los estados son un array de dospiciones la primera tiene la informacion y en la segunda posicion es para actualizar la imformacion. para utilizarlos es conveniemte desestructurar las doposciones del estado. los estados nos permiten pintar la informcion cada vez que se actuliza {'(los componentes se actulizan cada vez que se hay informacion nueva en el useState o cuando llega props nuevas )'}
            </p>
            <UseState/>
            <UseState2/>
            <ComplexState/>
        </article>
       </div>
    )
}


export default Parte2