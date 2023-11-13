import { Link } from "react-router-dom";
export default function Product(props) {
    return (
        <div className="col mb-5">
            <div className="card h-100 p-3">
                <img className="card-img-top" src={props.img} alt="..." />
                <div class="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>{props.sale}</div>
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{props.title}</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            {props.rate}<i className="fa-solid fa-star"></i>
                        </div>
                        {props.price} €
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <Link to={`./SingleProduct/${props.id}`}><button className="btn btn-outline-dark mt-auto">Details</button></Link>
                    </div>

                </div>
            </div>
        </div>
    );
}