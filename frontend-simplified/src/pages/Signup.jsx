import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup({setIsAuthenticated}) {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [gender, setGender] = useState("");
    const [street, setStreet] = useState("");
    const [city, setCity] = useState("");
    const [zipCode, setZipCode] = useState("");

    async function signupUser(e) {
        e.preventDefault();
        if (!name || !email || !password || !phoneNumber || !gender || !street || !city || !zipCode) {
            alert("Please fill in all fields");
            return;
        }
        const res = await fetch("/api/users/signup", {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify({
                name,
                email,
                password,
                phone_number: phoneNumber,
                gender,
                address: {
                    street,
                    city,
                    zipCode
                }
            })
        })
        const user = await res.json();
        if (!res.ok) {
            console.log("nu uh")
            return
        }
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up!");
        setIsAuthenticated(true);
        navigate("/");
    }
    return (
        <div className="create">
            <h2 className="text-3xl text-center font-semibold mb-6">Signup</h2>
            <form className='text-center flex flex-col align-middle justify-center items-center h-full'>
                <label className="block text-gray-700 font-bold mb-2">Name:</label>
                <input className="border roundedl py-2 px-3"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">Email:</label>
                <input className="border rounded py-2 px-3"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">Password:</label>
                <input className="border rounded py-2 px-3"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">Phone number:</label>
                <input className="border rounded py-2 px-3"
                    type="text"
                    required
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">Gender:</label>
                <input className="border rounded py-2 px-3"
                    type="text"
                    required
                    value={gender}
                    onChange={(e) => setGender(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">Street:</label>
                <input className="border rounded py-2 px-3"
                    type="text"
                    required value={street}
                    onChange={(e) => setStreet(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">City:</label>
                <input className="border rounded py-2 px-3"
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)} />
                <label className="block text-gray-700 font-bold mb-2">Zip Code:</label>
                <input className="border rounded py-2 px-3"
                    type="text"
                    required
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)} />
                <button onClick={(e) => {
                    signupUser(e);
                }} className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded mt-4">Signup</button>
            </form>
        </div>
    );
};