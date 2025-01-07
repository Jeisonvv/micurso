import React  from "react";
import Props from "./propsEjemplo";

const IndexApp = () => {
    const message2 = 'este este mensaje es desde una variable que se utiliza en el modulo'
    return (
        <div>
            <h1>CURSO DE REACT</h1>
            <p>
                En este proyecto voy a poner en práctica todo lo que aprenda para mejorar mis habilidades y generar desde cero el proyecto. Empezaré con los conceptos fundamentales, como funciona una página web y aprender a utilizar las herramientas de desarrollo.
                </p>
            <h2>Herramientas de desarrollo</h2>
            <p>
                con la tecla f12 podras abrir las herramientas donde encontraras Podemos empezar con las herramientas de desarrollo para esto se utiliza la tecla f12 esta acción abre las hermanitas de desarrollo en las cuales podemos encontrar las siguientes pestañas que son element, console, Soucer, networt, memory, application, security, lighthouse, record, y otras mas que se pueden instalar. Por el momento nos vamos a enfatizar en la pestaña de Nentwort y Console.
                
            </p>
            <h2>NENTWORT</h2>
            <p>
                En la pestaña de  podemos encontrar los recursos que utiliza la pagina para crearse (para pintarse) o sea las peticiones de imágenes y otros recursos al servidor. Para este curso es muy recomendable utilizar la casilla de DISABLE CACHE esto para cada vez que carguemos los recursos sean los mas reciente ya que si no tenemos este check activado no podremos obtenerlos ya que se guardaran en la cache tambien con el comando ctrl + p colocando este comando podemos desactivar el javascript {'>'}disable desactiva las funciones y {'>'}enable lo activa otra vez
            </p>
            <h3>JSX</h3>
            <p>
                este lenguaje lo utiliza para renderizar osea pintar los elementos es muy parecido a html a un que no lo es para este lenguaje hay que siempre cerrar las etiquitas 
            </p>
            <h3>EVALUACION</h3>
            <p>
                para que se evalue en jsx una variable tine que ser entre llaves {'{}'}. esto no puede evaluar objetos directamentes. Esto evalua estrig, numeros y listas pero utlizando funciones  
            </p>
            <h3>COMPONENTES</h3>
            <p>
                los componentes son como partes de la aplicacion que nos permiten reutilizar y varias veces en lugares diferentes de nuestra a plicacion. Es muy importante que no se creen componetes dentre de otro componente tambien es muy importante nombrar los componentes con su primera letra en mayuscula 
            </p>
            <h3>PROPS</h3>
            <p>
                las props son las variables de los componentes o sea de las funciones para colocar las props en el componente 
            </p>
            <Props color='#0bbc31' message= 'este es un ejemplo con un modulo facil que utiliza props'/>
            <Props message= {message2}/>
        </div>
    )
}
export default IndexApp