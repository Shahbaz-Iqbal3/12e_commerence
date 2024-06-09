import React from 'react'
import {Container, Button, ProductCard, SalesSection} from '../../components/index'
import { useSelector, useDispatch } from 'react-redux'
import { addAllToCart } from '../../store/cartSlice'
import { toast } from 'react-toastify'
import { notifi } from '../../store/notify'

function WishList() {
  const WishList = useSelector(state => state.wishList.wishList)
  const dispatch = useDispatch()
  function addALlWishToCart() {
    dispatch(addAllToCart(WishList.map(item=> {
      const item_q = { ...item}
      item_q.quantity = 1
      return item_q
    })))
    dispatch(
      notifi(
        toast.success("All Items Added to cart", {
          position: "bottom-left",
        })
      )
    );
  }
  return (
   
      
        <div className='sm:px-2'>
          <div className='flex justify-start gap-3 items-center mb-6'>
            <div className='font-primary sm:p-2 sm:px-4 p-1 px-2  bg-slate-800 rounded-full text-white relative border border-slate-800 text-sm '>WhishList 
            <div
									className={`sm:w-[22px] sm:h-[22px] w-4 h-4 bg-red-600 rounded-full sm:text-[12px] text-[9px] 
							text-white flex justify-center items-center p-1 absolute sm:-top-2 -top-1 -right-2  ${
								WishList.length == 0 ? "hidden" : "block"
							}`}
								>{WishList.length}</div>
            </div>
            <div>
              <button className='hover:bg-slate-800 hover:text-white sm:p-2 sm:px-4 p-1 px-2 hover:border-slate-800
               border-2 border-slate-800 transition-allpy-3 bg-slate-200 font-primary rounded-full text-sm  '
                onClick={()=>addALlWishToCart()}
               >Move All To Cart</button>
            </div>
          </div>
          <div className='flex flex-wrap justify-evenly'>
            {WishList.length !== 0 ? 
              WishList.map(item => <ProductCard  key={item.id} product={item} deleteIcon={'/Icons/icon-delete.svg'}/>)
            : <div className='text-center w-full text-3xl h-[calc(100vh-300px)] flex justify-center items-center'> Wishlist is Empty Now</div>}
          </div>
        </div>
     
   
    
  )
}

export default WishList