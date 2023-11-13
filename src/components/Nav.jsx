import Button from "./Button";
import { useState } from "react";

export default function Nav(props) {
    const sendCat = (e) => {
        props.sendCat(e.target.innerHTML)
    }
    const sendSearch = () => {
        props.sendSearch(document.querySelector("#search").value)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul className="navbar-nav mr-auto mt-2 mt-lg-0 gap-3">
                    <li className="nav-item active">
                        <button onClick={sendCat} className="btn btn-outline-dark my-2 my-sm-0">ALL</button>

                    </li>
                    <li className="nav-item">
                        <button onClick={sendCat} className="btn btn-outline-dark my-2 my-sm-0">men's clothing</button>

                    </li>
                    <li className="nav-item">
                        <button onClick={sendCat} className="btn btn-outline-dark my-2 my-sm-0">jewelery</button>

                    </li>
                    <li className="nav-item">
                        <button onClick={sendCat} className="btn btn-outline-dark my-2 my-sm-0">electronics</button>

                    </li>
                    <li className="nav-item">
                        <button onClick={sendCat} className="btn btn-outline-dark my-2 my-sm-0">women's clothing</button>

                    </li>
                </ul>
            </div>
            <form className="form-inline my-2 my-lg-0 d-flex gap-2">
                <input id="search" onChange={sendSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={sendSearch} className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}