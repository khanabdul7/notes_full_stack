import React from "react";
import '../Component/Tooltip.css'

const Tooltip = (props) => {

    return (
        <div className="flex w-8 tooltip">
            {props.element}
            <div className="tooltip-text bg-orange-300 p-1 border rounded-md">
                {props.text}
            </div>
        </div>
    )
}

export default Tooltip