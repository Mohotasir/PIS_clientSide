import  { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { AuthContext } from '../AuthProvider/AuthProvider';
import logo from '../../assets/logo-removebg-preview.png'
import ThemeSwitcher from '../Theme/ThemeSwitcher';
const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => alert(error.message))
    }
    const navList = (
        <>
            <li><NavLink to="/" style={({ isActive }) => {
                return {
                    color: isActive && 'orange',

                }
            }}>Home</NavLink></li>
            <li><NavLink to="/allpost" style={({ isActive }) => {
                return {
                    color: isActive && 'orange',

                }
            }}>Posts</NavLink></li>
            {/* <li><NavLink to="/service" style={({ isActive }) => {
                        return {
                            color: isActive &&  'orange',
                           
                        }}}>Service</NavLink></li> */}

            {
                user?.email ?
                    <>
                        <li><NavLink to="/recomMe" style={({ isActive }) => {
                            return {
                                color: isActive && 'orange',

                            }
                        }}>Recommendations
                            For Me</NavLink>
                        </li>
                        <li><NavLink to="/myposts" style={({ isActive }) => {
                            return {
                                color: isActive && 'orange',

                            }
                        }}>My Posts</NavLink>
                        </li>
                        <li><NavLink to="/myrecom" style={({ isActive }) => {
                            return {
                                color: isActive && 'orange',

                            }
                        }}>My Recommendations</NavLink>
                        </li>
                    </>

                    :
                    <></>


            }
        </>
    )
    return (
        <div className=" bgClr text-white shadow-lg poppin fixed w-full z-10">
            <div className='navbar container mx-auto py-3'>
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className=" text-black menu-sm flex flex-col gap-4 dropdown-content z-10 mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                            {navList}
                        </ul>
                    </div>
                    <Link to="/" className='flex items-center justify-center '>
                        <img className='w-[80px] h-[60px] ' src={logo} alt="" />
                        <h1 className='text-2xl font-bold -ml-7'> <span className='text-bold text-4xl text-orange-500'>Q</span>me</h1>
                    </Link>
                </div>

                <div className="navbar-end">
                    <div className="navbar-center hidden lg:flex lg:mr-12">
                        <ul className="flex text-sm poppin gap-8 menu-horizontal px-1">
                            {navList}
                        </ul>
                    </div>
                    <ThemeSwitcher></ThemeSwitcher>
                    {user ? (
                        <>
                            <button onClick={handleSignOut} className="btn  btn-sm py-2 bg border-none mr-2" to="/login">Sign Out</button>
                            <img className="w-[40px] h-[40px] rounded-full mr-2 hover:cursor-pointer" src={user.photoURL} alt="" data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} />
                            <Tooltip id="my-tooltip" />
                        </>
                    ) : (
                        <>
                            <Link className=" px-3 py-2  text-sm bg rounded-md mr-2 bg-white text-orange-800" to="/signup">Sign Up</Link>
                            <Link to="/login" className="px-3 py-2 clr border border-orange-600 text-sm  rounded-md">Log In</Link>                    </>
                    )}

                </div>
            </div>

        </div>
    );
};

export default Nav;