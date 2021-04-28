
export default function ContactList({contacts}) {
    return (
        <div className="row">
           {contacts.map((contact, index) =>{
                return (
                    <ul className="list-group mb-3 col-6" key={contact.phone}>
                        <li class="list-group-item active">Contacto{index + 1}</li>
                        <li class="list-group-item">{contact.name}</li>
                        <li class="list-group-item">{contact.lastname}</li>
                        <li class="list-group-item">{contact.phone}</li>
                        <li class="list-group-item">{contact.adress},{contact.postalcode}, {contact.city},</li>
                        
                    </ul>
                );
            })}
        </div>
    )
}
