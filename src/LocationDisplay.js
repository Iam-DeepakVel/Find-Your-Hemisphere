import React from "react";
import Northpic from "./Northpic.jpg"
import Southpic from "./Southpic.jpg"
import "./LocationDisplay.css"

const LocationConfig = {
    North: {
        text:"You are in Nothern Hemisphere",
        picture:Northpic
    },
    South: {
        text:"You are in Southern Hemisphere",
        picture:Southpic
    }

}

const LocationDisplay = ({latitude}) =>{
    var region = (latitude>0)?'North':'South';
    const{text,picture} = LocationConfig[region]
      
    return(
     <div className={region}> 
        <div className="image">
        <div className="ui teal bottom attached label"><h1>{text}</h1></div>
           
        <div className="ui raised text container segment">
        <img src={picture} alt="Location Image"/>
        </div>
        </div>
     </div>

 )

}

export default LocationDisplay;