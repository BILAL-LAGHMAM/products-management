import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Card() {
    const state = useSelector(state => state.Card)
    return (
        <div>
            <h1>Card</h1>
            {
                state.map(val => {
                    return <p>Selected Products: {val.id}: {val.title} {val.price * val.quantity}$ </p>
                })
            }
        </div>
    );
}
