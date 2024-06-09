import React, { useState , useEffect } from "react";
import { Button, RatingStar } from "../../components";
import { useDispatch,useSelector } from "react-redux";
import { removeFromWishList ,addToWishList } from "../../store/wishListSlice";
import { addToCart,decreaseQuantity } from "../../store/cartSlice";
import { useNavigate } from "react-router-dom";
import appWriteService from '../../Appwrite/product'
import { toast } from "react-toastify";
import { notifi } from "../../store/notify";


function ProductDetail({ productItem, favIcon='/heart.svg' }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [quantity, setQuantity] = useState(1)
  const [SeeMore, setSeeMore] = useState(false)
  const favItems =  useSelector((state) => state.wishList.wishList);
  const favedIcon = favItems.find(item => item?.$id == productItem.$id)  ?  '/faved.svg' : favIcon
  const product_q = { ...productItem };
  
  function addToWishListLocal(){
		const ishave = favItems.find(item => item?.$id == productItem.$id)
		ishave ? dispatch(removeFromWishList(productItem)) :
           dispatch(addToWishList(productItem));
		
  }
  function handleBuyNow(){
	product_q.quantity = quantity;
	dispatch(addToCart(product_q));
	dispatch(
		notifi(
			toast.success("This product added to cart", {
				position: "bottom-left",
			})
		)
	);
  }
 


	return (
		<div className="flex sm:flex-row flex-col min-h-[540px] gap-4">
			<div className="md:flex flex-col gap-2 h-full justify-between hidden">
				<div className="w-32 h-32 border p-1 rounded  cursor-pointer ">
					<img
						src={appWriteService.getFilePreview(productItem.image)}
						alt={productItem.title}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="w-32 h-32 border p-1 rounded   cursor-pointer">
					<img
						src={appWriteService.getFilePreview(productItem.image)}
						alt={productItem.title}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="w-32 h-32 border p-1 rounded   cursor-pointer">
					<img
						src={appWriteService.getFilePreview(productItem.image)}
						alt={productItem.title}
						className="w-full h-full object-contain"
					/>
				</div>
				<div className="w-32 h-32 border p-1 rounded  cursor-pointer ">
					<img
						src={appWriteService.getFilePreview(productItem.image)}
						alt={productItem.title}
						className="w-full h-full object-contain"
					/>
				</div>
			</div>
			<div className="w-full  sm:w-2/5 h-full border cursor-pointer p-2 rounded">
				<img
					src={appWriteService.getFilePreview(productItem.image)}
					alt={productItem.title}
					className="w-full h-full object-contain aspect-square"
				/>
			</div>
			<div className="sm:ml-10 flex flex-col gap-2 sm:w-1/2 w-full">
				<div className="sm:text-3xl text-xl font-[600] font-primary">{productItem.title}</div>
				<div className=" text-xl flex gap-3 sm:items-center items-start sm:flex-row flex-col">
					<RatingStar rating={productItem.rating} />
					<div className="text-lg text-slate-400 ">
						({productItem.no_of_review} Reviews) &nbsp; | &nbsp;{" "}
						<span className={`${productItem.stoke ? 'text-green-600': 'text-red-600'} font-medium`}>In Stock</span>
					</div>
				</div>
				<div className="text-4xl">Rs.{productItem.disc_price} <span className="text-2xl text-slate-600 line-through">Rs.{productItem.price}</span></div>
				<div className="sm:pb-6 border-b">
					<p className={ ` ${!SeeMore ? " line-clamp-3": ''}`}>{productItem.description} </p>
					<span className="hover:underline cursor-pointer font-semibold inline-block"
						onClick={()=> setSeeMore(!SeeMore)}
					> {SeeMore ? "see less" : "see more"} </span>
				</div>
				<div className="flex gap-6 items-center " >
					<span className="text-2xl font-primary">Colors:</span>
					<div className="flex gap-2">
            <input type="radio" name="color" id="blue" className="hidden peer/blue" disabled/>
            <label htmlFor="blue" className="peer-checked/blue:border-slate-600 cursor-pointer
             border-2 border-white  bg-blue-500 w-6 h-6 rounded-full block"></label>
            <input type="radio" name="color" id="red" className="hidden  peer/red" disabled/>
            <label htmlFor="red" className=" peer-checked/red:border-slate-600 cursor-pointer
             border-2 border-white  bg-red-400 w-6 h-6 rounded-full block"></label>
					</div>
				</div>
				<div className="flex gap-6 items-center">
					<span className="text-2xl font-primary">Size:</span>
					<div className="flex gap-2 font-primary tracking-widest">
            <input type="radio" name="size" id="xs" className="hidden peer/xs" disabled/>
            <label htmlFor="xs" className="peer-checked/xs:bg-primary-0 cursor-pointer peer-checked/xs:border-primary-0 peer-checked/xs:text-white
             flex justify-center items-center border-2  w-10 h-10 rounded-md ">XS</label>
            <input type="radio" name="size" id="s" className="hidden  peer/s" disabled/>
            <label htmlFor="s" className=" peer-checked/s:bg-primary-0 cursor-pointer peer-checked/s:border-primary-0 peer-checked/s:text-white 
            border-2 w-10 h-10 rounded-md flex justify-center items-center">S</label>
            <input type="radio" name="size" id="m" className="hidden  peer/m"  disabled/>
            <label htmlFor="m" className=" peer-checked/m:bg-primary-0 cursor-pointer peer-checked/m:border-primary-0 peer-checked/m:text-white 
            border-2 w-10 h-10 rounded-md flex justify-center items-center">M</label>
            <input type="radio" name="size" id="l" className="hidden  peer/l" disabled/>
            <label htmlFor="l" className=" peer-checked/l:bg-primary-0 cursor-pointer peer-checked/l:border-primary-0 peer-checked/l:text-white 
            border-2 w-10 h-10 rounded-md flex justify-center items-center">L</label>
            <input type="radio" name="size" id="xl" className="hidden  peer/xl" disabled/>
            <label htmlFor="xl" className=" peer-checked/xl:bg-primary-0 cursor-pointer peer-checked/xl:border-primary-0 peer-checked/xl:text-white 
            border-2 w-10 h-10 rounded-md flex justify-center items-center">XL</label>
					</div>
				</div>
        <div className="flex items-center justify-between md:gap-6 gap-2 w-[calc(100%-10px)] sm:w-auto fixed bottom-12 z-50 bg-white py-2 sm:static flex-row-reverse sm:flex-row">
            <div className='hidden sm:flex items-center justify-between  w-[150px] h-12 md:flex-grow-0 md:flex-shrink-0 '>
                
              <div className='h-full w-10 flex justify-center items-center hover:border-primary-0 group hover:bg-primary-0
              cursor-pointer border-2 rounded-s-md ' onClick={()=>setQuantity(prev => quantity == 1 ? quantity : prev-1)}> 
                <img src="/Icons/upwards.svg" alt="arrow"  className='rotate-180 group-hover:invert'/>
              </div>
              <div className='w-1/2 h-full border-y-2 flex justify-center items-center font-semibold'>{quantity }</div>
              <div className='h-full w-10 flex justify-center items-center hover:border-primary-0 group hover:bg-primary-0 
              cursor-pointer  border-2 rounded-e-md ' onClick={()=>setQuantity(prev => prev+1)}>
                <img src="/Icons/upwards.svg" alt="arrow" className=" group-hover:invert"/>
              </div>
            </div>
			<div onClick={()=>handleBuyNow()} className="w-full ">
           	 	<Button  classes="py-2 bg-primary-0 text-white whitespace-nowrap w-full" linkTo="">Buy Now</Button>
			</div>
            <div className="h-12 w-32 min-w-12 border-2 flex justify-center items-center rounded-md p-3 cursor-pointer " 
            onClick={()=>addToWishListLocal()}>
              <img src={favedIcon} alt={favedIcon} className="w-full h-full" />
            </div>
        </div>
			</div>
		</div>
	);
}

export default ProductDetail;
