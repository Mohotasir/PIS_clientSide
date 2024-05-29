import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Theme/ThemeContext";


const SinglePost = ({ post }) => {
    const {
        _id,
        boycottingReasonDetails, datePosted, productBrand,
        productImageUrl, productName,
        queryTitle, recommendationCount, userEmail, userImage, userName
    } = post
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme=== 'light'?'border-none':'border border-gray-800'} shadow-md px-8 py-2 md:py-4 rounded`} data-aos="fade-up">
            <div className="flex justify-between items-center">
                <div className="flex gap-3 text-sm md:text-md items-center mb-2">
                    <img className="w-[50px] h-[50px] rounded-full" src={userImage} alt="" />
                    <div>
                        <h1 className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-400' } font-semibold poppin `}>{userName}</h1>
                        <p className="text-sm poppin">{datePosted}</p>
                    </div>
                </div>
                <p className={`${theme === 'light' ? 'bg-purple-100' : 'bg-purple-900' } font-bold text-sm poppin  py-1 px-2 rounded-full`}>Recomendation : {recommendationCount}</p>
            </div>
            <div className="flex flex-col lg:flex-row mx-3 md:mx-0  gap-6 justify-center items-center">
                <div className="lg:w-2/6">
                <img className=" rounded  h-[200px] md:h-full  w-full " src={productImageUrl} alt="" />
                </div>
                <div className=" lg:w-4/6">
                    <h1 className="text-lg font-semibold ">{queryTitle}</h1>
                    <div className="">
                        <h1> <span className="text-lg sub-clr">Product :</span> {productName}</h1>
                        <h1> <span className="text-lg sub-clr">Brand:</span> {productBrand}</h1>
                    </div>
                    <p className={`${theme === 'light' ? 'text-gray-800' : 'text-white' }`}><span className={`sub-clr text-lg `}>Reason:</span> {boycottingReasonDetails}</p>
                    <Link to={`details/${_id}`} className="btn bgClr2 text-white btn-sm my-3" >More Details</Link>

                </div>
            </div>
        </div>
    );
};

export default SinglePost;