import React from "react";

const SidelaneOptions = ()=>{

    return(
        <div className="flex flex-col">
            <div className="border-black border-b-2 hover:bg-slate-100 rounded-sm m-1 cursor-pointer">My Notes</div>
            <div className="border-black border-b-2 hover:bg-slate-100 rounded-sm m-1 text-center cursor-pointer">Trash</div>
        </div>
    )
}

export default SidelaneOptions