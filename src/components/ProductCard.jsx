import React, { useEffect, useState } from "react";
import { RatingStar } from "./index";
import favImg from "/heart.svg";
import favedImg from "/faved.svg";
import appWriteProduct from '../Appwrite/product'
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { addToWishList, removeFromWishList } from "../store/wishListSlice";
import { toast } from 'react-toastify';
import {notifi} from '../store/notify'

import 'react-toastify/dist/ReactToastify.css';

function ProductCard({
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
	}, deleteIcon=favedImg
}) {
	
	const dispatch = useDispatch();
    const favItems =  useSelector((state) => state.wishList.wishList);
	const favIcon = favItems.find(item => item?.$id == product.$id)  ?  deleteIcon: favImg
	
  	function addToCartLocal  ()  {
		const product_q = { ...product };
		product_q.quantity = 1;
		dispatch(addToCart(product_q));
		dispatch(notifi(toast.success("Added to Cart", {
			position: "bottom-left",
		  })))
	}
	



    function addToWishListLocal(){
		const ishave = favItems.find(item => item?.$id == product.$id)
		if(ishave) { 
			dispatch(removeFromWishList(product))
			dispatch(notifi(toast.error("Removed from WishList", {
				position: "bottom-left",
			  })))  ;
		}else{
           dispatch(addToWishList(product))
		   dispatch(notifi(toast.success("Added to WishList", {
			position: "bottom-left",
		  })))  ;
		}
		
    }

	
	return (
		<div className="w-[calc(50%-12px)] sm:w-[270px] flex-shrink-0 flex-grow-0 flex flex-col mb-1 p-1 sm:m-3 hover:shadow shadow-md rounded group ">
			<div className="w-full sm:h-[270px] flex-grow-0 flex-shrink-0 relative">
				<Link to={`/product/${product.$id}`}>
					<img src={appWriteProduct.getFilePreview(product.image)} alt={product.title} className="object-contain aspect-square" />
				</Link>

				<div className="absolute top-1 left-1  bg-primary-0 rounded px-3 text-white py-1 text-sm">
					{100 - (product.disc_price / product.price * 100).toFixed()}%
				</div>
				<div
					className="bg-slate-100 h-8 w-8 flex justify-center 
                       cursor-pointer items-center rounded-full absolute top-1 right-1"
                    onClick={() => addToWishListLocal()}
				>
					<img src={favIcon} 
                         alt={favIcon} className= {`object-contain aspect-square`}
                     />
				</div>
				<div
					className=" absolute font-primary font-medium bg-black text-white flex justify-center 
                items-center bottom-0 w-full h-10 rounded-b cursor-pointer opacity-0 group-hover:opacity-100
                 transition-opacity ease-in duration-200"
					onClick={() => addToCartLocal()}
				>
					<span>Add TO Cart</span>
				</div>
			</div>
			<Link to={`/product/${product.$id}`}>
				<div className="mt-2">
					<ul className="p-1 px-3 flex flex-col gap-2">
						<li className="font-medium font-primary h-[60px] hover:underline  line-clamp-2"
						>{product.title}</li>
						<li className="font-sans">
							<span className="text-[#db4444] mr-4 font-medium">
								Rs.{product.disc_price}
							</span>
							<span className=" text-slate-400 line-through font-normal">
								${product.price}
							</span>
						</li>
						<li className="flex justify-between items-center gap-2 sm:pb-3 flex-col sm:flex-row">
                            <div className="flex justify-center items-center"> 
       							<RatingStar rating={product.rating} />
       							<span className="text-slate-400">({product.no_of_review})</span>
                            </div>
                            <div>
                                <span className={`${product.stoke ? 'text-green-600': 'text-red-600'} font-bold font-primary `}>{product.stoke ? 'Stoke In' : 'Out Of Stoke'}</span>
                            </div>
						</li>
					</ul>
				</div>
			</Link>
			
		</div>
	);
}

export default ProductCard;
