import { useState } from "react";
import { useNavigate } from "react-router-dom";

//const Login = ({setIsAuthenticated})
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/users/login", {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({email, password})
        })
        const user = await res.json();
        if(!res.ok) {
            console.log("Error!!!")
            return
        }
        localStorage.setItem("user", JSON.stringify(user));
        //setIsAuthenticated(true)
        console.log("Logged in")
        navigate("/");
    }
    return (
        <div className="login mb-4">
            <h2 className="text-3xl text-center font-semibold mb-6">
                Login
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="container m-auto max-w-2xl py-24">
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Email:
                        </label>
                        <input
                            type="email"
                            value={email}
                            className="border rounded w-full py-2 px-3"
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-bold mb-2">
                            Password:
                        </label>
                        <input
                            type="password"
                            value={password}
                            className="border rounded w-full py-2 px-3"
                            onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <button
                            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                            type="submit">
                            Log in
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login;