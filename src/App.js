
import './App.css';
import React from 'react';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

//pages
import contact from "./pages/contact";
import about from "./pages/about";
import Home from "./pages/home";
import mywork from "./pages/mywork";

//Icons
import MenuDemo from "../src/components/matmenu";

class App extends React.Component {
 
  render() {
     return (
             <>
                <div className="header">
                    
                    <div>
                              <MenuDemo/>  
                    </div> 
                  
                    <div>
                      <Router>
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" component={about}/>
                        <Route path="/contact" component={contact}/>
                        <Route path="/mywork" component={mywork}/>
                      </Router>
                    </div>

                </div>

              </>
     )
  }
}
export default App;

