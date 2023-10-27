import Button from "./Button";
import { useState } from "react";

export default function Nav(props) {
    const sendCat = (e) => {
        props.sendCat(e.target.innerHTML)
    }
    const sendSearch = () => {
        const searchValue = document.querySelector("#search").value
        props.sendSearch(document.querySelector("#search").value)
    }
    return (
        <nav>
            <div className="divCat">
                <button onClick={sendCat} className="buy">ALL</button>
                <button onClick={sendCat} className="buy">men's clothing</button>
                <button onClick={sendCat} className="buy">jewelery</button>
                <button onClick={sendCat} className="buy">electronics</button>
                <button onClick={sendCat} className="buy">women's clothing</button>
            </div>
            <div className="divSearch">
                <input type="text" id="search" onChange={sendSearch} placeholder="Search Products" />
                <button onClick={sendSearch} className="buy">Search</button>
            </div>
        </nav>
    );
}