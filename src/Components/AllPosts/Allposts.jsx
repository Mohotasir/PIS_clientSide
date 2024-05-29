import { useLoaderData } from "react-router-dom";
import SinglePost from "./SinglePost";

const Allposts = () => {
    const posts = useLoaderData()
    
    return (
        <div className="container mx-auto my-24 flex flex-col md:flex-row gap-8">
            <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                posts.slice(0,8).map(post => <SinglePost key={post._id} post={post}></SinglePost>)
            }
            </div>
        </div>
    );
};

export default Allposts;