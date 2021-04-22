import {useState} from "react";

export default function Formulario() {
    // const [name,setName] = useState ("");
    // const [lastName,setLastName] = useState ("");
    // const [address,setAddress] = useState ("");
    // const [postalCode,setPostalCode] = useState ("");
    // const [city,setCity] = useState ("");
    // const [pone,setPhone] = useState ("");

    // function handleName(e){
    //     setName(e.target.value);
    // };
    // function handleLastName(e){
    //     setLastName(e.target.value);
    // };

    // function handleAddress(e){
    //     setAddress(e.target.value);
    // };

    // function handleCity(e){
    //     setCity(e.target.value);
    // };

    // function handlePostalCode(e){
    //     setPostalCode(e.target.value);
    // };

    // function handlePhone(e){
    //     setPhone(e.target.value);
    // };
    const initialState ={
        name: "",
        lastName: "",
        address: "",
        city: "",
        postalcode: "",
        phone: ""
    }

    const [form, setForm] = useState(initialState)

    

    function submit (e){
        e.preventDefault();
        const newContact ={name, lastname, address, city, postalCode, phone
            // name: name,
            // lastname: lastName,
            // address: address,
            // city: city,
            // postalCode: postalCode,    
            // phone: phone,
        };

        setContacts(currentContacts => [...currentContacts, newContact]);
        
        e.target.reset(); //Accede a todos los estados y los vacia visualmente si no cambias el valor se queda el mismo estado guardado
    };
    return (
       <form className="form-group" onSubmit={submit}>
           <input className="form-control mb-3" type="text" onChange={handleName} placeholder="Introduce el nombre"/>
           <input className="form-control mb-3" type="text" onChange={handleLastName} placeholder="Introduce apellidos"/>
           <input className="form-control mb-3" type="text" onChange={handleAddress} placeholder="Introduce direccion"/>
           <input className="form-control mb-3" type="text" onChange={handleCity} placeholder="Introduce ciudad"/>
           <input className="form-control mb-3" type="text" onChange={handlePostalCode} placeholder="Introduce codigo postal"/>
           <input className="form-control mb-3" type="text" onChange={handlePhone} placeholder="Introduce numero telefono"/>
           <input type="submit" className="btn btn-succes" value="Registar"/>
        </form>
    )
}
