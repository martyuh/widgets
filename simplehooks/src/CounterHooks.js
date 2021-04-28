import React,{useState} from 'react'
import useToggle from '../src/hooks/useToggle'

const CounterHooks = () => {

    // const [isHappy,setIsHappy] = useState(true)
    // const [isHeartBroken,setIsHeartBroken] = useState(true)

    // const toggleIsHappy = ()=>{
    //     setIsHappy(!isHappy)
    // }
    // const toggleIsHeartBroken = () =>{
    //     setIsHeartBroken(!isHeartBroken)
    // }

    // passed in the piece of state and a function to toggle it from our custom function useToggle. So to flip the boolean you just call the toggle functions
   const [isHappy,toggleIsHappy] = useToggle(true)
   const [isHeartBroken,toggleIsHeartBroken] = useToggle(true)

    return (
        <div>
            <h1 onClick={toggleIsHappy}>{isHappy?':)':':('}</h1>
            <h1 onClick={toggleIsHeartBroken}>{isHeartBroken?'<3':'</3'}</h1>
        </div>
    )
}

export default CounterHooks
