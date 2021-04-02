import React, {useState,useEffect} from 'react'
import axios from 'axios'

const Convert = ({language,text}) => {
    const [translated, setTranslated] =useState('')
    const [debouncedText, setDebouncedText] = useState(text);

    //determining if debounce will be sent to useEffect below
    useEffect(()=>{
        // timerwill start when text is changed if nothing is entered after 1 second debouncedtext will be updated with the new text. The useEffect below will run when it detects that the setdebouncedtext dependency has changed.
        const timerId = setTimeout(()=>{
            setDebouncedText(text)
        },1000)
        // clean up function returned so that if useEffect is triggered again the clean up function will run first and the timer will be reset.
        return ()=>{clearTimeout(timerId)}
        // dependency change will trigger useEffect. the timer will run to determine if debouncedtext will be set if text is updated before the timer expires useeffect will run again and the cleanup function will run clearing at the timer. 
    },[text])

    useEffect(()=>{
        //async request to google api
        const doTranslation = async()=>{
                    // google api parameters are sent as a query and therefore will not be sent in the body of the request and so will need to be sent with a third argument
        //destructure data out of the {data}=response.data
        const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',{},{
            params:{
                q:debouncedText,
                target: language.value,
                key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
            }
        })
        setTranslated(data.data.translations[0].translatedText)
        }
        // invoke when first mounted or when the dependencies change
        doTranslation();

    // every time new language is selected or a new word is entered useEffect will fire
    //this useeffect will update when debouncedtext is set from useEffect above
    },[language,debouncedText])

    return (
        <div>
        <h1 className='ui header'>{translated}</h1>   
        </div>
    )
}

export default Convert
