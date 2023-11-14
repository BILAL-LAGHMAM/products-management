import { useState } from "react";
import Product from "./Product";
import Nav from "./Nav";
import { useEffect } from "react";
import Header from "./Header";
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
                key={product.id}
                title={product.title.substring(0, 10)}
                price={product.price}
                rate={product.rating.rate}
                img={product.image}
                id={product.id}
            />
        ));
    }
    return (
        <>
            <Header title="Shop" desc="This Shop Home Page" />
            <section class="py-5 container">
                <Nav sendCat={getCat} sendSearch={getSearchValue} />
                <div class="container px-4 px-lg-5 mt-5">
                    <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {displayProducts()}
                    </div>
                </div>
            </section >
        </>
    );
}
