import CartWidget from "./CartWidget";
import fotoLogo from "./img/alan.jpg";

const NavBar = () => {
    return(
        <div className="container bg-body-tertiary">
            <div className="row">
                <div className="col ">
                    <nav className="navbar navbar-expand-lg " >
                        <div className="container-fluid">
                            <a className="navbar-brand" href={"/"}><img  src={fotoLogo} alt="fotologo" width={"110"} /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"  aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href={"/"}>Principal</a>
                                    </li>
                                    <li className="nav-item">
                                       <a className="nav-link" href={"/raquetas"}>Raquetas</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/raquetero"}>Bolsos</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href={"/balls"}>Pelotas</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="col d-flex align-items-center justify-content-end">
                    <CartWidget />
                </div>
            </div>
        </div>
    )
}

export default NavBar