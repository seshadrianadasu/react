import React from "react";
function Card(props){
    return(
<div>
    <h1>
        {props.children}
    </h1>
</div>
    )
}
export default Card