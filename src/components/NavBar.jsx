import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function NavBar() {
    const state = useSelector(state => state.Card)
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
                <a className="navbar-brand" href="#!">Fake Store</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to={"/"}>Products</Link></li>
                    </ul>
                    <form className="d-flex">
                        <Link to={"/card"}>
                            <button className="btn btn-outline-dark" type="submit">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{state.length}</span>
                            </button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
