import { useEffect, useState } from "react"
import Category from "./category";
import Product from "./Product"
import Search from "./search";
export default function ProductListe() {
    const [productListe, setProductListe] = useState([]);
    const [SearchProduct, setSearchProduct] = useState("");
    const [category, setCategory] = useState("");
    const handleSetSeacrh = (data) => {
        setSearchProduct(data)
    }
    // get value of input clicked for get category selected
    const handleSetCategory = (data) => {
        setCategory(data)
    }
    // get product by using api
    const getProduct = () => fetch("https://fakestoreapi.com/products").then(response => response.json()).then(response => setProductListe(response))
    useEffect(() => {
        getProduct()
    }, [])

    // display each product
    const displayProduct = () => {

        const productFilterCat = productListe.filter(product => {
            return product.category.toLowerCase().includes(category.toLowerCase())
        })
        if (productFilterCat.length > 0) {
            return productFilterCat.map((product, key) => {
                return <Product product={product} key={key} />
            })
        }


        // search function
        const productFilter = productListe.filter(product => {
            return product.title.toLowerCase().includes(SearchProduct.toLowerCase())
        })
        if (productFilter.length > 0) {
            return productFilter.map((product, key) => {
                return <Product product={product} key={key} />
            })
        }
        else {
            return <tr><td className="text-center" colSpan={7}>No Items</td></tr>
        }
    }
    return <>
        <div className="container">
            <h1 className="text-center">Liste Product: </h1>
            <Search sendDataSearch={handleSetSeacrh} />
            <Category sendCategory={handleSetCategory} />
            <table className="table">
                <thead>
                    <tr>
                        <th>#ID</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Images</th>
                        <th>Rating</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {displayProduct()}

                </tbody>
            </table>
        </div>
    </>
}