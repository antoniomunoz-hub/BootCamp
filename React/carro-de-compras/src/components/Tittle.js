import { Component } from 'react';

const styles = {
    tittle: {
        marginBottom: '30px'
    }
}

class Tittle extends Component{
    render (){
        return (
            <div>
                <h1 styles={styles.tittle}>Tienda</h1>
            </div>
        )
    }
}

export default Tittle