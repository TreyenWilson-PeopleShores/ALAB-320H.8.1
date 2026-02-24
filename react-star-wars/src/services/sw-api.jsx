import { useState, useEffect } from "react";
const base_url = "https://swapi.dev/api/starships/"
// Check different ships by changing https://swapi.dev/api/starships/ID/
// ID is the number. Like 9 for the death star.


function API(props)
    {
        let url = base_url+"9/" // 7 is blank?
        console.log(url)
        const getShip = async () => {
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Response Status: ${response.status}`);
                }
                const result = await response.json();
                console.log(result);

            }catch (error){
                console.log(error)
            }
        }
        getShip()
  

    }


export default API