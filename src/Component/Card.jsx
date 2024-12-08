import React from "react";
import dots from '../img/dotsicon.png'
import Tooltip from "./Tooltip";

const Card=(props)=>{
    const {showOption, handleOptionsPopup, title, description, createdOn, lastEdit} = props;
    return(
        <>
         <div className="flex w-48 bg-orange-100 border rounded-md shadow-md shadow-orange-200 m-2 hover:-translate-y-1 hover:bg-orange-200">
                <div className="card-body">
                    <div className="flex justify-between border-b-2 border-orange-300">
                        <h2 className="m-1">{title}</h2>
                        <Tooltip element={<img src={dots} alt="options" onClick={handleOptionsPopup} className="h-4 w-4 m-2 cursor-pointer" />} text="Options"/>
                    </div>
                    <p className="m-2">{description}</p>
                    <div className="flex m-1 border-t-2 border-orange-300 flex-col">
                        <p className="font-thin italic text-sm">CreatedOn: {createdOn}</p>
                       {lastEdit !== "null" ?<p className="font-thin italic text-sm">LastEdit: {lastEdit}</p> : null}
                    </div>
                </div>
            </div>
            
            { showOption &&
                // show options
                <div className="flex flex-col bg-slate-500 modal w-20 items-center cursor-pointer option border rounded-md">
                <p className="item border-black border-b-2 p-px w-14">Expand</p>
                <p className="item border-black border-b-2 p-px w-14">Edit</p>
                <p className="item border-black border-b-2 p-px w-14">Copy</p>
                <p className="item p-px w-14">Delete</p>
                </div>
            }
        </>
    )
}

export default Card