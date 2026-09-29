import React from 'react'

function Header({searchText,setSearchText}) {
  return (

    <div className='flex items-center  justify-between bg-[#696969] py-4'>
      <h2 className="text-3xl font-bold text-white" >Notes</h2>
      <input type="text"
       placeholder="search title.."
        value={searchText}
         onChange={(e)=>setSearchText(e.target.value)}
               className="bg-white rounded-lg px-3 py-2 outline-none w-64"  
         />
    </div>
  )
}

export default Header
