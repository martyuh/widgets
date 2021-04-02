import Accordion from "./components/Accordion"
import Dropdown from "./components/Dropdown"
import {useState} from 'react'
import Translate from "./components/Translate"
import Search from "./components/Search"
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Route from './components/Route'
import Header from "./components/Header"


const items = [
  {
      title:'What is react?',
      content:'react is a front end JS framework'

  },
  {
      title:'why use react?',
      content: 'react is a favorite library amongst engineers'
  },
  {
      title:'how do you use react?',
      content: 'you use react by creating components'
  }
]

const options = [
{
  label: 'The color red',
  value: 'red'
},
{
  label: 'The color green',
  value: 'green'
},
{
  label: 'Shade of blue',
  value: 'blue'
}
]

// const showAccordian = () =>{
//   if(window.location.pathname==='/'){
//     return <Accordion items={items}/>
//   }
// }

// const showList = ()=>{
//   if(window.location.pathname==='/list'){
//     return <Search/>
//   }
// }

// const showDropdown =()=>{
//   if(window.location.pathname==='/dropdown'){
//     <Dropdown/>
//   }
// }

// const showTranslate = ()=>{
//   if(window.location.pathname==='/translate'){
//     return <Translate/>
//   }
// }
 
const App = () => {
// object in options
const [selected,setSelected] = useState(options[0])
const [showDropdown,setShowDropdown] = useState(true)

  return (
    // <Router>
    <div className="App">
    {/* <Switch>*/}
    <Header/>
    {/* the component is passed as a child prop to the route component */}
    <Route exact path='/'><Accordion items={items}/></Route>
    <Route path='/list'><Search/> </Route>
    <Route path='/dropdown'> 
      {/* pass down the state and the ability to set the state in the child component */}
   <button onClick={()=>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
  {/* if showdropdown is true show component otherwise set as null */}
    {showDropdown ?
     <Dropdown 
      label='Select a color'
      selected={selected} 
      onSelectedChange={setSelected} 
      options={options}
      // warning. if you remove component from the dom, the refs, or more specifically the ref.current gets set to null because we no longer have an element to refer to
   />:null
   }
    </Route> 
    <Route path='/translate'><Translate/></Route>
 
 
 
  {/* //  </Switch> */}
    </div>
    // </Router>
  );
}

export default App;
 