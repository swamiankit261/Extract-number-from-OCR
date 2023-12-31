import React from 'react'

function Mapcardprops(props) {
    return (
        <>
            <div className="card text-center text-info m-4" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.data.img} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.data.title}</h5>
                    <p className="card-text">{props.data.p}</p>
                    <a href="#" className=" btn btn-primary">{props.data.submit}</a>
                </div>
            </div>

        </>
    )
}

export default Mapcardprops