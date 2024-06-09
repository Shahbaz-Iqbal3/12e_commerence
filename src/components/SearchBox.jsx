import React, { useEffect, useState, useRef } from "react";
import { LuSearch } from "react-icons/lu";
import AppwriteService from "../Appwrite/product";
import { Query } from "appwrite";
import { Link, useLocation } from "react-router-dom";

function SearchBox({classes='relative hidden sm:flex w-1/2'}) {
	const [search, setSearch] = useState("");
	const [active, setActive] = useState(false);
	const [product, setProduct] = useState([]);
	const location = useLocation();
	const searchMenu = useRef();

	useEffect(() => {
		setActive(false)
	 	setSearch("")	
	}, [location])
	
	useEffect(() => {  
		const handler = (e) => {
			if(!searchMenu.current.contains(e.target))
			setActive(searchMenu.current.contains(e.target))
		}
		document.addEventListener('click', handler)
	})
	
	useEffect(() => {
		AppwriteService.getProducts([Query.search("title", search)]).then((data) => {
			setProduct(data.documents);
		});
	}, [search]);

	return (
		<div className={` ${classes} rounded bg-gray-200  `} ref={searchMenu}>
			<div className="flex items-center w-full">
				<div className="cursor-pointer pl-2 text-xl" onClick={() => searchHandle()}>
					<LuSearch />
				</div>
				
				<input
					type="text"
					value={search}
					name="search"
					id="search"
					autoComplete="off"
					onChange={(e) => setSearch(e.target.value)}
					onFocus={() => (setActive(true))}
					placeholder="Search"
					className="rounded bg-gray-200 w-full p-2 placeholder:text-sm outline-none"
				/>
			</div>
			
			<div
				className={`absolute top-12 rounded w-full border bg-white shadow-2xl ${
					active ? "block" : "hidden"
				}`}
				
			>
				<ul className="flex flex-col gap-2 py-3 h-[50vh] overflow-y-scroll">
					{true ? ( product?.map((item) => (
						<li className="flex cursor-pointer gap-4 items-center hover:bg-slate-100 px-2 py-1 ">
								<Link to={`/product/${item.$id}`} key={item.$id} className="flex cursor-pointer gap-4 items-center">
								<div className="max-w-20">
									<img
										src={AppwriteService.getFilePreview(item.image)}
										alt={item.title}
										className=" object-contain aspect-square"
									/>
								</div>
								<Link to={`/product/${item.$id}`}>
								<span className=" line-clamp-2 hover:underline">{item.title}</span>
								</Link>
						</Link>
							</li>
					))) : <span className="text-center text-2xl text-slate-400">Search your Desire</span>}
				</ul>
			</div>
		
		</div>
	);
}

export default SearchBox;
