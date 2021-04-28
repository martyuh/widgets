import React,{useState,useEffect} from 'react'
import axios from 'axios'

const SwMovies = () => {

    const [number,setNumber] = useState(1)
    const [movie,setMovie] = useState({})

    useEffect(()=>{
        
        const getData = async ()=>{
            await axios.get(`https://swapi.dev/api/films/${number}/`)
            .then((response)=>setMovie(response.data))
            .catch(e=>
                {
                setMovie({...movie,title:'n/a',opening_crawl:'n/a'})
                return e.message
                })
        }   
            getData()
    },[number])

    return (
        <div>
        <h1>Pick a movie</h1>
        <h4>You chose {movie.title}</h4>
        <p>{movie.opening_crawl}</p>
        {/* must set value and update value as if a regular input */}
            <select value={number} onChange={e=>setNumber(e.target.value)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>

            </select>
        </div>
    )
}

export default SwMovies
