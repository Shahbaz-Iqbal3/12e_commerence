import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/authSlice";
import { useEffect, useState } from "react";
import Logo from "../Logo";
import authService from "../../Appwrite/auth";
import { LuHome, LuLayoutGrid, LuUser, LuShoppingCart, LuUserCheck,LuUserPlus,LuUserCog } from "react-icons/lu";
import SearchBox from "../SearchBox";

import heartImage from "/heart.svg";
import userImage from "/User.svg";
import logoutImg from "/Icon-logout.svg";
import orderImage from "/icon-mallbag.svg";

function Header() {
	const [isactive, setIsactive] = useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();

	const authStatus = useSelector((state) => state.auth.status);
	const userdata = useSelector((state) => state.auth.userData);
	const cart = useSelector((state) => state.cart.cart);
	const wishlist = useSelector((state) => state.wishList.wishList);
	const navItems = [
		{
			name: "Home",
			slug: "/",
			isDisplay: true,
		},
		{
			name: "Products",
			slug: "/products",
			isDisplay: true,
		},
		{
			name: "About",
			slug: "/about",
			isDisplay: true,
		},
	];

	function searchHandle() {
		console.log("search");
	}
	const logoutHandler = () => {
		authService.logout().then(() => {
			dispatch(logout());
		});
		navigate("/");
	};
	return (
		<>
			<div className=" border-b border-gray-200 z-20 sm:border-none shadow-md border-t-2 bg-white w-full fixed bottom-0 sm:relative  ">
				{isactive && (
					<div className="bg-black hidden sm:block text-white text-center relative py-2 font-primary font-extralight ">
						<p className="text-sm ">
							Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
							<Link className="underline">ShopNow</Link>{" "}
						</p>
						<div
							className=" absolute top-1/2 -translate-y-1/2 right-4 pt-5 sm:pt-0  sm:right-10 cursor-pointer "
							onClick={() => {
								setIsactive(!isactive);
							}}
						>
							&#x2716;
						</div>
					</div>
				)}

				<div className="container flex justify-between items-center pt-2 sm:py-4 sticky  z-20 bg-white top-2">
					<div className="hidden sm:block">
						<Link to={"/"}>
							<Logo />
						</Link>
					</div>
					<div className="hidden lg:block">
						<ul className="hidden md:flex gap-8">
							{navItems.map((item) =>
								item.isDisplay ? (
									<li key={item.name}>
										<NavLink
											to={item.slug}
											className={({ isActive }) =>
												isActive ? "underline decoration-1 underline-offset-8 " : null
											}
										>
											<span className={`font-primary text-lg`}>{item.name}</span>
										</NavLink>
									</li>
								) : null
							)}
						</ul>
					</div>
					<SearchBox />
					<div className="flex justify-evenly items-center gap-8 w-full sm:w-auto">
						{/* mobile menu */}
						<div className="sm:hidden ">
							<Link to={"/"} className="flex flex-col items-center sm:block">
								<LuHome className="text-2xl " />{" "}
								<span className="sm:hidden text-sm">Home</span>
							</Link>
						</div>
						<div className="sm:hidden">
							<Link to={"/products"} className="flex flex-col items-center sm:block">
								<LuLayoutGrid className="text-2xl" />{" "}
								<span className="sm:hidden text-sm">Products</span>
							</Link>
						</div>
						<div className="relative">
							<Link to={"/cart"} className="flex flex-col items-center sm:block">
								<LuShoppingCart className="text-2xl sm:text-3xl " />{" "}
								<div
									className={`w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] bg-red-600 rounded-full text-[8px] sm:text-[9px]
							text-white flex justify-center items-center p-1 absolute -top-1 sm:-top-2 -right-1 sm:-right-2  ${
								cart.length == 0 ? "hidden" : "block"
							}`}
								>
									{cart.length}
								</div>
								<span className="sm:hidden text-sm">Cart</span>
							</Link>
						</div>
						<div className="relative hidden sm:block">
							<Link to={"/account/wishlist"} className="flex flex-col items-center sm:block">
								<img src={heartImage} alt={`${heartImage}`} className="h-[24px]" />
								<div
									className={`w-[18px] h-[18px] bg-red-600 rounded-full text-[9px] 
							text-white flex justify-center items-center p-1 absolute -top-2 -right-2  ${
								wishlist.length == 0 ? "hidden" : "block"
							}`}
								>
									{wishlist.length}
								</div>
							</Link>
						</div>

						<div className="relative z-20 group">
							<div className="flex items-center flex-col cursor-pointer">
								<LuUser className="text-2xl sm:text-3xl" />
								<span className="sm:hidden text-sm">Account</span>
							</div>

							<div className=" absolute w-[240px] bottom-14 sm:top-12 right-0 invisible group-hover:visible transition-all duration-300">
								<ul className="w-full flex flex-col justify-start items-start rounded p-4 bg-slate-100">
									{authStatus ? (
										<>
											<div className="w-full">
												<li className="flex justify-start items-center gap-3 border p-1 pr-3 rounded mb-2">
													<div className=" cursor-default py-2 pl-2 font-semibold">
														Welcome, {userdata.name}{" "}
													</div>
												</li>
											</div>
											<Link className="w-full" to={"/account/my-account"}>
												<li className="flex justify-start ml-1 items-center gap-3  hover:bg-slate-200 p-2 pr-3 rounded mb-2">
													<div>
														<LuUserCog className="text-2xl" />
													</div>
													<div>Manage My Account </div>
												</li>
											</Link>
											<Link className="w-full" to={"account/my-orders"}>
												<li className="flex justify-start ml-1 items-center gap-3  hover:bg-slate-200 p-2 pr-3 rounded mb-2">
													<div>
														<img src={orderImage} alt="icon" />
													</div>
													<div>My Order</div>
												</li>
											</Link>
											<div className="w-full cursor-pointer" onClick={logoutHandler}>
												<li className="flex justify-start ml-1 items-center gap-3  hover:bg-slate-200 p-2 pr-3 rounded mb-2">
													<div>
														<img src={logoutImg} alt="icon" />
													</div>
													<div>Logout</div>
												</li>
											</div>
										</>
									) : 
										<>
										<Link className="w-full" to={"/signup"}>
												<li className="flex justify-start ml-1 items-center gap-3  hover:bg-slate-200 p-2 pr-3 rounded mb-2">
													<div className="text-3xl">
														<LuUserPlus/>
													</div>
													<div className="text-xl">Sign Up</div>
												</li>
											</Link>
											<Link className="w-full" to={"/login"}>
												<li className="flex justify-start ml-1 items-center gap-3  hover:bg-slate-200 p-2 pr-3 rounded mb-2">
													<div className="text-3xl">
														<LuUserCheck />
													</div>
													<div className="text-xl">Login</div>
												</li>
											</Link>
										</>
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Header;
