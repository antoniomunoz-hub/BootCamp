import {useState} from "react";

export default function Formulario({setContacts}) {
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

    function handleInput(e){
        const inputName= e.target.id;
        const newValue= e.target.value;
        setForm({...form, ...{[inputName]:e.target.value}})

    }

    function submit (e){
        e.preventDefault();
        const newContact ={name, lastname, address, city, postalCode, phone};
            // name: name,
            // lastname: lastName,
            // address: address,
            // city: city,
            // postalCode: postalCode,    
            // phone: phone,
        }


        setContacts(currentContacts => [...currentContacts, newContact]);
        
        e.target.reset(); //Accede a todos los estados y los vacia visualmente si no cambias el valor se queda el mismo estado guardado
    };

    return (
       <form className="form-group mb-3 col-12 col-sm-6 col-xl-3" onSubmit={submit}>
           <input className="form-control mb-3" type="text" name="" value={form.name} onChange={handleInput} placeholder="Introduce el nombre"/>
           <input className="form-control mb-3" type="text" name="" value={form.lastName} onChange={handleInput} placeholder="Introduce apellidos"/>
           <input className="form-control mb-3" type="text" name="" value={form.address} onChange={handleInput} placeholder="Introduce direccion"/>
           <input className="form-control mb-3" type="text" name="" value={form.city} onChange={handleInput} placeholder="Introduce ciudad"/>
           <input className="form-control mb-3" type="text" name="" value={form.postalCode} onChange={handleInput} placeholder="Introduce codigo postal"/>
           <input className="form-control mb-3" type="text" name="" value={form.phone} onChange={handleInput} placeholder="Introduce numero telefono"/>
           <input type="submit" className="btn btn-succes" value="Registar"/>
        </form>
    )
    

