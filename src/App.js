
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import profile from '../src/profile.png';
import Typical from 'react-typical';


class App extends React.Component {
 introduction=["I am software developer."];

  render() {
     return (
        <div class="header">
          <div class="headerName">
         <u>&#9830; Learn With Basics &#9830;</u>  </div> 
          
        <div class="backgroundProp">
          <div> 
          <img class="croppeimageproperties" src={profile} alt="Profile Image"/>
          </div>

          <div class="headerRight">

            <div class="headerRight__container"> 

            <div class="headerRight__container__header">
            </div>
            
            <p class="paragraph"> <h2>&#36;</h2>I'm a {' '}
              <Typical
               loop={Infinity}
               wrapper="b"
               steps={[
                 ' Developer.',1000,
                 ' Designer.',1000,
                 ' Youtuber.',1000,
                 ' Open Sourcer.',1000,
                 ' Scince Teacher.',1000,
               ]} 
               />
             {/* , scince teacher, photographer, youtuber, traveller.</h1> */}
                </p>
             </div>
          </div>
        </div>
        </div>
     )
  }
}
export default App;

