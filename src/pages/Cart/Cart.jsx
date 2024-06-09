import React, { useEffect, useState } from "react";
import { Link, matchRoutes, useLocation } from "react-router-dom";
import { Container, Button } from "../../components/index";
import Cartitem from "./Cartitem";
import { LuHome, LuArrowLeft } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import CartTotal from "./CartTotal";
import { resetCart } from "../../store/cartSlice";
import { notifi } from "../../store/notify";
import { toast } from "react-toastify";

function Cart() {
	const CartItems = useSelector((state) => state.cart.cart);
	const [totalAmount, setTotalAmount] = useState(0);
	const dispatch = useDispatch();

	useEffect(() => {
		const price_t = CartItems.map((item) => item.price * item.quantity);
		let price_sum = 0;
		price_t.map((each_p) => (price_sum += each_p));
		setTotalAmount(Math.round(price_sum));
	}, [CartItems]);

	return (
		<>
			<Container>
				<div className="mt-20">
					<div className="flex items-center justify-start gap-6">
						<Link to={"/"}>
							<button className="bg-white border-black border-2 text-black rounded-full p-1 text-2xl">
								<LuArrowLeft />
							</button>
						</Link>
						<p className="text-slate-400 font-primary flex ">
							<span className="flex items-center">
								<LuHome className="-mt-1 mr-1 " /> Home /{" "}
							</span>
							<span className="text-black font-medium ">Cart</span>
						</p>
					</div>
					{CartItems.length ? (
						<div className="mt-5 sm:my-10 flex flex-col justify-start items-start gap-3 min-h-[50vh]">
							<div className="hidden sm:flex justify-around items-center w-full shadow py-4 rounded-md font-medium text-normal sm:text-xl">
								<p className="sm:w-1/3">Product</p>
								<p className="sm:mr-2">Price</p>
								<p className="sm:mr-8">Quantity</p>
								<p>Subtotal</p>
							</div>
							<div className=" w-full flex flex-col gap-4 py-4">
								{CartItems.map((cartItem) => (
									<Cartitem key={cartItem.$id} product={cartItem} />
								))}
							</div>
						</div>
					) : (
						<div className=" min-h-[50vh] flex justify-center items-center font-primary text-2xl text-slate-300 ">Your Cart is Empty</div>	
					)}

					<div className="flex sm:flex-row flex-col justify-between items-center gap-2 sm:gap-0 sm:items-baseline sm:-mt-10  ">
						<div className="hidden sm:block"
							onClick={() => {
								dispatch(resetCart());
								dispatch(
									notifi(
										toast.error("Cart has been Reset", {
											position: "bottom-left",
										})
									)
								);
							}}
						>
							<Button linkTo=""> Delete All Items</Button>
						</div>
						<CartTotal SubTotal={totalAmount} />
					</div>
				</div>
			</Container>
		</>
	);
}

export default Cart;
