import { Link } from "react-router-dom"

function Hero(){
    return (
        <div className="p-50 flex flex-col items-center justify-center w-full bg-white text-center">
            <div>
                <h1 className="text-6xl font-bold text-black mb-4">MEMBERS ONLY</h1>
                <h2 className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Create an account to get started or login to access the exclusive clubhouse</h2>
                <div className="flex gap-4 justify-center">
                    <Link className="cursor-pointer bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition" to="/signup">Sign up</Link>
                    <Link className="cursor-pointer border border-black text-black px-8 py-3 rounded-lg hover:bg-gray-100 transition" to="/login">Login</Link>
                    {/* <button </button> */}
                </div>
            </div>
        </div>
    )
}

export default Hero