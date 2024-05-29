import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const RecomMe = () => {
    const [recom, setRecom] = useState([]);
    const { user } = useContext(AuthContext);
    const email = user.email;
    useEffect(() => {
        fetch(`https://pis-server.vercel.app/recoms?email=${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const userPost = data.filter(post => post.userEmail === email);
                console.log(userPost)
                setRecom(userPost);
            });
    }, [user]);
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
                                                
                                                <h1 className='text-md'>{rcm.recomName}</h1>
                                                <h2 className='text-sm text-gray-500'>{rcm.recomEmail}</h2>
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

export default RecomMe;