import { useState, useEffect } from "react"

export default function Category({sendCategory}) {
    const [categories, setCategories] = useState([])
    const getCategories = () => {
        fetch("https://fakestoreapi.com/products/categories").then(response => response.json()).then(response => setCategories(response))
    }
    useEffect(() => {
        getCategories()
    }, [])
    const displayCategories = () => {
        return categories.map((category) => { return <li className="listeCat"><input className="btn w-100 p-2 text-center text-dark" type="submit" onClick={handleCategory} value={category} /></li> })
    }
    const handleCategory = (e) => {
        sendCategory(e.target.value)
    }
    return <>
        <h2 className="mt-4 mb-3 fs-3">Category: </h2>
        <ul className="d-flex justify-content-between nav mb-4">
            {displayCategories()}
        </ul>
    </>
}