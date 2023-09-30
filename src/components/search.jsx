import { useState } from "react";

export default function Search({sendDataSearch}) {
    const [search, setSearch] = useState("")
    sendDataSearch(search)
    const handleSearch = (e) => {
        e.preventDefault()
        const searchInp = document.getElementById("searchInp").value;
        setSearch(searchInp)
        console.log(search)
    }
    return <>
        <form>
            <input type="text" id="searchInp" placeholder="Search..." />
            <input type="submit" onClick={handleSearch} value="Search" />
        </form>
    </>
}