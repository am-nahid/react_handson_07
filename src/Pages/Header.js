import React from "react";
import {Link} from "react-router-dom";



 function PageHeader(){

    const linkStyle = {
        textDecoration : "none",
        color : "white",
        fontFamily: 'lucida'
        
    }
   return(
     <div className="theHeader">
     <Link to={"/"} style={linkStyle} > Home</Link>
     <Link to={"/student"} style={linkStyle} >Students</Link>
     <Link to={"/contact-us"} style={linkStyle} > Contact Us</Link>
    </div>
   )
}

export default PageHeader;