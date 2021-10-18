import { Component } from 'react';
import Productos from './components/Productos';
import Layout from './components/Layout';
import Tittle from './components/Tittle';
import Navbar from './components/Navbar'


class App extends Component {
    state = {
      productos: [
        {name: 'Tomate', price: '3', img:'/productos/tomate.jpg'},
        {name: 'Arbejas', price: '4', img:'/productos/arbejas.jpg'},        
        {name: 'Lechuga', price: '2', img:'/productos/lechuga.jpg'} 
      ]
    }
    
    render(){
    return(
      <div>
        <Navbar/>
        <Layout>
        <Tittle/>
        <Productos
        agregarAlCarro = {()=> console.log('De momento no hace nada')}
        productos = {this.state.productos}
        />
        </Layout>
      </div>
    )
  }
}

export default App;
