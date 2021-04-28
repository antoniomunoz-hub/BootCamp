
export default function List(props) {
    console.log(props);
    return (
       <div>
            <h2>{props.category}</h2>
            <ul>
                {props.products.map(product => {

                return (<li>{product.id} {product.name} {product.name} {product.model}. Price: {product.price}</li>)
                })}
            </ul>
        </div>
    );
}
