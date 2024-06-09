import React, { useEffect, useState } from "react";
import OrderCard from "./OrderCard";
import dataBaseService from "../../Appwrite/config";
import { useSelector } from "react-redux";
import { Query } from "appwrite";


function MyOrder() {
	const [orderData, setOrderData] = useState([]);
	const userdata = useSelector((state) => state.auth.userData);

	useEffect(() => {
		dataBaseService.getOrders([Query.equal("user_id", userdata.$id)]).then((data) => {
			if (data) {
				setOrderData(data.documents);
			}
		});
	}, []);

	return (
		<div className="flex flex-col justify-center  items-start sm:gap-4 gap-2 mt-2 sm:px-8">
			<div className=" space-x-2 flex ">
				<div className="sm:p-2 sm:px-4 p-1 px-2 text-sm bg-slate-800 relative rounded-full text-white border-2 border-slate-800">
					All orders
					<div className={`sm:w-[22px] sm:h-[22px] w-4 h-4 bg-red-600 rounded-full text-[12px] 
							text-white flex justify-center items-center p-1 absolute sm:-top-2 -top-1 -right-2  ${
								orderData.length == 0 ? "hidden" : "block"
							}`}
					>{orderData.length}
					</div>
				</div>
				<div className="sm:p-2 sm:px-4 p-1 px-2 text-sm  bg-slate-200 rounded-full text-black border-2 border-slate-800">
					Cancled
				</div>
			</div>

			<div className="flex w-full flex-col-reverse gap-y-3">
				{orderData?.map((item) => (
					<OrderCard orderData={item} key={item.$id} />
				))}
			</div>
		</div>
	);
}

export default MyOrder;
