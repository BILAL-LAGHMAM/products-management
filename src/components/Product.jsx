export default function Product({ product }) {
    return <>
        <tr>
            <td key={product.key}>{product.id}</td>
            <td>{product.title}</td>
            <td>{product.price}</td>
            <td>{product.description}</td>
            <td>{product.category}</td>
            <td><img className="w-75" src={product.image} alt="" /></td>
            <td>{product.rating.rate}</td>
            <td>{product.rating.count}</td>
        </tr>
    </>
}