import React, {useState,useEffect, useRef} from 'react'

const Dropdown = ({options,selected,onSelectedChange,label}) => {

    //toggle for dropdown menu
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(()=>{

        const onBodyClick = (event)=>{
            // after rendering you can make a reference to the div by using using the current property by using ref.current
            // ref.current.contain sees if the element clicked was a child of the parent and above all else in the dropdown component.
            //warning. if component is set to null ref.current will be set to null as well. to prevent that, turn off eventlistener by using a cleanup function
            if(ref.current && ref.current.contains(event.target)){
                // if it does nothing will be done and this event listener will return nothing
                return;
            }
            // otherwise it closes the dropdown by setting the state to false
            setOpen(false)
        }

        // assigning an event listener to the body
        // any manually entered eventlistener is called first, then the react onclick listeners are called afterwards in the order with which they bubble up to the parent
        document.body.addEventListener('click', onBodyClick)

        //clean up function runs the next time useEffect is rendered
        // removes the eventlistener with the onbodyclick function to prevent ref.current being assigned null
        //this will also be invoked if the dropdown component is about to be removed or unmounted
        return ()=>{
            document.body.removeEventListener('click',onBodyClick)
        }

    },[])

    // color options passed in rendered into a list
    const renderedOptions = options.map((option)=>{
        // to prevent a menu item from showing if it is selected. setting it to null will leave the option out of the list
        if(option.value===selected.value){
            return null
        }

       return (
       <div 
        key={option.value} 
        className='item'
        // replaces previous options object with the one that is clicked
        onClick={()=>onSelectedChange(option)}
        >
            {option.label}
        </div>
        )
    })
    

    return (
        // assign a ref to the most parent element to determine if an item is clicked on
        <div ref={ref} className='ui form'>
            <div className="field">
                <label className='label'>{label}</label>
                <div onClick = {()=>setOpen(!open)} 
                className={`ui selection dropdown ${open?'visible active':''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open?'visible transition':''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
