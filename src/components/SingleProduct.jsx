import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toCard } from "../rtk/CardSilce";
export default function SingleProduct() {
    const { id } = useParams()
    const [product, setProduct] = useState([])
    const [quantity, setQuantity] = useState(1)
    const [title, setTitle] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState(0)
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((respons) => respons.json()).then((data) => setProduct(data))
    }, [])
    const slctQuantity = () => {
        let quantityValue = document.querySelector("#quantityValue")
        if (Number(quantityValue.value) <= 0) {
            quantityValue.value = quantity
        }
        setQuantity(Number(quantityValue.value))
    }
    // send to add card
    const dispatch = useDispatch()
    const AddToCard = () => {
        let title = document.querySelector("#title").innerHTML
        let price = Number(document.querySelector("#price").innerHTML)
        let img = document.querySelector("#img").getAttribute("src")
        let quantityValue = document.querySelector("#quantityValue")
        if (Number(quantityValue.value) <= 0) {
            quantityValue.value = quantity
            console.log(`error: ${quantityValue.value}`);
        }
        setQuantity(Number(quantityValue.value))
        setTitle(title)
        setPrice(price)
        setImg(img)
        dispatch(toCard({ id: id, quantity: quantity, title: title, price: price, img: img }))
    }
    return (
        <div classNameName="py-5 singleProd">
            <div className="row w-100 pt-4 container">
                {
                    product.filter((value) => {
                        return value.id === Number(id)
                    }).map((value) => {

                        return <>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <img className="card-img-top" id="img" src={value.image} alt={value.image} />
                                    <div className="card-body">
                                        <div className="small text-muted">{value.rating.rate}<i className="fa-solid fa-star" style={{ color: "yellow" }}></i></div>
                                        <h2 className="card-title" id="title">{value.title}</h2>
                                        <p className="card-text"><span id="price">{value.price}</span>$</p>
                                        <p className="card-text">{value.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card mb-4">
                                    <div className="card-header">Product Infos</div>
                                    <div className="card-body w-50 prodInfo d-flex flex-column gap-3">
                                        <div className="input-group gap-2 align-items-center border justify-content-center">
                                            <span>{(value.price * quantity).toFixed(2)}$</span>
                                            <input onChange={slctQuantity} type="number" value={quantity} className="form-control mr-sm-2" id="quantityValue" />
                                        </div>
                                        <div className="input-group gap-2 align-items-center justify-content-center">
                                            <button onClick={AddToCard} className="btn btn-outline-dark mt-auto">Add To Card</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    })
                }
            </div>
        </div>
    );
}