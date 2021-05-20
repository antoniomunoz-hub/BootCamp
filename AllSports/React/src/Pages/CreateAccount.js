
import React, { useState, useMemo } from 'react';
import Select from 'react-select';
import countryList from 'react-select-country-list';

export default function CreateAccount() {

    return (
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
                    <label for="nameimput">Nombre:</label><br/>
                    <input type="text" id="nameimput" name="username" placeholder="Introduce tu nombre"/>
                </div>

                <div class="imputblock">
                    <label for="lastimput">Apellidos:</label><br/>
                    <input type="text" id="lastimput" name="lastname" placeholder="Introduce tu Apellidos"/>
                </div>

                <div class="imputblock">
                    <CountrySelector/>
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
            </fieldset>    
        </form>
    )
}
// Crear componente en archivo aparte
function CountrySelector() {
    const [value, setValue] = useState('')
    const options = useMemo(() => countryList().getData(), [])
  
    const changeHandler = value => {
      setValue(value)
    }
  
    return <Select options={options} value={value} onChange={changeHandler}/>
  }

