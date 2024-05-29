import { useLoaderData } from "react-router-dom";
import Allposts from "../AllPosts/Allposts";
import Slider from "../Slider/Slider";
import UserReview from "../UserRview/UserReview";
import NewsLetter from "../NewsLetter/NewsLetter";

const Home = () => {
    const posts = useLoaderData();
    return (
        <div className="max-w-screen-lg mx-auto">
            <Slider></Slider>
            <Allposts posts={posts}></Allposts>
            <NewsLetter></NewsLetter>
            <UserReview></UserReview>
        </div>
    );
};

export default Home;