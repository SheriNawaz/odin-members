import Hero from "./Hero"
import LatestPosts from "./LatestPosts"

function HomePage({user, setUser}){
    return (
        <div className="flex flex-col w-full">
            <Hero user={user} setUser={setUser}/>
            <LatestPosts user={user} setUser={setUser} />
        </div>
    )
}

export default HomePage