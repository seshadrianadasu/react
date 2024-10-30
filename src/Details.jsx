import React from "react";
import { Outlet } from "react-router-dom";

function Details(){
    return(
        <div >
            <p>Details</p>
        <Outlet/>
        </div>
    )
}
export default Details