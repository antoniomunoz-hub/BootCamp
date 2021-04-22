import ContactList from "./ContactList";

export default function Agenda(props) {
    const contacts ={
        contact1: [
            {name:"Eduardo", lastname:"Manos Tijeras", adress:"c/Del Corte", city:"Wonderland", postalcode:20694, phone:555473624},
        ],
        contact2: [
            {name:"Troy", lastname:"Mcclure", adress:"c/master", city:"Springfiled", postalcode:23595, phone:55547355},
        ],
        contact3: [
            {name:"Oneal", lastname:"Teniente", adress:"c/Dela Amargura", city:"Oklahoma", postalcode:26600, phone:55547821},
        ]
    }
    return (
        <div>
            <ContactList position="Contact1" persons={contacts.contact1}/>
            <ContactList position="Contact2" persons={contacts.contact2}/>
            <ContactList position="Contact3" persons={contacts.contact3}/>
        </div>
    )
}
