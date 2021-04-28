import {useState} from "react";
import Component1Ejer3 from '../components/Component1Ejer3';
import Component2Ejer3 from '../components/Component2Ejer3';

function App3() {
  

  const initialContacsState =[
    {name:"Eduardo", lastname:"Manos Tijeras", adress:"c/Del Corte", city:"Wonderland", postalcode:20694, phone:555473624},
    {name:"Troy", lastname:"Mcclure", adress:"c/master", city:"Springfiled", postalcode:23595, phone:55547355},
    {name:"Oneal", lastname:"Teniente", adress:"c/Dela Amargura", city:"Oklahoma", postalcode:26600, phone:55547821},
  ];
  
  const [contacts, setContacts] = useState(initialContacsState);

  return (
    <div className="container">
      <h2 className="my-4">Agenda</h2>
      <Component1Ejer3 contacts={contacts}/>
      <h2 className="my-4">Nuevo Contacto</h2>
      <Component2Ejer3 setContacts={setContacts}/>
    </div>
  );
}

export default App3;
