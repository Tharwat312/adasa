import { useState } from "react";
import Post from "../../Component/Post/Post";
import apiResponse from "../../response"
import { Link, useParams } from "react-router-dom";

const Blog = () => {
    const payload = apiResponse;
    const [category, setCategory] = useState("all");
    const filteredPosts = category === "all" ? payload.posts : payload.posts.filter(p => p.category === category)
    return (
        <>
            <h2 className="text-5xl mb-10">Blogs</h2>
            <ul className="flex place-items-center gap-x-5 mb-5 cursor-pointer">
                <li
                    className={`${category === "all" ? 'bg-orange-400 px-3 py-2 rounded-md' : ""}`}
                    onClick={() => setCategory("all")}>الكل</li>
                {payload.categories.map(c => <li key={c.name}
                    className={`${category === c.name ? 'bg-orange-400 px-3 py-2 rounded-md' : ""}`}
                    onClick={() => setCategory(c.name)}
                >{c.name}</li>)}
            </ul>
            <div className="row gap-y-3">
                {filteredPosts.map(post => {
                    return <div className="w-full md:w-1/2 lg:w-1/3" key={post.id}>
                        <Link to={`/blogdetails/${post.slug}`}> 
                            <Post post={post} />
                        </Link>
                    </div>
                })}
            </div>
        </>
    )
}

export default Blog