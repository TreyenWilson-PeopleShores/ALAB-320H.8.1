import { useState, useEffect } from "react";


function DisplayToScreen(props){

    
    return(
    
        <div>
            <ul>{props.name.map((ship, index)=>  
                    <span className="ship" key={index}><li>{ship}</li></span>
                )}
            </ul>
            
        </div>
    )
}

export default DisplayToScreen