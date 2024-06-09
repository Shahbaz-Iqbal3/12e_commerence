import React, { useEffect, useState } from "react";
import { RatingStar } from "../components/index";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import appwriteService from '../Appwrite/product'

import '../App.css'

function ProductCardAdmin({product, deleteIcon='/Icons/icon-delete.svg'}) {
	const navigate = useNavigate()

	return (
		<div className="w-[calc(50%-10px)] sm:w-[270px] flex-shrink-0 flex-grow-1 flex flex-col m-1 sm:m-3 hover:shadow shadow-md rounded group ">
			<div className="w-full sm:h-[270px] flex-grow-0 flex-shrink-0 relative">
				<Link to={`/product/${product.$id}`}>
					<img src={appwriteService.getFilePreview(product.image)} alt={product.title} className="object-contain aspect-square" />
				</Link>

				
				<div
					className="bg-slate-100 h-8 w-8 flex justify-center 
                       cursor-pointer items-center rounded-full absolute top-1 right-1 "
                       title="Delete this Item"
				>
					<img src={deleteIcon} 
                         alt={deleteIcon} className= {`object-contain aspect-square`}
                     />
				</div>
				<div
					className=" absolute font-primary font-medium bg-black text-white flex justify-center 
                items-center bottom-0 w-full h-10 rounded-b cursor-pointer opacity-0 group-hover:opacity-100
                 transition-opacity ease-in duration-200 text-sm sm:text-base"
					onClick={()=> navigate(`/dashboard/editproduct/${product.$id}`)}
				>
					<span>Update </span>
				</div>
			</div>
			<Link to={`/product/${product.$id}`}>
				<div className="mt-2">
					<ul className="p-1 px-3 flex flex-col gap-1 sm:gap-2">
						<li className="font-medium font-primary hover:underline h-[80px] line-clamp-2 text-sm sm:text-base"
						>{product.title}</li>
						<li className="font-sans">
							<span className="text-[#db4444] mr-4 font-medium">
								Rs.{Math.round(product.disc_price)}
							</span>
							<span className=" text-slate-400 line-through font-normal">
								Rs.{Math.round(product.price )}
							</span>
						</li>
						<li className="flex flex-col sm:flex-row justify-between items-center gap-1 sm:gap-2 sm:pb-3">
                            <div className="flex justify-center items-center"> 
       							<RatingStar rating={product.rating} />
       							<span className="text-slate-400">({product.no_of_review})</span>
                            </div>
                            <div>
                                <span className={`${product.stoke == 'true' ? 'text-green-600': 'text-red-600'} font-bold font-primary `}>{product.stoke =='true'? 'Stoke In' : 'Out Of Stoke'}</span>
                            </div>
						</li>
					</ul>
				</div>
			</Link>
		</div>
	);
}

export default ProductCardAdmin;
