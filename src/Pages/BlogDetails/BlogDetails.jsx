import { useParams } from "react-router-dom"
import apiResponse from "../../response";

const BlogDetails = () => {
    const payload = apiResponse;
    let { slug } = useParams();
    const element = payload.posts.find(e => e.slug === slug);
    const { title, excerpt, image } = element;
    return (
        <>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{excerpt}</p>
        </>
    )
}

export default BlogDetails