
const Card = (props) => {
    return (
        <>
            <div className="card text-center text-info" style={{ width: "18rem" }}>
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/61sAQjY-BYL.jpg" alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">My image</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className=" btn btn-primary">submit</a>
                </div>
            </div>
        </>
    )
}
export default Card;