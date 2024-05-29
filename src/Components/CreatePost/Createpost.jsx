
import React, { useContext, useState } from "react";
import swal from 'sweetalert'
import img from '../../assets/addbg.webp'
import { AuthContext } from "../AuthProvider/AuthProvider";
const CreatePost = () => {
  const {user} = useContext(AuthContext);
  console.log(user);
  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
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
    const form = e.target;
    const newQuery = {
      userEmail: user.email,
      userName: user.displayName, 
      userImage: user.photoURL, 
      datePosted: new Date().toLocaleString(),
      recommendationCount: 0,
      ...formData,
    };
    console.log(newQuery);
    fetch("https://pis-server.vercel.app/posts",{
            method: 'POST',
            headers: {
              'content-type':'application/json'
            },
            body: JSON.stringify(newQuery)
          })
          .then(res=> res.json())
          .then(data =>{
            console.log(data)
            if(data.insertedId){
                swal({
                    title: "Successfull !",
                    text: "Added post successfully",
                    icon: "success",
                    button: "Ok",
                  });
                  setFormData({
                    productName: "",
                    productBrand: "",
                    productImageUrl: "",
                    queryTitle: "",
                    boycottingReasonDetails: "",
                  });
            }

            
          });
    
  };

  return (
    <div className="py-6 md:py-16" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('${img}')` }} >
      <form onSubmit={handleSubmit} className="max-w-lg text-black mx-auto space-y-4 shadow-lg p-8 bgClr rounded-lg" data-aos="fade-down">
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
          type="text"
          name="productBrand"
          value={formData.productBrand}
          onChange={handleChange}
          required
          placeholder="Product Brand"
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
          placeholder="Query Title"
          required
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <textarea
          name="boycottingReasonDetails"
          value={formData.boycottingReasonDetails}
          onChange={handleChange}
          placeholder="Boycotting Reason Details"
          rows="4"
          required
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 px-4 border p-2 outline-none border-gray-300 border-transparent rounded-md shadow-sm text-white bgClr2 hover:bgClr focus:outline-none "
        >
          Add Query
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
