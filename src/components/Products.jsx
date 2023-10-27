import { useState } from "react";
import Product from "./Product";
import Nav from "./Nav";
import { useEffect } from "react";
export default function Products(props) {
    // initial value of products
    const [products, setProducts] = useState([]);
    // fetch of products
    useEffect(() => {
        fetch("https://fakestoreapi.com/products").then((respons) => respons.json()).then((data) => setProducts(data))
    }, [])
    // initial value of category
    const [category, setCategory] = useState("")
    // get category from nav and set into category
    const getCat = (data) => {
        setCategory(data)
    }
    // display all products
    // const displayCat = products.map((cat) => {
    //     return <Product title={cat.title.substring(0, 10)} price={cat.price} rate={cat.rating.rate} img={cat.image} />
    // })
    // display products by selected category
    // const CatSelected = products.filter((val) => {
    //     return val.category === category
    // }).map((valCat) => {
    //     return <Product title={valCat.title.substring(0, 10)} price={valCat.price} rate={valCat.rating.rate} img={valCat.image} />
    // })
    // display products by search
    const [searchInput, setSearchInput] = useState("")
    const getSearchValue = (data) => {
        setSearchInput(data)
    }
    const displayProducts = () => {
        // Filter products by selected category
        const productsByCategory = products.filter((val) => val.category === category || category === "ALL" || category === "");

        // Filter products by search input
        const productsBySearch = productsByCategory.filter((searchVal) => searchVal.title.toLowerCase().includes(searchInput.toLowerCase()));

        // Map and display products
        return productsBySearch.map((product) => (
            <Product
                key={product.id} // Make sure each item has a unique key when rendering in React
                title={product.title.substring(0, 10)}
                price={product.price}
                rate={product.rating.rate}
                img={product.image}
            />
        ));
    }
    return (
        <>
            <Nav sendCat={getCat} sendSearch={getSearchValue} />
            <section className="products">
                {displayProducts()}
            </section>
        </>
    );
}
