import { Component } from "react";


const styles = {
    detallesCarro: {
        backgorundColor: '#fff',
        positon: 'absolute',
        marginTop: 30,
        boxShadow: '1px 5px 5px rgb(0, 0, 0, 0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50,
    },

    ul:{
        margin: 0,
        padding: 0,
    },

    producto:{
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItemns: 'center',
        padding: '25px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}

class DetallesCarro extends Component{
    render(){
        const {carro} = this.props
        console.log(carro);
        return(
            <div style={styles.detallesCarro}>
                <ul style={styles.ul}>
                    {carro.map(producto => 
                        <li style={styles.producto} key={producto.name}>
                            <img alt={producto.name} src={producto.img} width= '50' height= '32'/>
                            {producto.name} <span> {producto.cantidad}</span>
                        </li>)}
                </ul>
            </div>
        )
    }
}

export default DetallesCarro