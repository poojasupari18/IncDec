
import {useReducer} from "react"
import HomePage from "./HomePage";
import { createContext } from "react";
export const DataContext = createContext()

function IncDec({children})
{


  const  initialcount = 0 ;
    const reducer = ( count , action ) =>
    {
         switch(action.type)
         {
             case 'Increment' : ;
             return count + 1 ;

             case 'Decrement' :
             return count - 1 ;

             default :
             return count 

         }
    }
    const [count , dispatch] = useReducer(reducer, initialcount)


 
    
 

    return (

<div id="IncDec-button"> 

<button onClick={()=>dispatch({type : "Increment"})}> Increment</button> <br/>
<button onClick={()=>dispatch({type : "Decrement"})}> Decrement</button>


<DataContext.Provider value = {count} >
{children}
{console.log(count)}
</DataContext.Provider>



</div>
    )
}

export default IncDec