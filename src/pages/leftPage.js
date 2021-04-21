import React from 'react';
import profile from '../../src/profile2.png';
import "./leftPage.css";


export default function Leftpage(){
    return(
        <div> 
            <img className="croppeimageproperties" src={profile} alt="Profile Image"/>
        </div>
    )
}


