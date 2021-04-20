export default function CardComponent(props) {
    return (
    <div className="card w-25 m-auto">  
        <img className="card-img-top" src={props.src} alt="Card image cap"/>
        <div className="card-body">
            <h5 className="card-title ">{props.title}</h5>
            <p className="card-text">{props.paragraph}</p>
            <a href="#" className="btn btn-primary">{props.linkText}</a>
        </div>
  </div>
    )
}

