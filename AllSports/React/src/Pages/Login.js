import React from 'react';
import {Link} from 'react-router-dom';
import "../StylesPages/Login.css";



export default function Login() {
    return (
        <div className="loginpage">
            <div className="">
                <h2 className="logo">ALLSPORTS</h2>
                <p className="text">Allsports te ayuda a conocer a las personas que puedan lanzar tu carrera profesional</p>
            </div>

            <div className="entry">
                <input type="text" placeholder="Correo electronico"/>
                <input type="password" placeholder="Contraseña"/>
                <button>Entrar</button>
                <Link to="/forgot-password">¿Has olvidado la contraseña?</Link>
                <button classname="create_acount">Crear cuenta nueva</button>
            </div>
            
        </div>
    )
}
