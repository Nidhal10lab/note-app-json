import React from 'react'

function Createnotes({inputText,setInputText,saveHandler,title,setTitle}){
    const char=100;
    const charLimit=char-inputText.length;
  return (
    <div className='bg-[#DBD7D2] w-56  min-h-56 rounded-2xl p-4 flex flex-col'>
      <input type="text"
      placeholder="title"
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
       className="w-full bg-transparent outline-none text-xl font-bold placeholder:text-gray-500"
      />

        <textarea  
        placeholder='Write your notes...' 
        value={inputText}
        onChange={(e)=>setInputText(e.target.value)} 
        maxLength={100}
        className='outline-none text-lg  bg-transparent resize-none w-full flex-1 resize-none'
          >
        </textarea>
      <div className="flex justify-between items-center mt-auto" >
        <span className="text-sm text-gray-500" >{charLimit}left</span>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded-lg transition duration-300" onClick={saveHandler}
         >save</button>
      </div>
    </div>
  )
}

export default Createnotes
