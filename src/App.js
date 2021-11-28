import React from "react";
import FullName from "./component/profile/FullName.js";
import Adress from "./component/profile/Adress.js";
import Profile from "./component/profile/ProfilePhoto.js";
import "./style.css";


const App = () => {
  return ( 
    
    <div className="card-container">
       <div className="img" ><Profile/>
        <div className="cardu"> 
        <div className="card-body">
         <h2 className="card-title"><FullName/></h2> 
          <span className="card-author "><Adress/></span>
          <span className="card-description ">These last few weeks I have been working hard on a new brunch recipe for you all.</span>
     </div> 
     </div>
    </div>
    <div className="card-shadow" />
  </div>
  
  
   );
  }; 
 export default App;