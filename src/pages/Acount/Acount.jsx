import React from "react";
import { Container } from "../../components/index";
import { NavLink, Outlet,useLocation } from "react-router-dom";
import { LuAppWindow, LuPackage2, LuPackagePlus, LuShoppingCart } from "react-icons/lu";

function Acount() {
	const location = useLocation()
	return (
		<Container>
			<div className="flex items-start justify-between sm:my-4 my-1 sm:mb-9 ml-2 sm:ml-5	 flex-col mt-16 sm:mt-4">
				<p className="text-slate-400 font-primary hidden sm:block">
					Home / <span className=" text-black font-medium hover:underline cursor-pointer ">{(location.pathname).split("/")[2].toUpperCase().replace('-', ' ')}</span>
				</p>
				<h1 className="sm:text-3xl text-xl font-bold font-primary mt-2 text-slate-900">{(location.pathname).split("/")[2].toUpperCase().replace('-', ' ')}</h1>
			</div>
			<div className="w-full flex gap-2 flex-col sm:flex-row">
				<div className="sm:w-1/6 w-full shadow sm:shadow-none pb-1">
					<div className="hidden sm:flex justify-center mb-6 text-2xl font-semibold">Quick Asses</div>
					<ul className="flex flex-row sm:flex-col text-white sm:gap-2 gap-1 w-full justify-evenly sm:justify-normal">
						<li className="w-full">
							<NavLink	
								to="/account/my-account"
								end
								className={({ isActive}) =>
									(isActive ? "bg-slate-800 text-white " : "").concat("text-black p-1  px-2 sm:p-3 border border-slate-500 w-full inline-block rounded")
								  }
							>
								<LuPackage2 className="inline mb-1 sm:mr-2 mr-1" /> <span>Account</span>
							</NavLink>
						</li>
						<li className="w-full">
							<NavLink
								to="/account/my-orders"
								end
								className={({ isActive}) =>
									(isActive ? "bg-slate-800 text-white" : "").concat("text-black p-1 px-2 sm:p-3 border border-slate-500 w-full inline-block rounded")
								  }
							>
								<LuAppWindow className="inline mb-1 sm:mr-2 mr-1" /> <span>Orders</span>
							</NavLink>
						</li>
						<li className="w-full">
							<NavLink
								to="/account/wishlist"
								end
								className={({ isActive}) =>
									(isActive ? "bg-slate-800 text-white" : "").concat("text-black p-1 px-2 sm:p-3 border border-slate-500 w-full inline-block rounded")
								  }
							>
								<LuPackagePlus className="inline mb-1 sm:mr-2 mr-1" /> <span>Wishlist</span>
							</NavLink>
						</li>
						
					</ul>
				</div>
				<div className="sm:w-10/12 w-full ">
					<Outlet />
				</div>
			</div>
			
		</Container>
	);
}

export default Acount;
