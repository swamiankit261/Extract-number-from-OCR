import Image from "./Images/abcd.jfif"


const Slider = () => {
    const abc = require("./Images/image2.jpg")
    return (
        <>
            {/* <h1>this is slider</h1> */}

            <div id="carouselExampleControls" className="carousel slide w-50 my-5 m-auto" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="/pexels-eury-escudero-9962890.jpg" alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={Image} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={require("./Images/download.jfif")} alt="Third slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src={abc} alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}
export default Slider;