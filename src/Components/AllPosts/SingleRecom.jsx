import { Link } from "react-router-dom";


const SingleRecom = ({rcm}) => {
    const {
        _id,
        boycottingReasonDetails, datePosted,
        productImageUrl, productName,
        queryTitle, recommendationCount, recomEmail, userImage,  recomName
    } = rcm;
    return (
        <div className="flex gap-2 text-sm border leading-6">
            <div className="lg:w-2/6">
                <img className="" src={productImageUrl} alt="" />
            </div>
            <div className="lg:w-4/6">
                <h1>{datePosted}</h1>
                <h1 className="font-bold">{productName}</h1>
                <p>{boycottingReasonDetails}</p>
                <Link to="/view" className="btn btn-sm  bgClr2 text-white ">view</Link>
                <div>
                    <div></div>
                    <div className="flex flex-row-reverse p-3  items-center ">
                        <img className="w-[35px] h-[35px] ml-2 rounded-full" src={userImage} alt="" />
                        <h1 className="font-semibold">{recomName}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleRecom;