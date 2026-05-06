import axios from "axios";
import { useEffect, useState } from "react"

function LatestPosts({user, setUser}){
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        const fetchPosts = async()=>{
            try{
                const res = await axios.get("/api/posts");
                setPosts(res.data);
            } catch (err) {
                setPosts(err)
            } 
        }
        fetchPosts();
    }, [])

    const handleDelete = async (id) => {
    try {
        await axios.delete(`/api/post/${id}`);

        setPosts(prev => prev.filter(post => post.id !== id));

    } catch (err) {
        console.error(err);
    }
};

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        const day = String(date.getDate()).padStart(2, "0");
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const year = String(date.getFullYear()).slice(-2);
        return `${day}/${month}/${year}`;
    };

    console.log(posts);

    return(
        <div className="py-16 px-8 bg-slate-300">
            <h1 className="text-4xl font-bold text-black mb-12">Latest Posts</h1>
                <div className="grid grid-cols-3 gap-8 mb-8" >
                {posts.map(post => (
                    <div className="bg-gray-100 p-8 rounded-lg" key={post.id}>
                        {user && user.id === post.user_id && (
                            <button onClick={() => handleDelete(post.id)} className="cursor-pointer py-1 px-1 rounded-lg bg-red-600 hover:bg-red-300 transition">
                                Delete Post
                            </button>
                        )}
                        <h2 className="text-xl font-bold text-black mb-2">{post.title}</h2>
                        <p className="text-sm text-gray-700 mb-4">Posted By {user ? post.author_name: `Anon`} </p>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-5">{post.body}</p>
                        
                        <p className="text-sm text-gray-700">Posted on: {user? formatDate(post.time):`DD/MM/YY`}</p>
                    </div>
                ))};
                </div>
        </div>
    )
}

export default LatestPosts