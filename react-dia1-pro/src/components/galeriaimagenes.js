

export default function Galeriaimagenes(props) {
    return (


        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{props.name}</h4>
                <p className="card-title">{props.name}</p>
                <img src={props.image} alt="">
                </img>
            </div>
        </div>



    )
}
