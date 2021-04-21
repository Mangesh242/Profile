import React from 'react';
import Leftpage from "./leftPage";
import Rightpage from"./rightPage";
import "./home.css";

export default function Home(){
    return(
        <div className="backgroundProp">
        <Leftpage/>
        <Rightpage/>
      </div>
    )
}