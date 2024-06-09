import React, { useState, useEffect } from "react";
import { Container, Input, Button, Loading } from "../components/index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {  LuArrowLeft } from "react-icons/lu";
import { useSelector } from "react-redux";
import appwriteService from "../Appwrite/config";
import appwriteProduct from "../Appwrite/product";


function CheckOut() {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const cartItems = useSelector((state) => state.cart.cart);
	const userData = useSelector((state) => state.auth.userData);
	//const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);
	const [totalAmount, setTotalAmount] = useState(0);
	function randomString(length) {
		var chars = '0123456789ABCDFE'.split('');
		var str = '';
		for (var i = 0; i < length; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	const submit = async (data) => {
		setLoading(true)
		const newData = {
			user_id : userData.$id,
			order_number : randomString(6),
			User_name : data.firstname +" " + data.lastname,
			address  : data.address + " city: " + data.city + " " + data.etcaddress ,
			phone : data.phone,
			email : data.email,
			price : totalAmount,
			payment_type: data.payment,
			order_status: "pending",
			products : [JSON.stringify(cartItems)],
		}
		
		const dbPost = await appwriteService.createOrder({...newData});

		if (dbPost) {
			navigate('/thanks-for-shopping')
		}
	}
	useEffect(() => {
		const price_t = cartItems.map((item) => item.price * item.quantity);
		let price_sum = 0;
		price_t.map((each_p) => (price_sum += each_p));
		setTotalAmount(Math.round(price_sum));
	}, [cartItems]);

	return (
		<Container>
			<div className="flex items-center justify-start gap-3 mt-20 mb-3">
			   <Link to={"/"}>
					<button className="bg-white border-2 border-black text-black rounded-full p-1 text-2xl">
						<LuArrowLeft />
					</button>
				</Link>
				<p className="text-slate-400 font-primary ">
					<Link to={"/products"} className="hover:underline"> Products</Link>
					  /  
					<Link to={"/cart"} className="hover:underline"> Cart </Link>
					/<span className="text-black font-medium hover:underline"> Checkout</span>
				</p>
			</div>
			<form className="flex flex-col sm:flex-row" onSubmit={handleSubmit(submit)} >
				<div className="w-full sm:w-1/2 sm:px-16">
					<h1 className="text-3xl font-semibold">Billing Details</h1>
					<div  className="mt-8">
						<div className="space-y-5 ">
							<Input
								placeholder="First Name*"
								type="text"
								className={errors.firstname && "border border-red-500 "}
								{...register("firstname", {
									required: true,
								})}
							/>
							<Input
								placeholder="Last Name"
								type="text"
								className={errors.lastname && "border border-red-500"}
								{...register("lastname")}
							/>
							<textarea
								placeholder="Street Address*"
								type="text"
								className={`${errors.address && "border border-red-500"} w-full p-3 px-4 rounded-lg bg-slate-200 text-slate-900 outline-none
								focus:bg-gray-300 duration-200 border-b border-gray-200 font-primary`}
								{...register("address", {
									required: true,
								})}
							></textarea>
							<Input
								placeholder="Appartment, Floor, etc (optional)"
								type="text"
								className={errors.etcaddress && "border border-red-500"}
								{...register("etcaddress")}
							/>
							<Input
								placeholder="Town/City"
								type="text"
								className={errors.city && "border border-red-500"}
								{...register("city")}
							/>
							<Input
								placeholder="Phone Number*"
								type="tel"
								className={errors.phone && "border border-red-500"}
								{...register("phone", {
									required: true,
								})}
							/>
							<Input
								placeholder="Email Address*"
								type="email"
								className={errors.email && "border border-red-500"}
								{...register("email", {
									required: true,
								})}
							/>
						</div>
					</div>
				</div>
				<div className="w-full mt-10 sm:mt-0 sm:w-2/5 space-y-4 font-primary">
					<div className=" space-y-4 mb-6">
						{cartItems.map((item) => (
							<div className="flex justify-between items-center border p-2 rounded-lg shadow-lg" key={item.id}>
								<div className="flex items-center gap-5">
									<div className="w-16 h-16">
										<img
											src={appwriteProduct.getFilePreview(item.image)}
											alt={item.title}
											className="w-full h-full object-contain"
										/>
									</div>
									<div className=" text-ellipsis w-32 overflow-hidden text-nowrap">
										{item.title}
									</div>
								</div>
								<div>{item.quantity} x Rs.{item.price}</div>
							</div>
						))}
					</div>
					<div className="py-3 border-b flex justify-between text-md">
						<span>Subtotal: </span>
						<span>Rs.{totalAmount}</span>
					</div>
					<div className="py-3 border-b flex justify-between text-md">
						<span>Shipping: </span>
						<span>free</span>
					</div>
					<div className="py-3 flex justify-between text-md">
						<span>Total: </span>
						<span>Rs.{totalAmount}</span>
					</div>

					<div className="flex gap-2 flex-col mb-0">
						<h2 className="">Payment Method:</h2>
						<ul className="grid w-full gap-6 md:grid-cols-2">
							<li>
								<input
									type="radio"
									id="hosting-small"
									value="COD"
									className="hidden peer"
									name="hoisting"
									checked
									{...register("payment")}
								/>
								<label
									htmlFor="hosting-small"
									className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
								>
									Cash On Delevery
								</label>
							</li>
							<li>
								<input
									type="radio"
									id="hosting-big"
									value="Bank"
									name="hoisting"
									className="hidden peer"
									
									{...register("payment")}
								/>
								<label
									htmlFor="hosting-big"
									className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer  peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 "
								>
									BankTransfer
								</label>
							</li>
							
						</ul>
					</div>
					<button className={`py-3 px-10 h-12 font-primary bg-primary-0 w-full sm:w-auto text-white rounded hover:bg-primary-0
               		 hover:border-primary-0 hover:text-white transition-all hover:scale-[1.01] inline-block`}
               		>
               			{isLoading ? <Loading /> : 'CheckOut'}
               		</button>
				</div>
			</form>
		</Container>
	);
}

export default CheckOut;
