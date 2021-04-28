import React,{useState,useEffect} from 'react'

const Clicker = () => {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        // to change the title in the tab from within react
        document.title=`You clicked ${count} times`
    })
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>Click Me {count}</button>
        </div>
    )
}

export default Clicker
