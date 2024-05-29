import { GridLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <GridLoader color="#32012F" size={30} />
      
    </div>
  );
};

export default Loader;