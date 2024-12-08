import React from "react";
import logo from '../img/noteicon.png'
import logoutIcon from '../img/logouticon.png'
import userIcon from '../img/usericon.png'

const Navbar = () => {

    return (
        <div className="flex flex-col flex-grow">
            <nav className="flex flex-grow bg-green-600 justify-between">
                <div><img src={logo} alt="Logo" height="auto" width="50px"/></div>
                <div className="flex items-center mr-3 ml-auto font-bold"><img src={userIcon} alt="userIcon" className="h-6 w-8 cursor-pointer mr-1"/>Abdul</div>
                <div className="mr-1 flex items-center"><img onClick={()=>alert("logout!")} src={logoutIcon} alt="logoutIcon" className="h-8 w-10 cursor-pointer"/></div>
            </nav>
        </div>
    )
}

export default Navbar;