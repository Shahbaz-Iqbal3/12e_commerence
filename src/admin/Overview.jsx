import React from "react";
import Card from "./Card";
import ChartLine from "./CardLineChart";
import Table from "./Table";
import { LuPackage2, LuShoppingCart, LuUsers } from "react-icons/lu";

function Overview() {
	return (
		<>
			<div className="p-4 flex flex-col gap-4">
				<div className="flex flex-wrap gap-4 w-full">
					<Card icon={<LuUsers />} text={"Customers | Today"} number={"765"} />
					<Card icon={<LuShoppingCart />} text={"Orders | Today"} number={"34"} />
					<Card icon={<LuPackage2 />} text={"Total Product"} number={"437"} />
				</div>
				<div className="flex gap-4 flex-col md:flex-row">
					<div className="md:w-1/2">
						<ChartLine />
					</div>
					<div className="md:w-1/2  grow">
						<div className="w-full bg-slate-800 rounded-md p-4">
							<h1 className="font-primary text-white text-xl mb-6">New Orders</h1>
					
							<Table />
						</div>
					</div>
				</div>

				<div className="w-full bg-slate-800 rounded-md p-4">
					<h1 className="font-primary text-white text-xl">New Product</h1>
					<div className="mt-10">
						<Table />
					</div>
				</div>
			</div>
		</>
	);
}

export default Overview;
