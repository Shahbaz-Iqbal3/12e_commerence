import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { FaListCheck } from "react-icons/fa6";
import { MdShoppingCartCheckout } from "react-icons/md";
import { Button, Container } from '../components';
import orderImage from "/icon-mallbag.svg";

function Thanks() {
  return (
    <Container>
        <div className='mt-24 sm:mt-12 flex flex-col gap-3 sm:gap-12 justify-center items-center h-[calc(100vh-100px)]'>
            <div className='flex sm:gap-4 gap-2 w-full justify-center'>
                <FaListCheck className='text-primary-0 text-3xl'/>
                <span className='w-[20%] h-1 rounded-full self-center bg-red-600'></span>
                <MdShoppingCartCheckout  className='text-primary-0 text-4xl'/>
                <span className='w-[20%] h-1 rounded-full self-center bg-red-600'></span>
                <TbTruckDelivery  className=' text-4xl'/>
            </div>
            <div>
                <h2 className='text-2xl text-center font-semibold font-primary leading-9'>
                   <span className=' text-7xl uppercase text-slate-800 '>Thank You!</span> <br />Your order is <span className='text-blue-600'>On its Way.</span></h2>
            </div>
           <div className='flex flex-col gap-8 items-center'>
           <Button classes='bg-primary-0 text-white flex item-centers gap-2' linkTo='/account/my-orders'>
                <img src={orderImage} alt="icon" className=' invert inline-blocks'/><span>Track Your Order</span>
            </Button>
            <Button classes='border-2 border-slate-600 ' linkTo='/'>
                Go To Shopping
            </Button>
           </div>
        </div>
    </Container>
  )
}

export default Thanks