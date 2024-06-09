import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

function CartTotal({SubTotal=100, shipping=0 , total=SubTotal}) {

    const authStatus = useSelector((state) => state.auth.status);
    const navigate = useNavigate();
    const handleClick = () =>{
     
        if (authStatus) {
            navigate('/checkout')
            console.log(authStatus);
        }else{
            navigate('/login')
            console.log(authStatus);
        }
    }
  return (
    <div className='border-slate-600 font-primary p-8 sm:w-1/3 w-full flex flex-col items-center border rounded'>
        <div className='flex flex-col gap-4 mb-3 w-full'>
            <h2 className='text-xl font-[600]'>Order Summery</h2>
            <div className='border-b flex justify-between border-slate-300 py-3 '>
                <span className='font-medium'>SubTotal:</span>
                <span>Rs.{SubTotal}</span>
            </div>
            <div className='border-b flex justify-between border-slate-300 py-3 '>
                <span className='font-medium'>Shipping:</span>
                <span>Rs.{shipping}</span>
            </div>
            <div className=' flex justify-between border-slate-300 py-3 '>
                <span className='font-medium'>Total:</span>
                <span>Rs.{total}</span>
            </div>
        </div>
        <button type='button' className={`py-3 px-10 h-12 font-primary bg-primary-0 text-white rounded hover:bg-primary-0
		 hover:border-primary-0 hover:text-white transition-all hover:scale-[1.01] inline-block`}
		onClick={()=> handleClick()}>
			Check Out
		</button>
    </div>
  )
}

export default CartTotal