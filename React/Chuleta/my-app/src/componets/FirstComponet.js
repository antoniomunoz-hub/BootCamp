import  {Fragment} from "react"; // Si utulizamos forma abreviada no es necesario el import 
export default function FirstComponet(props) {
    console.log(props, typeof props);
    console.log(props.title);
    
    return (
        <Fragment>
            <h3>{props.title}</h3> 
            <small>{props.date}</small>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus accusamus quisquam earum rerum similique optio deserunt.</p>
        </Fragment>
    )
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