import React, { useContext, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ThemeContext } from '../Theme/ThemeContext';

const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, signInWithGoogle, signInWithGithub } = useContext(AuthContext);
    // const [data,setData] = useState([]);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;

        //console.log(email,pass);
        signInUser(email, pass)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setShowModal(true);
                    //----------token-------
                    //const userAuth = { email }
                    //axios.post('https://car-doctor-server-tahsins-projects-aaa37910.vercel.app/jwt')
                        //.then(res => {
                            //console.log(res.data)
                            setTimeout(() => {
                                //if (res.data.success) {
                                    navigate(location?.state ? location?.state : '/');
                               // }
                                setShowModal(false);

                            }, 1500);
                        //})

                }
                e.target.reset();
            })
            .catch(error => {
                alert("Login Failed!!")
                console.log(error.message)
            });

    };
    const handleGoogleLogin = () => {
        signInWithGoogle()
            .then(() => {

                setShowModal(true);
                setTimeout(() => {
                    navigate(location?.state ? location?.state : '/');
                    setShowModal(false);

                }, 1000);


            })
            .catch(error => {
                const errMsg = error.message;
                alert(errMsg);
            });
    };
    const {theme} = useContext(ThemeContext)
    return (
        <div className={`${theme === 'light' ? 'c-bg2' : 'dark-theme' } flex flex-col-reverse  lg:flex-row  justify-around`}>
            
            <div className='lg:w-1/2'>
                
                <form className={`${theme === 'light' ? 'bg-white border ' : 'bgClr border-none outline-none' } shadow-lg  m-6  p-12 rounded-lg`} onSubmit={handleSubmit} data-aos="zoom-in" data-aos-duration='1000'>
                   <p className='text-3xl font-bold text-center  my-4'>Log in</p>
                    <div className="mb-4">
                        <label className="block clr text-sm font-semibold mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700"
                            placeholder="Enter your email"


                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block clr text-sm font-semibold mb-2" htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            id="password"
                            className="appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:border-cyan-700 pr-10"
                            placeholder="Enter your password"

                            required
                        />
                        <button
                            type="button"
                            className="absolute top-9 right-0 flex items-center justify-center px-3 bg-transparent focus:outline-none"
                            onClick={togglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash className="h-5 w-5 text-black" /> : <FaEye className="h-5 w-5 text-black" />}
                        </button>
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white bgClr2 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Login
                    </button>
                    <p className='text-gray-700 text-sm py-2 '>Don't have any account? please <Link className='underline text-blue-600' to="/signup">register</Link> </p>
                    <div className="text-black flex text-3xl items-center justify-center gap-2 pt-2 border-t-2 mt-6 ">
                        <div onClick={handleGoogleLogin} className='hover:bg-gray-200 p-3 cursor-pointer rounded-md border c-bg2  flex'><FcGoogle /> <span className='text-lg ml-3 '>Log in with Google</span> </div>
                        
                    </div>
                </form>
            </div>
            {showModal && (
                <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white flex flex-col items-center justify-center p-5 md:p-12 rounded-lg shadow-lg text-black">
                        <div className='py-2 t-clr text-5xl font-semibold'><IoMdCheckmarkCircleOutline /></div>
                        <p className="text-2xl t-clr font-semibold mb-2">Login Successful!</p>
                        <p className='text-sm'>You have successfully logged in!</p>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Login;