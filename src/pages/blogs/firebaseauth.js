import React from 'react';
import profile from "../../profile2.png";
import './firebaseauth.css';
import Angular from "../../Angular.png";

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import CommentIcon from '@material-ui/icons/Comment';

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

export default function fAuth(){


    let likeCount=42;
    function updateLikes(){
        console.log("we are in update likes button",likeCount);
            likeCount=likeCount+1;
            console.log("Increased likecount",likeCount);
    }

    return(
        <div className="blogsContainer">
    
                <div className="blogsHeader">
                            <h1 className="titleClass">
                                Upgrading to Angular 9:My Experience 
                            </h1>
                            <img className="iconProperties" src={profile} alt="Profile Image"/>
                            <span>Mangesh Zoke: 30/04/2021</span>
                </div>      
                <div className="blogsBody">
                <img src={Angular} alt="Blogs Logo"/>
                        <p>
                        Last week, version 9 of Angular was released.
                        The much anticipated Ivy Renderer was now set to default. The promise of smaller bundle sizes 
                        and faster applications was just too much for me to pass over.
                        So Monday first thing, I wanted to get my upgrade going.

                        <br/>
                        <br/>
                        The following story shares my experiences in upgrading a sizable application with 
                        some complexity, giving a good indication of the types of issues you may be running into 
                        with your application.
                                        <h3>...</h3>
                        </p>
                        <h2>Upgrading</h2>

                        <p>
                        As any upgrade starts, I created a new branch and ran the usual ng update to 
                        see what versions are eligible for automatic upgrades. I tried to run a ng update --all 
                        which failed cause of dependency issues like TSLint, Codelyzer and rxjs-tslint-rules not
                        being updated yet. Normally, you could go for a ng update --all --force and see if that 
                        sticks, 
                        but considering the complexity of our application, I prefer to do it a bit more manually.
                        </p>
                <h3>By @Mangesh242</h3>
                </div>

                <div className="blogsFooter">
                        <div className="tagsContainer">
                            <div className="tags"> Angular   </div> 
                            <div className="tags"> Typescript   </div> 
                            <div className="tags"> Upgrade</div> 
                            <div className="tags"> Version </div> 
                             
                        </div>

                        <div className="socialIcons">
                            <div className="socialIconsPartOne">
                            <ThumbUpAltIcon onClick={updateLikes} />{likeCount}<CommentIcon/>4
                            </div>
                            <div className="socialIconsPartTwo">
                            <TwitterIcon/> <LinkedInIcon/> <FacebookIcon/>
                            <BookmarkBorderIcon/>
                            </div>
                            

                        </div>
                </div>  

        </div>
    )
}