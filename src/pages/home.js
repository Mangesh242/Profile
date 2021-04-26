import React from 'react';
import Leftpage from "./leftPage";
import Rightpage from"./rightPage";
import "./home.css";
import LinkViewWork from "./linksviewmywork";

export default function Home(){
    return(
      <>
        <div className="backgroundProp">
           <Leftpage/>
           <Rightpage/>
        </div>
      <div className="showWork">
      <LinkViewWork/>
        </div> 
       
      </>
    )
}