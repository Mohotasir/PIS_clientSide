import { Outlet } from "react-router-dom";
import Nav from "../Nav/Nav";
import { useContext, useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import Footer from "../Footer/Footer";
import { ThemeContext } from "../Theme/ThemeContext";

const Root = () => {
    const [loading,setLoading] = useState(true);
    useEffect(() => {
        // Simulate loading time
        const timeout = setTimeout(() => {
          setLoading(false);
        }, 1500);
    
        return () => clearTimeout(timeout);
      }, []);
    const {theme} = useContext(ThemeContext)
    return (
        loading ? 
                <Loader></Loader> :
                                     <div className={`${theme == 'light' ? 'light-theme' : 'dark-theme'}`}>
                                        <div className="h-[83px]">
                                            <Nav></Nav>
                                        </div>
                                         <Outlet ></Outlet>
                                        <Footer></Footer>
                                    </div>
    );
};

export default Root;