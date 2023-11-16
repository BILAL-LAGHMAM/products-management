import Button from "./Button";
import { useState } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
export default function Nav(props) {
    const sendCat = (e) => {
        props.sendCat(e.target.innerHTML)
    }
    const sendSearch = () => {
        props.sendSearch(document.querySelector("#search").value)
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center gap-3">
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button> */}
            <DropdownButton id="dropdown-basic-button" title="Select Category">
                <Dropdown.Item><button onClick={sendCat} className="btn btn-outline-dark w-100 my-2 my-sm-0">ALL</button>
                </Dropdown.Item>
                <Dropdown.Item><button onClick={sendCat} className="btn btn-outline-dark w-100 my-2 my-sm-0">men's clothing</button>
                </Dropdown.Item>
                <Dropdown.Item><button onClick={sendCat} className="btn btn-outline-dark w-100 my-2 my-sm-0">women's clothing</button>
                </Dropdown.Item>
                <Dropdown.Item><button onClick={sendCat} className="btn btn-outline-dark w-100 my-2 my-sm-0">jewelery</button></Dropdown.Item>
                <Dropdown.Item><button onClick={sendCat} className="btn btn-outline-dark w-100 my-2 my-sm-0">electronics</button></Dropdown.Item>
            </DropdownButton>
            <form className="form-inline my-2 my-lg-0 d-flex gap-2">
                <input id="search" onChange={sendSearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button onClick={sendSearch} className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
}