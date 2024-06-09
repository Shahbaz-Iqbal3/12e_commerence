import React, { useState, useEffect } from "react";
import OrderCard from "../pages/Acount/OrderCard";
import { Loading } from "../components/index";
import { useParams, Link } from "react-router-dom";
import dataBaseServise from "../Appwrite/config";
import { FaArrowLeft } from "react-icons/fa";

function OrderDetail() {
	const { slug } = useParams();
	const [order, setOrder] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
	
		dataBaseServise.getOrder(slug).then((data) => {
			setOrder(data);
			setIsLoading(false);
		});
	}, []);
    
	if (isLoading) return <div className="w-full h-screen flex justify-center items-center flex-col"><Loading size=" w-20 h-20 "/></div>;
	return (
		<div className="flex flex-col gap-4 px-4 mb-6">
			<div className="pt-4 mb-4 flex gap-6">
                <Link to={'/dashboard/orders'} className="p-3 bg-slate-800 text-white inline-block rounded-full"><FaArrowLeft /></Link>
				<h1 className="text-4xl font-semibold">Order Details</h1>
			</div>
			<div className="px-6 w-full">
				<div className="text-3xl mb-3 font-primary">Customer Info</div>
				<div className="flex gap-8 w-full justify-between ">
					<div className="border p-3 rounded-md w-1/2">
						<h2 className="text-xl font-semibold mb-4">Profile</h2>
						<div className="ml-2  flex ">
							<div>
								<div>
									<span className="text-slate-400 text-nowrap ">Name:</span>{" "}
								</div>
								<div>
									<span className="text-slate-400 text-nowrap ">Phone:</span>
								</div>
								<div>
									<span className="text-slate-400 text-nowrap ">Email:</span>{" "}
								</div>
								<div>
									<span className="text-slate-400 text-nowrap ">Id:</span>{" "}
								</div>
							</div>
							<div className="ml-6 overflow-hidden">
								<div className="text-slate-800 font-semibold line-clamp-1">{order.User_name}</div>
								<div className="text-slate-800 font-semibold line-clamp-1">{order.phone}</div>
								<div className="text-slate-800 font-semibold line-clamp-1">{order.email}</div>
								<div className="text-slate-800 font-semibold line-clamp-1">#{order.$id}</div>
							</div>
						</div>
					</div>
					<div className="border p-4 rounded-md w-1/2">
						<h2 className="text-xl font-semibold mb-4">Address</h2>
						<div className="ml-2 flex ">
							<div className=" w-28 space-y-6">
								<div>
									<span className="text-slate-400 text-nowrap">Address 1: </span>{" "}
								</div>
								<div>
									<span className="text-slate-400 text-nowrap">Address 2: </span>{" "}
								</div>
							</div>
							<div className="ml-4">
								<div className="text-slate-900 font-semibold line-clamp-2">{order.address}</div>
								<div className="text-slate-900 font-semibold"> not Available</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="px-6 w-full">
				<div className="text-3xl mb-3 font-primary">Order Info</div>
				<OrderCard orderData={order}/> 
			</div>
		</div>
	);
}

export default OrderDetail;
