import { Component } from 'react';

const styles = {
    layout: {
        backgorundColor : '#fff',
        color: '#0A283E',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'column'
    },
    container:{
        width: '1200px'
    }
}

class Layout extends Component{
    
    render () {
        return (
            <div style= {styles.layout}>
                <div style={styles.container}>
                    {this.props.children}
                </div>
                lala
            </div>
        )
    }
}

export default Layout