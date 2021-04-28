import Reac,{useState} from 'react'

const SimpleFormHooks = () => {
    const[email,setEmail]=useState('')

    return (
        <div>
            <h1>The value is...{email}</h1>
            <input type="text" value={email} onChange={e=>setEmail(e.target.value)}/>
            <button onClick={()=>setEmail('')}>Reset</button>
        </div>
    )
}

export default SimpleFormHooks
