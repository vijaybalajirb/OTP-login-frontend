import React from "react";
import {Link} from "react-router-dom";

const Dummy = () => {
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Logged in</h1>
            <h4 style={{textAlign:"center"}}><Link to="/">Go back to register</Link></h4>
        </div>
    )
}

export default Dummy;