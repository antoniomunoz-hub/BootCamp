import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import "../StylesPages/Login.css";


export default function Login() {
  
    const history = useHistory();

    return (
        <div className="loginpage">
            <div className="">
                <h2 className="logo">ALLSPORTS</h2>
                <p className="text">Allsports te ayuda a conocer a personas que pueden lanzar tu carrera profesional</p>
            </div>

            <div className="entry">
                <input type="text" placeholder="Correo electronico"/>
                <input type="password"  placeholder="Contraseña"/>
                <button className="entryaccount" onClick={()=>history.push("/home")}>Entrar</button>
                <Link to="/forgot-password">¿Has olvidado la contraseña?</Link>
                <button className="create"onClick={()=>history.push("/create-account")}>Crear cuenta nueva</button>
            </div>  
        </div>
    )
}
