
import React, { useContext, useState } from "react";
import swal from 'sweetalert'
import img from '../../assets/addbg.webp'
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
const Update = () => {
  const loadData = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(loadData);
  const [formData, setFormData] = useState({
    productName: "",
    productBrand: "",
    productImageUrl: "",
    queryTitle: "",
    boycottingReasonDetails: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const productBrand =form.productBrand.value;
    const productImageUrl = form.productImageUrl.value;
    const queryTitle = form.queryTitle.value;
    const boycottingReasonDetails = form.boycottingReasonDetails.value;
    const formData = {productName,productBrand,productImageUrl,queryTitle,boycottingReasonDetails}
    console.log(formData);
    fetch(`https://pis-server.vercel.app/posts/${loadData._id}`,{
        method: 'PUT',
        headers:{
            'content-type' :'application/json'
        },
        body: JSON.stringify(formData)
    })
     .then(res => res.json())
     .then(data=>{console.log(data)
        if(data.modifiedCount>0){
            swal("Success!", "Data updated succesfully!", "success");
        }
    })
  };

  return (
    <div className="py-6 md:py-16" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 1)), url('${img}')` }} >
      <form onSubmit={handleSubmit} className="max-w-lg text-black mx-auto space-y-4 shadow-lg p-8 bgClr rounded-lg" data-aos="fade-down">
        <input
          type="text"
          name="productName"
          defaultValue={loadData.productName}
          required
          placeholder="Product Name"
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="productBrand"
          defaultValue={loadData.productBrand}
          required
          placeholder="Product Brand"
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="url"
          name="productImageUrl"
         defaultValue={loadData.productImageUrl}
          required
          placeholder="Product Image URL"
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <input
          type="text"
          name="queryTitle"
         defaultValue={loadData.queryTitle}
          placeholder="Query Title"
          required
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        />
        <textarea
          name="boycottingReasonDetails"
          defaultValue={loadData.boycottingReasonDetails}
          placeholder="Boycotting Reason Details"
          rows="4"
          required
          className="block w-full border p-2 outline-none border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 px-4 border p-2 outline-none border-gray-300 border-transparent rounded-md shadow-sm text-white bgClr2 hover:bgClr focus:outline-none "
        >
          Update
        </button>
      </form>
    </div>
  );
};

export default Update;
