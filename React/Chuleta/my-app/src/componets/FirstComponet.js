import  {Fragment} from "react"; // Si utulizamos forma abreviada no es necesario el import 
import PropTypes from "prop-types"; // Si utulizamos forma abreviada no es necesario el import 

export default function FirstComponet(props) {
    // console.log(props, typeof props);
    // console.log(props.title);

    const myFunction = function (name) {
       return(evento) => console.log(name, evento);
    };
    
    return (
        <Fragment>
            <h3>{props.title}</h3> 
            <small>{props.date}</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus quisquam earum rerum similique optio deserunt.</p>
            <button onClick={myFunction("Marta")}>Click Me!</button>
            <button onClick={myFunction("La ola")}>Eliminiar Book1</button>
            <button onClick={myFunction("2009")}>Eliminar Book2</button>

        </Fragment>
    )
}
// Valores por defecto
FirstComponet.defaultProps = {
    title:"Sin Titulo",
    date:"Sin Fecha",
    products: []
}

FirstComponet.propTypes = {
    title: PropTypes.string.isRequired,
    date: PropTypes.string,
    products: PropTypes.array,
}

//Export default FirstComponent: // Alternativa
//Solo se puede un export default por archivo

function SecondComponent() {
    return (
        <>
            <h2>Soy Otro Componente</h2>
        </>
    )

}// Forma abreviada de usar Fragment


function ThirdComponent() {
    return(
        <div>
            <h2>Un tercer Componente</h2>
        </div>
    )
}

export {SecondComponent, ThirdComponent};