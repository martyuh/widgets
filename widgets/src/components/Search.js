import React,{useState, useEffect} from 'react'
import axios from 'axios'
const Search = () => {

    //search term
    const[term,setTerm]=useState('Programming');
    //debounced term is updated when user enters a term that passes the timeout interval
    //debounced means to setup a timer to change something and to cancel it before it goes through
    const[debouncedTerm,setDebouncedTerm]=useState(term);
    //data returned from server
    const[results,setResults]=useState([]);

    useEffect(()=>{
        const timerId =setTimeout(()=>{
            // if term is not updated within the alloted time setdebouncedterm will be updated. This will trigger the useEffect function below where a search will proceed.
            setDebouncedTerm(term)
        })
        //returns cleanup function to reset timer for updating debouncedterm
        return ()=> clearTimeout(timerId)
    },[term])

    //this will run initially sending an immediate search, it will then run when the debouncedterm is updated via the useeffect above
    useEffect(()=>{
       // how to make an async api call in useEffect
       const search = async () =>{
        // destructured from response.data
        const {data} = await axios.get('https://en.wikipedia.org/w/api.php',{
            // options for parameters
            params:{
                action: 'query',
                list:'search',
                origin: '*',
                format: 'json',
                srsearch: debouncedTerm
            }
        })
        setResults(data.query.search);
    } 
    search()
    },[debouncedTerm])

    // useEffect(()=>{
 
    //     // to determine if it's the first time that useEffect is run so that an immediate search is allowed to run without setTimeout check if there is a term present and if results.length equals 0
    //     if(term&&!results.length){
    //         search();
    //     }
    //     else{
    //     // set timer for search
    //     const timeoutId = setTimeout(()=>{
    //         // makes sure term is defined before search is called
    //         if(term){
    //             search();
    //         }
    //         },500)
    
    //         // function is returned to useEffect on initial run and every subsequent rerender the previously returned function will run first. Afterwards the function passed to useEffect will run.  That is how the clearTimeout function will be executed.
    //         return ()=>{
    //             clearTimeout(timeoutId)
    //         }
    //     }
    // //if no array, useEffect runs on the first and every rerender, with an empty array it only runs on first render, with array and variable it runs every time it is updated
    // },[term])

    const renderedResults = results.map((result)=>{
        return <div key={result.pageid} className='item'>
        <div className="right floated content">
             <a  
             className="ui button"
             href={`https://en.wikipedia.org?curid=${result.pageid}`}
             >Go</a>
        </div>
            <div className="content">
                <div className="header">{result.title}</div>
                {/* utilizing jsx to render out string that is passed with html */}
                <span dangerouslySetInnerHTML = {{__html:result.snippet}}></span>
            </div>
        </div>
    })

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    value={term} 
                    onChange={e=>setTerm(e.target.value)}
                    className='input'/>
                </div>
            </div>
            <div className="ui celled list"> {renderedResults}</div>
        </div>
    )
}

export default Search
