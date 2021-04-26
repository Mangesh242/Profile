import React from 'react';

import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import github from '../../src/github.png';
import linkedin from '../../src/linkedin.png';
import insta from '../../src/insta.jpeg';
import"./linksviewmywork.css";

export default function LinkViewWork(){

    function viewMyWork(){
        window.location.href = "/mywork";  
        console.log("We are in view My work");
    }
    const links={
        "git":"https://github.com/Mangesh242",
        "linkedin":"https://www.linkedin.com/in/mangeshz9273759",
        "insta":""
    }

    function openExternalLink(route){
        window.open(links[route], "_blank",);
        alert("Yet to add the link");
    }
    return(
      <>
       

       <div className="projectIconContainer">
            
            <div className="ball_wrap">
            <div className="blue_ball">
            <DynamicFeedIcon className="projectIconStyle "/>
                  </div>
                  <div  onClick={() => openExternalLink('git')} className="green_ball">
                  <img  className="gitIcon" src={github} alt="git hub link"/>
                  </div>

                  <div onClick={() => openExternalLink('linkedin')} className="green_ball">
                  <img className="gitIcon" src={linkedin} alt="linkedin link"/>
                  </div>
                  <div onClick={() => openExternalLink('insta')} className="green_ball">
                  <img className="gitIcon" src={insta} alt="instagram link"/>
                  </div>
            </div>

              
           
     
        <div onClick={viewMyWork} className="viewMyWorkClass">
            View My Work
        </div>
     
   </div>


      </>
    )
}