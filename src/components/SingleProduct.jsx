import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Product from "./Product";
import Button from "./Button";
export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(0)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((respons) => respons.json()).then((data) => setProduct(data))
    }, [])

    // Quantity functions

    const Incremente = () => {
        setQuantity(Number(quantity) + 1)
    }
    const Decrement = () => {
        if (quantity !== 0) {
            setQuantity(Number(quantity) - 1)
        }
    }
    // display product
    const displaySingleProduct = product.filter((value) => {
        return value.id === Number(id)
    }).map((value) => {
        return <article>
            <div>
                <img className="imgSingle" src={value.image} alt={value.image} />
            </div>
            <div>
                <h1>{value.title}</h1>
                <article className="artBuy">
                    <span>{value.rating.rate}<i className="fa-solid fa-star"></i></span>
                    <span>{value.price}£</span>
                    <article className="artQuantity">
                        <button onClick={Decrement}>-</button>
                        <span>{quantity}</span>
                        <button onClick={Incremente}>+</button>
                    </article>
                    <span>{(value.price * quantity).toFixed(2)}£</span>
                    <button className="addCard">Add To Card</button>
                </article>
                <p>{value.description}</p>
            </div>
        </article>

    })
    return (
        <section className="singlePage">
            {displaySingleProduct}
            <Link to="/"><Button name="Home Page" /></Link>
        </section>


    );
}