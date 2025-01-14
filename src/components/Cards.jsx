import React from 'react'
import Card from './Card'
 
function Cards({users,handleRemove}) {
  return (
    <div className='w-full  p-4  max-h-96 overflow-auto flex justify-center gap-4 flex-wrap' >
         {users.map((item, index)=>{
               return <Card handleRemove={handleRemove} id={index} user={item} key={index} />
        })}
      
      
    </div>
  )
}

export default Cards
