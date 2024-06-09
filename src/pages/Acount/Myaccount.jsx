import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addAllToCart } from "../../store/cartSlice";

function Myaccount() {
	const userData = useSelector((state) => state.auth.userData);
	const WishList = useSelector((state) => state.wishList.wishList);
	const dispatch = useDispatch();
	function addALlWishToCart() {
		dispatch(
			addAllToCart(
				WishList.map((item) => {
					const item_q = { ...item };
					item_q.quantity = 1;
					return item_q;
				})
			)
		);
	}
	return (
		<div className="sm:px-12 w-full">
			<div className="text-4xl sm:mb-10 mb-5">Welcome, {userData.name}</div>
			<div className="flex sm:gap-8 gap-3 w-full justify-between flex-col sm:flex-row ">
				<div className="border sm:p-6 p-2 rounded-md sm:w-1/2 w-full">
					<h2 className="text-xl font-semibold mb-4">My Profile</h2>
					<div className="ml-2  flex ">
						<div>
							<div>
								<span className="text-slate-400">user Name:</span>{" "}
							</div>
							<div>
								<span className="text-slate-400">Email:</span>{" "}
							</div>
							<div>
								<span className="text-slate-400">User Id:</span>{" "}
							</div>
							<div>
								<span className="text-slate-400">Phone:</span>
							</div>
						</div>
						<div className="sm:ml-20 ml-2">
							<div> {userData.name}</div>
							<div> {userData.email}</div>
							<div> {userData.$id}</div>
							<div> {userData.phone}</div>
						</div>
					</div>
				</div>
				<div className="border sm:p-6 p-2 rounded-md sm:w-1/2 w-full">
					<h2 className="text-xl font-semibold mb-4">My Address</h2>
					<div className="ml-2 flex ">
						<div className=" sm:w-28 w-36 space-y-6">
							<div>
								<span className="text-slate-400">Address 1: </span>{" "}
							</div>
							<div>
								<span className="text-slate-400">Address 2: </span>{" "}
							</div>
						</div>
						<div className="sm:ml-16">
							<div> Gulshan Ali Colony New Airport Road Lahore, Pakistan</div>
							<div> not Available</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Myaccount;
