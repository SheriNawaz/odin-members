import Navbar from "./Navbar"

function SignUp(){
    return (
        <div>
            <Navbar/>
            <div className="flex items-center justify-center bg-gray-50 py-12">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                    <h1 className="text-3xl font-bold text-black mb-8 text-center">Sign Up</h1>
                    <form action="" method="post" className="space-y-4">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                            <input type="text" name="username" id="username" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Enter your username" />
                        </div>
                        <div>
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                            <input type="text" name="firstname" id="firstname" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Enter your first name" />
                        </div>
                        <div>
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                            <input type="text" name="lastname" id="lastname" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Enter your last name" />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                            <input type="password" name="password" id="password" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent" placeholder="Enter your password" />
                        </div>
                        <input type="submit" value="Sign Up" className="w-full bg-black text-white py-2 rounded-lg font-semibold hover:bg-gray-800 transition cursor-pointer mt-6" />
                    </form>
                </div>
            </div>        
        </div>
    )
}


export default SignUp