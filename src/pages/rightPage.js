import React from 'react';
import "./leftPage.css";
import Typical from 'react-typical';
import "./rightPage.css";


import LinkViewWork from "./linksviewmywork";

export default function Rightpage(){

   
    return(
        <>
            <div className="headerRight">
            <div className="headerRight__container"> 

            <div className="headerRight__container__header">
              <div className="developerName"> Mangesh Zoke </div>
            </div>
           
            <p className="paragraph"> I'm a {'- '}
              <Typical
               loop={Infinity}
               wrapper="b"
               steps={[
                 ' Software Developer.',2000,
                 ' Web Designer.',2000,
                 ' Youtuber.',2000,
                 ' Open Sourcer.',2000,
                 ' Science Teacher.',2000,
               ]} 
               />
             {/* , scince teacher, photographer, youtuber, traveller.</h1> */}
                </p>
             </div>
                    <div className="showLinkViewWork">
                        <LinkViewWork/>
                    </div> 
          </div>

          </>
        
    )
}

