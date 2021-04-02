import {useEffect, useState} from 'react'

// if the path that is passed in matches what is in the browser the component that is passed in as a child will be displayed.
const Route = ({path,children}) => {
    // sole reason for this state is to force the component to rerender when the path changes
    const[currentPath,setCurrentPath]=useState(window.location.pathname)

    // useEffect will listen for click event from the Link component, where it listens for the url update event
    useEffect(()=>{

        //this function is created as a callback so that the event listener can be removed with the clean up function
        const onLocationChange = ()=>{
            // when the path changes via the link being clicked and being listened to by the event listener in this component this function runs and the current path is updated
            setCurrentPath(window.location.pathname)
        }

        // event listener for the onclick func in the link component
        window.addEventListener('popstate',onLocationChange)

        //if you want to stop rendering the route component on the screen, you must clean up the event listener.
        return ()=>{
            window.removeEventListener('popstate',onLocationChange) 
        }

    //useEffect should be run one time to listen for the that event listener
    },[])

    // the component is passed in as a child 
    return currentPath === path ? children:null
}

export default Route
