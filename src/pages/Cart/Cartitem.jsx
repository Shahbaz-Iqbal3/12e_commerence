import React,{useState} from 'react'
import {  useDispatch } from 'react-redux'
import appwriteService from '../../Appwrite/product'
import { deleteItem,decreaseQuantity, addToCart } from '../../store/cartSlice'
import { notifi } from '../../store/notify'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'

function Cartitem({
	product = {
		id: 1,
		title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
		price: 109.95,
		description:
			"Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
		category: "men's clothing",
		image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
		rating: {
			rate: 3.9,
			count: 120,
		},
	}
}) {
    
    const dispatch = useDispatch()

    function deleteItemLocal(){
        dispatch(deleteItem(product))
        dispatch(notifi(toast.error("Item removed from Cart", {
			position: "bottom-left",
		  })))
    }
    function increaseQuantityLocal() {
        dispatch(addToCart(product))
    }
    function decreaseQuantityLocal() {
        dispatch(decreaseQuantity(product))
    }

  return (
    <div className="flex justify-start sm:justify-around items-center w-full shadow py-4 relative font-primary rounded-md">
        <Link to={`/product/${product.$id}`} className='w-[77%] sm:w-1/3 flex justify-start items-center sm:gap-4 flex-grow-0 flex-shrink-0'>
            <div className='h-[100px] w-[100px] flex-grow-0 flex-shrink-0 flex justify-center items-center'>
                <img src={appwriteService.getFilePreview(product.image)} alt={product.title} className=' object-contain flex-grow-0 flex-shrink-0 block w-full h-full' />
            </div>
            <div className='w-full font-primary text-black font-normal hover:underline self-start sm:self-auto line-clamp-2'>{product.title}</div>
        </Link>
        <div className=' absolute left-28 bottom-3 sm:static ml-1'>Rs. <span className='font-semibold'>{product.price}</span></div>
        <div className='flex items-center justify-around gap-3 border rounded pl-4 pr-0 w-[80px] absolute bottom-3 right-2 sm:static'>
            <div className='w-1/2'>{product.quantity/10 < 1 ?'0':  null}{product.quantity}</div>
            <div className='flex flex-col w-1/2'>
                <div className='p-2  hover:bg-slate-100 cursor-pointer hover:scale-[1.1]' onClick={()=>increaseQuantityLocal()}>
                    <img src="/Icons/upwards.svg" alt="arrow" />
                </div>
                <div className='p-2 hover:bg-slate-100 cursor-pointer hover:scale-[1.1]' onClick={()=>decreaseQuantityLocal()}> 
                    <img src="/Icons/upwards.svg" alt="arrow"  className='rotate-180'/>
                </div>
            </div>
        </div>
        <div className='w-[80px] sm:w-[100px] text-right absolute right-2 top-[45px] sm:static '>Rs.{product.price * product.quantity}</div>

        <div className=' absolute top-1 right-0 sm:top-1/2 sm:-translate-y-1/2 sm:left-4 text-black p-2 rounded-full hover:bg-slate-100 cursor-pointer w-10' 
        onClick={()=>{deleteItemLocal()}}>
            <img src="/Icons/icon-delete.svg" alt=""  className='w-full'/>
        </div>
    </div>
  )
}

export default Cartitem