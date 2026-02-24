import { useState, useEffect } from "react";


function DisplayToScreen(props){

    
    return(
    
        <div>
            {props.name.map((ship, index)=>  
                    <span className="ship" key={index}>{ship}</span>
                )}
           
            
        </div>
    )
}

export default DisplayToScreen