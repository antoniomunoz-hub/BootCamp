
import React, { useState, useMemo } from 'react';

import CountrySelector from "../Components/CountrySelector";

export default function CreateAccount() {

    return (
        <div>
            <h2>Es Momento de unirte a la comuindad Allsports</h2><br/>
            
            <form action="">
                <fieldset>
                <legend>Que perfil tienes?</legend>
                <div>
                    <input type="radio" name="typePerfil" id="athletePerfil"/>
                    <label for="athletePerfil">Athleta</label>
                </div>
                <div>
                    <input type="radio" name="typePerfil" id="coachPerfil"/>
                    <label for="coachPerfil">Entrenador</label>
                </div>
                <div>
                    <input type="radio" name="typePerfil" id="managerPerfil"/>
                    <label for="managerPerfil">Manager</label>
                </div>
                </fieldset>

                <br/>
                
                <fieldset>
                    <div>
                        <h3>Datos Personales</h3>
                        <div class="imputblock">
                        <label for="nameimput" >Nombre:</label><br/>
                        <input type="text" id="nameimput" name="username" placeholder="Introduce tu nombre"/>
                    </div>

                    <div class="imputblock">
                        <label for="lastimput">Apellidos:</label><br/>
                        <input type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos"/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input type="date" name="fecha"/>
                    </div>

                    <div className="sexo">
                        <h4>Sexo:</h4>
                        <input type="radio" name="hm" value="h" required/> Hombre
                        <input type="radio" name="hm" value="m"/> Mujer
                    </div>

                    <div class="imputblock">
                        <h3>Pais:</h3>
                        <CountrySelector/><br/>
                    </div>

                    <div class="imputblock">
                        <label for="emailimput">Email:</label><br/>
                        <input required type="email" id="emailimput" name="Email" placeholder="Introduce tu Correo"/>
                    </div>

                    <div class="imputblock">
                        </div>
                        <label for="paswordintput">Contraseña:</label><br/>
                        <input required type="password" id="paswordinput" name="password" placeholder="Introduce tu Contraseña"/>
                        <label for="confirmpaswordintput"></label><br/>
                        <input required type="password" id="confirmpaswordinput" name="password" placeholder="Confirma Contraseña"/>
                    </div>    
                </fieldset><br/>      
                <input type="submit" value="Enviar"></input> 
            </form>
        </div>    
    )
}

