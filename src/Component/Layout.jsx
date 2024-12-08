import React from "react";
import './Layout.css';
import Navbar from "./Navbar";
import NotesView from "./NotesView";
import SidelaneOptions from "./SidelaneOptions";

const Layout = ()=>{

    return(
        <div>
            <div className="main-container flex flex-col">
                <div className="flex basis-14"><Navbar/></div>
                <div className="flex flex-grow">
                    <div className="bg-red-300 flex-grow min-w-60 flex justify-center items-center"><SidelaneOptions/></div>
                    <div className="bg-green-300 flex-grow-4"><NotesView/></div>
                </div>
                <div className="bg-blue-300 basis-16 flex justify-center items-center">
                    &copy; My Notes {new Date().getFullYear()}
                </div>
            </div>
        </div>
    )
}

export default Layout;