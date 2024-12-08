import React, { useEffect, useState } from "react";
import './NotesView.css'
import Card from "./Card";
import cardData from '../cardData.json';
import {Login} from '../APIs/UserAPIs';

const NotesView = () => {

    const [showOption, setShowOption] = useState(false)

    const handleOptionsPopup=()=>{
        setShowOption(!showOption); //uncomment it and fix opiton popup
        
    }

    const user = {
        "email":"abdul@mail.com",
        "password":"123456"
    };

    useEffect(()=>{
        console.log(Login(user));
    })


    return (
        <>
            <div className="flex justify-center mt-2">
                <h2 className="font-bold">My Notes</h2>
            </div>
        {/* card */}
        <div className="flex scroll">
            <div className="flex flex-wrap">
            {cardData.map(card =>{
                return(
                    <Card showOption={showOption} handleOptionsPopup={handleOptionsPopup}
                        title={card.name} description={card.description} createdOn={card.createdOn} lastEdit={card.editedOn}
                    />
                )
            }
            )}
            </div>
           <Card showOption={showOption} handleOptionsPopup={handleOptionsPopup}/>
        </div>

        </>
    )
}

export default NotesView