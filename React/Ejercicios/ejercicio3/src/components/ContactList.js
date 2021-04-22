
export default function ContactList(contacts) {
    return (
        <div className="row">
           {contacts.map((contact, index) =>{
                return (
                    <ul key={contact.phone} className={"list-group"}>
                        <li class="list-group-item">{contact.name}</li>
                        <li class="list-group-item">{contact.lastname}</li>
                        <li class="list-group-item">{contact.adress}</li>
                        <li class="list-group-item">{contact.city}</li>
                        <li class="list-group-item">{contact.postalcode}</li>
                        <li class="list-group-item">{contact.phone}</li>
                    </ul>)
                })}
        </div>
    )
}
