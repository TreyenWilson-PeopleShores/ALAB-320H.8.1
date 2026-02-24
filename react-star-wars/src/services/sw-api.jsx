import { useState, useEffect } from "react";
import DisplayToScreen from "../components/DisplayToScreen";

const base_url = "https://swapi.dev/api/starships/?page="
// Check different ships by changing https://swapi.dev/api/starships/ID/
// ID is the number. Like 9 for the death star.
// PAGES GP UP TO GOT:
// https://swapi.dev/api/starships/?page=4
// https://swapi.dev/api/starships/?page=1


function API(props)
    {
        const [shipNames, setShipNames] = useState([]);
        

        let isNull = false;
        let pageNumber = 1;
        props.Ships
        // 7 is blank?
        const getShip = async () => {
            
            let url = base_url+`${pageNumber}`
            try{
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error (`Response Status: ${response.status}`);
                }

                const result = await response.json();
                console.log(result.results);
                {result.results.map((ship, index)=>  
                <span className="ship" key={index}>{setShipNames(prev => [...prev, ship.name])}</span>
                    )

                };
                if (result.next === null){
                    isNull = true;
                    console.log ("There are no more pages")
                } else if(result.next !== null){
                    isNull = false;
                    console.log("There are more pages")
                    pageNumber+=1;
                    getShip(); // This checks for the next page, there are only 4 pages.
                    // There shouldn't be a stack overflow, since there shouldn't be more than 100 pages.
                    
                }

            }catch (error){
                console.log(error)
            }
        }
        
        useEffect(()=>{
            getShip();
        }, [])
        //getShip()
        
        
        return(
            <>
            <DisplayToScreen name={shipNames}/>
            </>
        )

    }


export default API