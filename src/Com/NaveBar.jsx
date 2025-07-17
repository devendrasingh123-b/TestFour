import React from "react";
import { Link } from "react-router-dom";



function NavBar(){


    return(

        <>
     
     <div id="navbarDiv">

   <Link to={"/Home"} >Home</Link>
        <Link to={"Product"}>Product</Link>
         <Link to={"About"} >About</Link>

     </div>
        
        </>
        
    )


}


export default NavBar