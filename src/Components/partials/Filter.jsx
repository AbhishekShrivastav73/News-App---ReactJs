import React from 'react'

function Filter({title,options,func}) {
  return (
    <div className='dropdown px-4 py-2 rounded-md bg-blue-700 text-white'>
    <select  onChange={func}  className='w-full outline-none bg-transparent' defaultValue={0} name="format" id="format">
        <option className='font-semibold bg-blue-600 text-white' value="0" disabled>
            {title}
        </option>
        {options.map((o,i)=>(
               <option key={i} className='font-semibold bg-blue-500' value={o} >
               {o.toUpperCase()}
           </option>
        ))}
    </select>
</div> 
  )
}

export default Filter