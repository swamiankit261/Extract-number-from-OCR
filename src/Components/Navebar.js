import { Link } from "react-router-dom";

function Navbar() {
    return (
        <>
            <div className="w-100">
                <nav className="navbar w-100 navbar-expand-lg navbar-light bg-light ">
                    <Link className="navbar-brand" to={"/map"}>Navbar</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to={"/map"}>Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={'/attendance'}>Attendance</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Disabled
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">

                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    From
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={"/form"}>Form</Link>
                                    <Link className="dropdown-item" to={"/form2"}>Form2</Link>
                                    <Link className="dropdown-item" to={"/form3"}>Form3</Link>
                                    <Link className="dropdown-item" to={"/radio"}>Radio</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={"/maltiPage"}>MaltiPageForm</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Search
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={"/search"}>Search</Link>
                                    <Link className="dropdown-item" to={"/slaider"}>Slaider</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={"/number"}>Number</Link>
                                    <Link className="dropdown-item" to={"/motion"}>Motin</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to={"/mapTable"}>MapTable</Link>
                                    <Link className="dropdown-item" to={"/slider"}>Slider</Link>
                                    <div className="dropdown-divider"></div>
                                    <Link className="dropdown-item" to={"/update"}>Update1</Link>
                                    <Link className="dropdown-item" to={"/textUtils "}>TextUtils </Link>
                                    <Link className="dropdown-item" to={"/localStorage "}>LocalStorage </Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to={"/MyState"}>Disabled=MyState</Link>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>


                </nav>
            </div>
        </>
    )
}
export default Navbar;