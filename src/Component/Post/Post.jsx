
const Post = ({ post }) => {
    const { id, image, title, excerpt, slug } = post;
    return (
        <>
            <div className="border-white border">
                <img src={image} className="" alt={slug} />
                <div className="">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{excerpt}</p>
                </div>
            </div>
        </>
    )
}

export default Post