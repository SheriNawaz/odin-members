import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup({setUser}){

    const navigate = useNavigate();
    const [form, setForm] = useState({
      username: "",
      firstname: "",
      firstname: "",
      password: "",
    })
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("/api/auth/register", form);
        setUser(res.data);
        navigate('/');
      } catch (err) {
        setError("User Already Exists");
      }
    }

    return (
        <div>
            <div className="flex items-center justify-center bg-gray-50 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold text-black mb-8 text-center">Register</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username: </label>
                            <input required type="text" value={form.username} placeholder="Enter your username" 
                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                             onChange={(e)=>setForm({ ...form, username:e.target.value })}/>
                        </div>
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name: </label>
                            <input required type="text" value={form.firstname} placeholder="Enter your first name" 
                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                             onChange={(e)=>setForm({ ...form, firstname:e.target.value })}/>
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name: </label>
                            <input required type="text" value={form.lastname} placeholder="Enter your last name" 
                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                             onChange={(e)=>setForm({ ...form, lastname:e.target.value })}/>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input required type="password" placeholder="password" value={form.password} placeholder="Enter your password" 
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" 
                            onChange={(e)=>setForm({ ...form, password:e.target.value })}/>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer mt-6">
                            Login
                        </button>                    
                    </form>
                </div>
            </div>     
        </div>        
    )
}

export default Signup