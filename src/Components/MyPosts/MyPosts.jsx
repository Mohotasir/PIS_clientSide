import { useContext, useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const MyPosts = () => {
    const {user} = useContext(AuthContext);
    const [mypost,setMypost] = useState([]);
    const email = user.email;
    useEffect(() => {
        fetch(`https://pis-server.vercel.app/posts?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const userPost = data.filter(post => post.userEmail === email);
                console.log(userPost)
                setMypost(userPost);
            });
    }, [user]);
    const handleDelete = async (_id) => {
        const willDelete = await swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        });

        if (willDelete) {
            fetch(`https://pis-server.vercel.app/posts/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal("Your data has been deleted!", {
                        icon: "success",
                    });
                    // Remove the deleted post from the state
                    const remaining = mypost.filter(u => u._id !== _id);
                    setMypost(remaining);
                } else {
                    swal("Error!", "Failed to delete the post.", "error");
                }
            })
            .catch(error => {
                console.error("Error deleting data:", error);
                swal("Error!", "Failed to delete the post.", "error");
            });
        }
    };

    return (
        <div className="poppin">
            <div className="addBnner text-white bgClr h-[40vh] rounded-b-3xl flex flex-col justify-center items-center">
                <h1 className="text-3xl md:text-5xl font-semibold ">Discover New Alternatives</h1>
                <div className="flex gap-3 items-center justify-center my-3 md:my-6 text-xl">
                    <p className="text-orange-500">Click here to Create your new Query :</p>
                    <Link to="/createpost" className="btn text-base text-white bg-orange-500 border-none outline-none  rounded-full">< IoIosAddCircle />Create</Link>
                </div>
            </div>
            <div className="myPost  min-h-[60vh] flex items-center justify-center ">
                 {
                      (mypost.length <= 0) ? 
                           <div className="text-center">
                                <h1 className="text-4xl mb-3 font-semibold text-gray-500">No post Heere !</h1>
                                <Link to="/createpost" className="btn bg-gray-400 ">ADD Post</Link>
                           </div> :
                           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {
                                   mypost.map(p => <div className="shadow-md text-md font-sans px-8 py-4  rounded" data-aos="fade-up">
                                   <div className="flex justify-between items-center">
                                       <div className="flex gap-3 font-bold items-center mb-2">
                                           {p.datePosted}
                                       </div>
                                       <p className="font-bold text-sm poppin bg-purple-100 py-1 px-2 rounded-full">Recomendation :{p.recommendationCount}</p>
                                   </div>
                                   <div className="flex flex-col md:flex-row mx-3 md:mx-0  gap-6 justify-center items-center">
                                       <div className="lg:w-2/6">
                                       <img className=" rounded h-[200px]  w-full " src={p.productImageUrl} alt="" />
                                       </div>
                                       <div className=" lg:w-4/6">
                                           <h1 className="font-semibold ">{p.queryTitle}</h1>
                                           <div className="">
                                               <h1> <span className=" sub-clr">Product :</span> {p.productName}</h1>
                                               <h1> <span className=" sub-clr">Brand:</span> {p.productBrand}</h1>
                                           </div>
                                           <p className="text-gray-800"><span className="sub-clr">Reason:</span> {p.boycottingReasonDetails}</p>
                                           <div className="flex gap-4">
                                           <Link to={`details/${p._id}`} className="btn bgClr2 text-white btn-sm my-3" > Details</Link>
                                           <Link to={`update/${p._id}`} className="btn bg-orange-400 text-white btn-sm my-3" > Update</Link>
                                           <p onClick={()=>handleDelete(p._id)} className="btn bg-red-500 text-white btn-sm my-3" > Delete</p>
                                           </div>
                       
                                       </div>
                                   </div>
                               </div> )
                                }
                           </div>
                 }
            </div>
        </div>
    );
};

export default MyPosts;