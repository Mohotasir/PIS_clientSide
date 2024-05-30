import { useEffect, useState } from "react";
import SinglePost from "../AllPosts/SinglePost";
import Search from "./Search";

const AllQuery = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [gridColumns, setGridColumns] = useState(2);

  useEffect(() => {
    fetch('https://pis-server.vercel.app/posts')
      .then(res => res.json())
      .then(data => {
        setData(data);
        setFilteredData(data);
      });
  }, []);

  const handleSearch = (searchParams) => {
    const { searchTerm, productType, brand, datePosted, userRating } = searchParams;
    const filtered = data.filter(post => {
      return (
        (searchTerm ? post.productName.toLowerCase().includes(searchTerm.toLowerCase()) : true) &&
        (productType ? post.productType.toLowerCase().includes(productType.toLowerCase()) : true) &&
        (brand ? post.brand.toLowerCase().includes(brand.toLowerCase()) : true) &&
        (datePosted ? new Date(post.datePosted).toDateString() === new Date(datePosted).toDateString() : true) &&
        (userRating ? post.userRating === parseInt(userRating) : true)
      );
    });
    setFilteredData(filtered);
  };

  const handleLayoutChange = (columns) => {
    setGridColumns(columns);
  };

  return (
    <div className="">
      <div>
        <div className="addBnner text-white bgClr  rounded-b-3xl flex flex-col justify-center items-center">
          <Search onSearch={handleSearch} />
        </div>
        <div className="mt-2 flex md:flex-row gap-3 items-center justify-center my-3">
          <p className="poppin font-semibold">See posts in :</p>
          <button className="btn btn-sm bgClr2 text-white" onClick={() => handleLayoutChange(1)}>1 Column</button>
          <button className="btn btn-sm bgClr2 text-white" onClick={() => handleLayoutChange(2)}>2 Columns</button>
        </div>
      </div>
      <div className="container mx-auto">
        <div className={`grid grid-cols-1 md:grid-cols-${gridColumns} gap-4 my-6`}>
          {
            filteredData.map(post => <SinglePost key={post._id} post={post}></SinglePost>)
          }
        </div>
      </div>
    </div>
  );
};

export default AllQuery;
