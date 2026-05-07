import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function CreatePost({user, setUser}){

    const navigate = useNavigate();
    const [form, setForm] = useState({
      title: "",
      body: "",
      user:user.id
    })
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("https://odin-members-v7yb.onrender.com/api/post", form);
        navigate('/')
      } catch (err) {
        setError("Unexpected Error Occured");
      }
    }

    return (
        <div>
            <div className="flex items-center justify-center bg-gray-50 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold text-black mb-8 text-center">Create A Post</h1>
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input required type="text" value={form.title} placeholder="Title" 
                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                             onChange={(e)=>setForm({ ...form, title:e.target.value })}/>
                        </div>
                        <div>
                            <textarea required type="text" value={form.body} placeholder="Write here" 
                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                             onChange={(e)=>setForm({ ...form, body:e.target.value })}></textarea>
                        </div>
                        <button type="submit" className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer mt-6">
                            Submit
                        </button>                    
                    </form>
                </div>
            </div>     
        </div>        
    )
}

export default CreatePost