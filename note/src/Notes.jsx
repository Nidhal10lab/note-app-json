import React, { useEffect, useState } from 'react'
import Createnotes from './Createnotes'
// import {v4 as uuid} from 'uuid'
import Note from './Note'
import axios from "axios"

function Notes({searchText}) {
    const[title,setTitle]=useState("")
    const[inputText,setInputText]=useState("")
    const[notes,setNotes]=useState([])   //to save notes
    const[editToggle,setEditToggle]=useState(null)

    const editHandler=(id,title,text)=>{
setEditToggle(id)
setInputText(text)
setTitle(title)
    }
    const saveHandler=()=>{
        if(inputText.trim()===""){
            alert("please enter a title or note")
            return;
        }
        // if(editToggle !==null){
        //     setNotes(notes.map((note)=>(
        //         note.id===editToggle?
        //         {...note,
        //             title:title,
        //             text:inputText}
        //         :note
        //     )))}

        if(editToggle!==null){
            axios.put(`http://localhost:3000/notes/${editToggle}`,{
                title:title,
                text:inputText
            })
            .then((res)=>{
                setNotes(notes.map((note)=>note.id===editToggle?res.data:note))
                setTitle("")
                setInputText("")
                setEditToggle(null)
            })
            .catch((error)=>{
                console.log(error)
            })


        }
         else{
        //        setNotes((prevNotes)=>[
        //     ...prevNotes,{
        //         id:uuid(),
        //         title:title,
        //         text:inputText
        //     }
        // ])
        const newNote={title,text:inputText};
        axios.post("http://localhost:3000/notes",newNote)
          .then((res)=>{
            setNotes([...notes,res.data]);
            setTitle("")
            setInputText("")
            setEditToggle(null)
          })
        .catch((error)=>{
            console.log(error)
        })
        }
    }
//     const deleteHandler=(id)=>{
// const newNotes=notes.filter(n=>n.id!==id)
// setNotes(newNotes)
//     }
const deleteHandler=(id)=>{
    axios.delete(`http://localhost:3000/notes/${id}`)
    .then(()=>{
        setNotes(notes.filter((note)=>note.id!==id));
    })
    .catch((error)=>{
        console.log(error)
    })
}
//     useEffect(() => {
//   try {
//     const data = JSON.parse(localStorage.getItem("Notes") || "[]");
//     setNotes(data);
//   } catch (error) {
//     console.error("Invalid localStorage data:", error);
//     setNotes([]);
//   }
// }, []);
//     useEffect(()=>{
//     localStorage.setItem("Notes",JSON.stringify(notes))
//     },[notes])
    const getNotes=()=>{
        axios.get("http://localhost:3000/notes")
        .then((res)=>{
            setNotes(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
     }
    
     useEffect(()=>{
        getNotes()
     },[])
     console.log(notes)
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6'>
        {editToggle===null?
         <Createnotes
         title={title}
         setTitle={setTitle}
          inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}/>:
        <></>
    }
        {
        notes
        .filter((note)=>note.title.toLowerCase().includes(searchText.toLowerCase()))
        .map((note)=>(
            editToggle===note.id?
                    <Createnotes 
                    key={note.id}
                    setTitle={setTitle}
                    title={title}
                    inputText={inputText}
        setInputText={setInputText}
        saveHandler={saveHandler}/>
        :
            <Note
            key={note.id}
            id={note.id}
            title={note.title}
            text={note.text}
            editHandler={editHandler}
            deleteHandler={deleteHandler}>

            </Note>
            
        ))
   
    }
    </div>
  )
}

export default Notes
