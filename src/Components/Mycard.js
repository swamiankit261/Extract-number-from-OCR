import Card from "./Card";

const Mycard = (props) => {
    return (
        <>
            <div class="card m-auto text-center text-success" style={{ width: "18rem" }}>
                <img class="card-img-top" src={props.objImage.image} alt="Card image cap" />
                <div class="card-body" />
                <h5 class="card-title">{props.objImage.title}</h5>
                <p class="card-text">{props.objImage.description}</p>
                <a href="#" class="btn btn-primary">{props.objImage.button}</a>
            </div>

        </>
    )
}
export default Mycard;

