import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dellProd } from "../rtk/CardSilce";
import Header from "./Header";

export default function Card() {
    const state = useSelector(state => state.Card)
    const dispatch = useDispatch()
    const totalPrice = state.reduce((totale, current) => {
        return totale += current.price * current.quantity
    }, 0)
    const dellProduct = (e) => {
        let getId = e.target.value
        dispatch(dellProd(getId))
    }
    return (<>
        <Header title="Card" desc="Shopping cart Page" />
        <section className="h-100 h-custom" style={{ backgroundColor: '#eee' }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-4 w-100">
                                <div className="row w-100">
                                    <div className="col-lg-7 w-100">
                                        <hr />
                                        <div className="d-flex justify-content-between align-items-center mb-4 flex-direction-column">
                                            <div>
                                                <p className="mb-1">Shopping cart</p>
                                                <p className="mb-0">You have {state.length} items in your cart</p>
                                            </div>
                                            <div>
                                                <p className="mb-0">Total price:{totalPrice}$ </p>
                                            </div>
                                        </div>
                                        <div className="card mb-3 w-100">
                                            <div className="card-body w-100 d-flex flex-column gap-5">
                                                {
                                                    state.map(val => {
                                                        return <div className="d-flex justify-content-between selectedProd">
                                                            <div className="d-flex flex-row align-items-center topInfosProd">
                                                                <div>
                                                                    <img
                                                                        src={val.img}
                                                                        className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                                                                </div>
                                                                <div className="ms-3">
                                                                    <h5>{val.title}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex flex-row align-items-center quantitySlct">
                                                                <div style={{ width: '50px' }}>
                                                                    <h5 className="fw-normal mb-0 quantity">{val.quantity}</h5>
                                                                </div>
                                                                <div style={{ width: '80px' }}>
                                                                    <h5 className="mb-0">{val.price * val.quantity}$</h5>
                                                                </div>
                                                                <button onClick={dellProduct} id="trash" value={val.id}>remove</button>
                                                                {/* <i onClick={dellProduct} id="trash" value={val.id} className="fas fa-trash-alt"></i> */}
                                                            </div>
                                                        </div>
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
}
