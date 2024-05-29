import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import SingleRecom from "./SingleRecom";
import swal from 'sweetalert';
import { ThemeContext } from "../Theme/ThemeContext";

const Details = () => {
    const params = useParams();
    const [post, setPost] = useState([]);
    const { id } = params;

    useEffect(() => {
        fetch(`https://pis-server.vercel.app/posts/${id}`)
            .then(res => res.json())
            .then(data => setPost(data));
    }, [id]);

    const {
        _id,
        boycottingReasonDetails,
        datePosted,
        productBrand,
        productImageUrl,
        productName,
        queryTitle,
        recommendationCount,
        userEmail,
        userImage,
        userName
    } = post;

    const { user } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        productName: "",
        productImageUrl: "",
        queryTitle: "",
        boycottingReasonDetails: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newQuery = {
            recomEmail: user.email,
            recomName: user.displayName,
            userImage: user.photoURL,
            datePosted: new Date().toLocaleString(),
            recommendationCount: 0,
            queryId: _id,
            queryTitle: queryTitle,
            productName: productName,
            userEmail: userEmail,
            userName: userName,
            ...formData,
        };

        fetch("https://pis-server.vercel.app/recoms", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newQuery)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                swal({
                    title: "Successfull !",
                    text: "Added post successfully",
                    icon: "success",
                    button: "Ok",
                }).then(() => {
                    // Update UI state after adding recommendation
                    setPost(prevPost => ({
                        ...prevPost,
                        recommendationCount: prevPost.recommendationCount + 1
                    }));
                });
                setFormData({
                    productName: "",
                    productImageUrl: "",
                    queryTitle: "",
                    boycottingReasonDetails: "",
                  });
            }
        });
    };

    const [recom, setRecom] = useState([]);

    useEffect(() => {
        fetch('https://pis-server.vercel.app/recoms')
            .then(res => res.json())
            .then(data => {
                const individualData = data.filter(d => d.queryId === id);
                setRecom(individualData);
            });
    }, []);
    const {theme} = useContext(ThemeContext)
    console.log(recom);
    return (
        <div className="my-6 container mx-auto">
            <div className="flex flex-col md:flex-row gap-3 md:items-start">
                <div className="lg:w-4/6  shadow-md pb-4 rounded" data-aos="fade-up">
                    <div className={`${theme === 'light' ? '' : 'dark-theme border rounded-lg border-gray-800' }`}>
                        <div className={`${theme === 'light' ? 'bg-gray-100' : '' } flex justify-between px-4 py-2 items-center `}>
                            <div className="flex gap-3 items-center mb-2">
                                <img className="w-[50px] h-[50px] rounded-full" src={userImage} alt="" />
                                <div>
                                    <h1 className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-300' } font-semibold poppin `}>{userName}</h1>
                                    <p className="text-sm poppin">{datePosted}</p>
                                </div>
                            </div>
                            <p className="font-bold text-sm poppin bg-purple-100 py-1 px-2 rounded-full">Recomendation : {recommendationCount}</p>
                        </div>
                        <div className="flex flex-col md:flex-row mx-3 md:mx-0  gap-1 justify-center items-center">
                            <div className="lg:w-2/6">
                                <img className=" rounded   w-full " src={productImageUrl} alt="" />
                            </div>
                            <div className=" lg:w-4/6">
                                <h1 className={`${theme === 'light' ? 'text-black' : 'text-gray-300' } font-semibold poppin text-black `}>{queryTitle}</h1>
                                <div className="font">
                                    <h1> <span className="text-lg sub-clr">Product : </span> {productName}</h1>
                                    <h1> <span className="text-lg sub-clr">Brand: </span> {productBrand}</h1>
                                </div>
                                <p className={`${theme === 'light' ? 'text-gray-800' : 'text-gray-100' }  flex flex-wrap`}><span className="text-lg sub-clr">Reason:  </span> {boycottingReasonDetails}</p>

                            </div>
                        </div>
                    </div>
                    <div className="frm my-6   ">
                      <h1 className="text-xl text-gray-500 px-4 py-4">Write your recomendation :</h1>
                        <form onSubmit={handleSubmit} className="w-[90%] lg:w-[60%] mx-auto border space-y-4  p-8  rounded-lg" data-aos="fade-down">
                            <input
                                type="text"
                                name="productName"
                                value={formData.productName}
                                onChange={handleChange}
                                required
                                placeholder="Product Name"
                                className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <input
                                type="url"
                                name="productImageUrl"
                                value={formData.productImageUrl}
                                onChange={handleChange}
                                required
                                placeholder="Product Image URL"
                                className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <input
                                type="text"
                                name="queryTitle"
                                value={formData.queryTitle}
                                onChange={handleChange}
                                placeholder="Recomendation Title"
                                required
                                className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            />
                            <textarea
                                name="boycottingReasonDetails"
                                value={formData.boycottingReasonDetails}
                                onChange={handleChange}
                                placeholder="Recomendation Reason Details"
                                rows="4"
                                required
                                className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                            ></textarea>
                            <button
                                type="submit"
                                className="w-full py-2 px-4 border p-2 outline-none border-gray-300 border-transparent rounded-md shadow-sm text-white bgClr2 hover:bg-purple-700 focus:outline-none "
                            >
                                Add Recomendation
                            </button>
                        </form>
                    </div>
                </div>
                <div className="lg:w-2/6  border rounded">
                    <h1 className="text-center font-semibold texl-lg py-3 bg-purple-100 poppin">Recomendations </h1>
                    <div>
                        {

                            (recom.length <= 0) ?
                                <div className="h-[40vh]  flex items-center justify-center">
                                    <h1 className="text-2xl text-gray-400">No recomendation till Now!!</h1>
                                </div> :
                                <div>
                                    {
                                        recom.map(rcm => <SingleRecom key={rcm._id} rcm={rcm}></SingleRecom>)
                                    }
                                </div>

                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
