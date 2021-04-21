import React from 'react';
import "./leftPage.css";
import Typical from 'react-typical';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import "./rightPage.css";
import github from '../../src/github.png';
import linkedin from '../../src/linkedin.png';
import insta from '../../src/insta.jpeg';

export default function Rightpage(){

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
        
            <div className="headerRight">
            <div className="headerRight__container"> 

            <div className="headerRight__container__header">
              Mangesh Zoke
            </div>
            {/* <h2>&#36;</h2> */}
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
             <div className="projectIconContainer">
             {/* <SimpleTooltips/> */}
             {/* <Button variant="contained"> */}
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

               
             {/* </Button> */}
               
                <div onClick={viewMyWork} className="viewMyWorkClass">
                  View My Work
                  </div>
               
             </div>
          </div>
        
    )
}

