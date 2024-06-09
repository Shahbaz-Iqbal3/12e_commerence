import React, { useEffect, useState } from "react";
import appwriteService from "../Appwrite/product";
import Card from "./Card";
import ProductCardAdmin from "./ProductCardAdmin";
import { LuPackageX, LuPackage, LuSearch } from "react-icons/lu";
import { Query } from "appwrite";
import { Loading } from "../components";

function Products() {

	const [inputValue, setInputValue] = useState("");
	const [totalProducts, setTotalProducts] = useState(0)
	const [stokeOutProducts, setStokeOutProducts] = useState(0)
	const [Products, setProducts] = useState([])
	const [Isloading, setIsloading] = useState(false)
	useEffect(() => {
		setIsloading(true)
		appwriteService.getProducts([Query.limit(12)]).then(data=>{
			setProducts(data.documents)
		})
		appwriteService.getProducts([Query.equal('stoke' , 'true')]).then(data=>{
			
			appwriteService.getProducts([Query.equal('stoke', 'false')]).then(data1 => {
				setTotalProducts(data.total + data1.total)
				setStokeOutProducts(data1.total)
				setIsloading(false)
			})
		})
	  
	}, [])
	if (Isloading) {
		return <div className="w-full h-screen flex justify-center items-center flex-col"><Loading size=" w-20 h-20 "/></div>
	}
	return (
		<div className="flex flex-col gap-4 sm:px-4 px-1">
			<div className="pt-2 sm:pt-8">
				<h1 className="text-4xl font-semibold">All Products</h1>
			</div>
			
			<div className="flex flex-wrap gap-4 w-full">
				<Card icon={<LuPackage />} text={"Total Products"} number={totalProducts}/>
				<Card
					icon={<LuPackageX />}
					text={"Out of Stock"}
					number={stokeOutProducts}
					classes={"bg-red-500"}
				/>
			</div>
			
			<div className="flex item-center justify-center w-full md:w-auto">
				<input
					type="text"
					name="search"
					id="search"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					className="  focus:outline-none bg-slate-200 text-black p-3 w-full text-xl rounded-s-lg sm:w-1/3 md:w-1/2 border-0"
					placeholder="Search "
				/>
				<div className="flex justify-center items-center text-2xl p-3 px-8 bg-slate-800 rounded-e-lg text-white cursor-pointer">
					<LuSearch />
				</div>
			</div>
			<div className="flex flex-wrap justify-center">
				{Products?.map(product => (
					<ProductCardAdmin product={product} key={product.$id}/>
				))}
				
				
			</div>
		</div>
	);
}

export default Products;
