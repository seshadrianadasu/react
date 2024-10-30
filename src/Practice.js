import React, { useState } from 'react'

function Practice(){
    
    const [update,setupdate]=useState({
        product:"realme",
        price:"20,000"
    })
    return(
        <div className='div-class'>
            <h1>product Name:{update.product}</h1>
            <h1>price : {update.price}</h1>
           <input type='text' id='get'/>
            <button className='btn bg-dark text-white' >click me!</button>
        </div>
    )
}
export default Practice