
import IncDec from "./IncDec"
import{useContext} from "react"
import {DataContext} from "./IncDec"
function HomePage ({value}){

  
    const state = useContext(DataContext)
    {console.log("state", state)}
   
    

    return (
        <>
        <h2> The Count is {state}</h2>
        </>
    )
}

export default HomePage