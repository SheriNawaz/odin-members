import Hero from "./Hero"
import LatestPosts from "./LatestPosts"
import Navbar from "./Navbar"

function HomePage(){
    return (
        <div className="flex flex-col w-full">
            <Navbar />
            <Hero />
            <LatestPosts />
        </div>
    )
}

export default HomePage