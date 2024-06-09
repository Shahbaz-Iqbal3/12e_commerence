import React from 'react'

function PolicyCard({IconUrl='/Icons/icon-delivery.svg', heading='Fast and Free Delivery', 
para='Free delivery for all orders over $140', classes='', classes2=''}) {
  return (
    <div className={`flex flex-col justify-center items-center ${classes}`}>
        <div>
            <div className='flex justify-center items-center h-20 w-20 rounded-full bg-slate-300'>
                <div className='flex justify-center items-center h-16 w-16 rounded-full bg-black'>
                    <img src={IconUrl} alt={IconUrl} className={` ${classes2} invert`}/>
                </div>
            </div>
        </div>
        <div><h1 className='text-2xl mt-4 mb-1 font-[600] font-primary text-center'>{heading.toUpperCase()}</h1></div>
        <div><p className=' font-primary text-center'>{para}</p></div>
    </div>
  )
}

export default PolicyCard