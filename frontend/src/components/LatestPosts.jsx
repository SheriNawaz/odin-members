function LatestPosts(){
    return(
        <div className="py-16 px-8 bg-slate-300">
            <h1 className="text-4xl font-bold text-black mb-12">Latest Posts</h1>
            <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-xl font-bold text-black mb-2">TITLE</h2>
                    <p className="text-sm text-gray-700 mb-4">Posted By ANON</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-5">RANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKP</p>
                    <p className="text-sm text-gray-700">30/04/26</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-xl font-bold text-black mb-2">TITLE</h2>
                    <p className="text-sm text-gray-700 mb-4">Posted By ANON</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-5">RANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKP</p>
                    <p className="text-sm text-gray-700">30/04/26</p>
                </div>
                <div className="bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-xl font-bold text-black mb-2">TITLE</h2>
                    <p className="text-sm text-gray-700 mb-4">Posted By ANON</p>
                    <p className="text-sm text-gray-600 mb-4 line-clamp-5">RANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKPRANDOM TEXT ADDJFAJDFGKPJSDGKP</p>
                    <p className="text-sm text-gray-700">30/04/26</p>
                </div>
            </div>
            <div className="flex justify-center">
                <button className="cursor-pointer border border-black text-black px-8 py-2 rounded-lg hover:bg-gray-100 transition">View All</button>
            </div>
        </div>
    )
}

export default LatestPosts