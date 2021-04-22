
export default function ContactList(props) {
    return (
        <div>
            <h2>{props.position}</h2>
            <ul className={"list-group"}>
                {props.persons.map(person =>{
                    return (<li>{person.name} {person.lastname} {person.adress} {person.city} {person.postalcode} {person.phone}</li>)
                })}
            </ul>
        </div>
    )
}
