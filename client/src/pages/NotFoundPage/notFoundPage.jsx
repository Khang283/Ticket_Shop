import React from "react";
import authApi from "../../api/authAPI";
import { Link } from "react-router-dom";
function NotFoundPage() {
    const handleClick = async () => {
        let response = await authApi.demo();

        console.log(response)
    }
    return (
        <>
            <p>Page not Found 404.</p>
            <button onClick={() => handleClick()} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Button
            </button>
            <Link to="/user" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Users
            </Link>

        </>
    )
}

export default NotFoundPage