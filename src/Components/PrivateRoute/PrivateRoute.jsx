import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader from "../Loader/Loader";


const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children;
    }
    return <Navigate to="/login"></Navigate>
        
   
};

export default PrivateRoute;