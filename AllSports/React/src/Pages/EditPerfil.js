
import React, { useState, useMemo } from 'react';
import CountrySelector from '../Components/CountrySelector';

export default function EditPerfil() {
    return (
        <div>
            <h2>Ha habido cambios ? Manten tu perfil al dia </h2>
            <form action="">
                <fieldset>
                <legend>Que perfil tienes?</legend>
                <div>
                    <input type="radio" name="typePerfil" id="athletePerfil" disabled/>
                    <label for="athletePerfil" >Athleta</label>
                </div>
                <div>
                    <input type="radio" name="typePerfil" id="coachPerfil" disabled/>
                    <label for="coachPerfil">Entrenador</label>
                </div>
                <div>
                    <input type="radio" name="typePerfil" id="managerPerfil" disabled/>
                    <label for="managerPerfil">Manager</label>
                </div>
                </fieldset>

                <br/>
                
                <fieldset>
                    <div>
                        <h3>Datos Personales</h3>
                        <div class="imputblock">
                        <label for="nameimput">Nombre:</label><br/>
                        <input type="text" id="nameimput" name="username" placeholder="Introduce tu nombre" disabled/>
                    </div>

                    <div class="imputblock">
                        <label for="lastimput">Apellidos:</label><br/>
                        <input type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos" disabled/>
                    </div><br/>
                    
                    <div className="birthdate">
                    Fecha: <input type="date" name="fecha" disabled/>
                    </div>

                    <div className="sexo">
                        <h4>Sexo:</h4>
                        <input type="radio" name="hm" value="h" disabled/> Hombre
                        <input type="radio" name="hm" value="m" disabled/> Mujer
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
