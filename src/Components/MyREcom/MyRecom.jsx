import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const MyRecom = () => {
    const [recom, setRecom] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user.email;
    useEffect(() => {
        fetch(`https://pis-server.vercel.app/recoms?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const userPost = data.filter(post => post.recomEmail === email);
                console.log(userPost)
                setRecom(userPost);
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
            fetch(`https://pis-server.vercel.app/recoms/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    swal("Your data has been deleted!", {
                        icon: "success",
                    });
                    // Remove the deleted post from the state
                    const remaining = recom.filter(u => u._id !== _id);
                    setRecom(remaining);
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
        <div className='container mx-auto'>           
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>

                                <tr className='text-base poppin text-black'>
                                    
                                    <th>Query Title</th>
                                    <th>Recomendation</th>
                                    <th>Recomended By</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    recom.map(rcm =>
                                        <tr className=''>
                                    
                                        <td className='font-bold'>{rcm.queryTitle}</td>
                                        <td className=''>
                                            <div className='flex flex-col md:flex-row gap-2 font-bold'>
                                                <img className='w-[100px] rounded-md' src={rcm.productImageUrl} alt="" />
                                                <div>
                                                   <h1 className=''>{rcm.productName}</h1>
                                                    <p className='underline text-xs text-purple-700'>View post</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <div className='text-black font-bold'>
                                                <p onClick={()=>handleDelete(rcm._id)} className='btn btn-sm bg-red-500 text-black'>Delete</p>   
                                            </div>
                                        </td>
                                    </tr>


                                    )
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>       
        </div>
    );
};

export default MyRecom;