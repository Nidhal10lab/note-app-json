import React,{useState} from 'react'
import Header from './Header'
import  "./App.css";
import Notes from './Notes';
import Createnotes from './Createnotes';



function App() {
  const[searchText,setSearchText]=useState("")
  return (
    <div  className=" min-h-screen bg-[#848482]" >
      <Header  searchText={searchText}
      setSearchText={setSearchText}/>
      <Notes  searchText={searchText}/>
    </div>
  )
}

export default App


