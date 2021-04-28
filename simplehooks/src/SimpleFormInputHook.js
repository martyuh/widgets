import React from 'react'
import useInputState from './hooks/useInputState'

const SimpleFormInputHooks = () => {

    const[email,updateEmail,resetEmail]=useInputState('')
    const[password,updatePassword,resetPassword]=useInputState('')

    const resetBoth = () =>{
        resetEmail()
        resetPassword()
    }

    return (
        <div>
            <h1>Custom form hook</h1>
            <h2>Email is...{email} & Password is {password}</h2>
            {/* setEmail function on the custom hook takes in the value from the eventhandler and sets the value/email, which updates the value/email. updateemail calls the function on the custom hook where it resets the state/email */}
            <input type="text" value={email} onChange={updateEmail}/>
            <input type="text" value={password} onChange={updatePassword}/>
            {/* reset both by calling them in a custom method */}
            <button onClick={resetBoth}>Reset Email & Password</button>

        </div>
    )
}

export default SimpleFormInputHooks
