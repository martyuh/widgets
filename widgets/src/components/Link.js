import React from 'react'

const Link = ({href,className,children}) => {

    const onClick = (event) =>{
        // if new tab feature is true, all the steps below can be avoid and the link can open open normally in a new window
        if(event.metaKey||event.ctrlKey){
            return
        }
        // prevents fullpage reload
        event.preventDefault()
        //allows you to update url with passed in href path
        window.history.pushState({},'',href)

        //communicates to the route component that the url has changed
        const navEvent = new PopStateEvent('popstate')
        window.dispatchEvent(navEvent)
    }

    return (
        <>
        
        {/* // create onclick click event handler function that will allow in rendering without reloading and also opening new page in tab */}
        <a onClick={onClick} href={href} className={className}>{children}</a>
        </>
    )
}

export default Link
