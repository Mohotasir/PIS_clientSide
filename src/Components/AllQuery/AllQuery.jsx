import { useEffect, useState } from "react";
import SinglePost from "../AllPosts/SinglePost";

const AllQuery = () => {
    const [data, setData] = useState([]);
    const [gridColumns, setGridColumns] = useState(2);

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const value = form.src.value;
        const searchValue = data.filter(d => d.productName === value);
        setData(searchValue);
        form.reset();
    };

    useEffect(() => {
        fetch('https://pis-server.vercel.app/posts')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const handleLayoutChange = (columns) => {
        setGridColumns(columns);
    };

    return (
        <div className="">
            <div>
                <div className="addBnner text-white bgClr h-[20vh] rounded-b-3xl flex flex-col justify-center items-center">
                    {/* <h1 className="text-3xl md:text-2xl font-semibold ">Search Your Alternatives</h1> */}
                    <form onSubmit={handleSubmit} >
                        <input className="outline-none px-3 py-3 rounded text-black" type="text" name="src" id="src" placeholder="Product name..." />
                        <button className="btn border-none ml-2  bg-orange-600 text-white">Search</button>
                    </form>
                    
                </div>
                <div className="mt-2 flex  md:flex-row gap-3 items-center justify-center my-3 ">
                        <p className="poppin font-semibold">see posts in :</p>
                        {/* Buttons for toggling grid layout */}
                        <button className="btn btn-sm bgClr2 text-white" onClick={() => handleLayoutChange(1)}>1 Column</button>
                        <button className="btn btn-sm bgClr2 text-white" onClick={() => handleLayoutChange(2)}>2 Columns</button>

                    </div>
            </div>
            <div className="container mx-auto">
                {/* Dynamic grid layout based on selected number of columns */}
                <div className={`grid grid-cols-1 md:grid-cols-${gridColumns} gap-4 my-6`}>
                    {
                        data.map(post => <SinglePost key={post._id} post={post}></SinglePost>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllQuery;
