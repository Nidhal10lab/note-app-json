import React from 'react'

function Note({id,title,text,editHandler,deleteHandler}) {
  return (
    <div className="bg-[#DBD7D2] w-56 h-56 rounded-2xl p-4 flex flex-col shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-2" >{title}</h3>
        <div  className="flex-1 break-words text-gray-700 overflow-auto">{text}</div>
        <div  className='flex justify-end gap-2 mt-auto'>
         <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg transition duration-300"onClick={()=>deleteHandler(id)}>delete</button>&nbsp;
             <button  className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-lg transition duration-300"onClick={()=>editHandler(id,title,text)}>Edit</button>
        </div>
      
    </div>
  )
}

export default Note
