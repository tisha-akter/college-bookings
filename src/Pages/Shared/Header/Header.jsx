/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className='container mx-auto '>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <div className="text-gray-600 hover:text-indigo-400 font-semibold text-xl">
                                <NavLink to='/' className='navlinkbuttons'
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "blue" : ""
                                    })}>
                                    <span className='me-2'>Home</span>
                                </NavLink>
                            </div>
                            <div className='text-gray-600 hover:text-indigo-400 font-semibold text-xl'>
                                <NavLink to='/colleges' className='navlinkbuttons'
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "blue" : ""
                                    })}>
                                    <span className='me-2'>Colleges</span>
                                </NavLink>
                            </div>
                            <div className='text-gray-600 hover:text-indigo-400 font-semibold text-xl'>
                                <NavLink to='/admission' className='navlinkbuttons'
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "blue" : ""
                                    })}>
                                    <span className='me-2'>Admission</span>
                                </NavLink>
                            </div>
                            <div className='text-gray-600 hover:text-indigo-400 font-semibold text-xl'>
                                <NavLink to='/my-college' className='navlinkbuttons'
                                    style={({ isActive, isPending }) => ({
                                        color: isActive ? "blue" : ""
                                    })}>
                                    <span className='me-2'>My College</span>
                                </NavLink>
                            </div>
                        </ul>
                    </div>
    
                    <h2 className="text-2xl font-bold font-serif text-indigo-600">
                        College Booking
                    </h2>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-4">
                        <div className="text-gray-600 hover:text-indigo-400 font-semibold text-xl">
                            <NavLink to='/' className='navlinkbuttons'
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? "blue" : ""
                                })}>
                                <span className='me-2'>Home</span>
                            </NavLink>
                        </div>
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold text-xl'>
                            <NavLink to='/colleges' className='navlinkbuttons'
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? "blue" : ""
                                })}>
                                <span className='me-2'>Colleges</span>
                            </NavLink>
                        </div>
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold text-xl'>
                            <NavLink to='/admission' className='navlinkbuttons'
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? "blue" : ""
                                })}>
                                <span className='me-2'>Admission</span>
                            </NavLink>
                        </div>
                        <div className='text-gray-600 hover:text-indigo-400 font-semibold text-xl'>
                            <NavLink to='/my-college' className='navlinkbuttons'
                                style={({ isActive, isPending }) => ({
                                    color: isActive ? "blue" : ""
                                })}>
                                <span className='me-2'>My College</span>
                            </NavLink>
                        </div>
                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <button className="btn  bg-indigo-700 text-white">login</button>
                </div>
            </div>
        </div>
    );
};

export default Header;