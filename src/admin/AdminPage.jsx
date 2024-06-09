import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from ".././Appwrite/auth";
import { login, logout } from ".././store/authSlice";
import { NavLink, Outlet } from "react-router-dom";
import { LuAppWindow, LuPackage2, LuPackagePlus, LuShoppingCart } from "react-icons/lu";
import { Logo , Loading} from "../components/index";
import { addProducts } from ".././store/cartSlice";

function AdminPage() {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login(userData));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => setLoading(false));
		return () => {}; 
	}, []);
	if (isLoading) {
		return <div className="w-full h-screen flex justify-center items-center flex-col"><Loading size=" w-20 h-20 "/><div className="relative bottom-10"><Logo/> </div></div>
	}
	return (
		<>
			<div className="flex sm:flex-row flex-col">
				<div className=" md:w-1/5 md:min-w-[230px] min-w-16   bg-slate-800 sm:h-screen sticky sm:top-0 bottom-12">
					<div className=" justify-center items-center my-6 mb-9 p-2 hidden md:flex">
						<Logo color="white" width={10}/>
					</div>
					<div className="text-white md:hidden text-3xl font-bold text-center sm:mt-8">L</div>
					<ul className="flex  sm:flex-col justify-center sm:justify-normal text-white md:p-4 p-2 gap-3 sm:mt-16 md:mt-0">
						<li>
							<NavLink
								to="overview"
								className="p-2 md:pl-5 block text-xl rounded-xl md:text-left text-center aria-[current=page]:bg-white aria-[current=page]:text-slate-900"
							>
								<LuAppWindow className="inline mb-1" /> <span className="text-sm block sm:hidden md:inline-block md:text-lg md:ml-1"> Overveiw</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="products"
								className="p-2 md:pl-5 block text-xl rounded-xl md:text-left text-center aria-[current=page]:bg-white aria-[current=page]:text-slate-900"
							>
								<LuPackage2 className="inline mb-1" /> <span className="text-sm block sm:hidden md:inline-block md:text-lg md:ml-1"> Products</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="addproducts"
								className="p-2 md:pl-5 block text-xl rounded-xl md:text-left text-center aria-[current=page]:bg-white aria-[current=page]:text-slate-900"
							>
								<LuPackagePlus className="inline mb-1" /> <span className="text-sm block sm:hidden md:inline-block md:text-lg md:ml-1"> Add Product</span>
							</NavLink>
						</li>
						<li>
							<NavLink
								to="orders"
								className="p-2 md:pl-5 block text-xl rounded-xl md:text-left text-center aria-[current=page]:bg-white aria-[current=page]:text-slate-900"
							>
								<LuShoppingCart className="inline mb-1" /> <span className="text-sm block sm:hidden md:inline-block md:text-lg md:ml-1"> Orders</span>
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="w-full overflow-x-auto">
					<Outlet />
				</div>
			</div>
		</>
	);
}

export default AdminPage;
