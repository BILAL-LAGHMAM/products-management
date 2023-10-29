import { useParams } from "react-router-dom"

export default function Card() {
    const {id} = useParams()
    console.log(id)
    return (
        <>
            <h1>Card</h1>
            {id}
        </>
    )
}