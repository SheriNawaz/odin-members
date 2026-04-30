import { Link } from "react-router-dom"

function Navbar(){
    return (
        <nav className="bg-slate-500 border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-white">Members Only</Link>
                <div className="flex gap-6">
                    <a href="#" className="text-white hover:text-gray-600 transition">Posts</a>
                    <Link to="/signup" className="text-white hover:text-gray-600 transition">Sign Up</Link>
                    <Link to="/login" className="text-white hover:text-gray-600 transition">Login</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar