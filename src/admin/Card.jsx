import React from 'react'

function Card({icon,number, text, classes='bg-slate-700'}) {
  return (
    
    <div className='p-6 bg-slate-800 text-white rounded-xl basis-1/4 grow flex flex-col gap-2 items-start'>
        <div className={`p-3 rounded-full text-2xl ${classes}`}>{icon}</div>
        <div className='text-4xl font-medium  '>{number}</div>
        <div className='text-lg font-primary'>{text}</div>
    </div>
  )
}

export default Card