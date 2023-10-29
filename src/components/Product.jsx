import { Link } from "react-router-dom";
import Button from "./Button";
export default function Product(props) {
    return (
        <div className="card">
            <div className="imgBox">
                <img src={props.img} alt="imgProduct" className="imgProd" />
            </div>
            <div className="contentBox">
                <h3>{props.title}</h3>
                <h2 className="price">{props.price} €</h2>
                <h4 className="rate">{props.rate}<i className="fa-solid fa-star"></i></h4>
                <Link to={`./SingleProduct/${props.id}`}><Button name="Details" /></Link>
            </div>
        </div>
    );
}