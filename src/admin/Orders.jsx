import React, { useEffect, useState } from "react";
import Card from "./Card";
import Select from './Select'
import { LuPackageX, LuPackage } from "react-icons/lu";
import dataBaseServise from '../Appwrite/config'
import { Query } from "appwrite";
import { Link, Outlet, useParams } from "react-router-dom";



function Orders() {

	const { slug } = useParams()

	const [orderData, setOrderData] = useState([])
	useEffect(() => {
	  dataBaseServise.getOrders([Query.limit(10)]).then(data => {
		setOrderData(data.documents)
	  })

	}, [])
	const date = Date(orderData.date).split(' ')

	const pendingOrders = orderData.filter(order => order.order_status == 'pending')
	const completeOrders = orderData.filter(order => order.order_status == 'completed')

	if(!slug) return (
		<>
			<div className="flex flex-col gap-4 px-4">
				<div className="pt-4">
					<h1 className="text-4xl font-semibold">All Products</h1>
				</div>
				<div>
					<div className="flex flex-wrap gap-4 w-full">
						<Card icon={<LuPackage />} text={"Total Orders"} number={orderData.length} />
						<Card
							icon={<LuPackageX />}
							text={"Pending"}
							number={pendingOrders.length}
						
						/>
						<Card
							icon={<LuPackageX />}
							text={"Delevered"}
							number={completeOrders.length}
							
						/>
						
					</div>
				</div>

				<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
							<tr>
								
								<th scope="col" className="px-6 py-3">
									Customer Name
								</th>
								<th scope="col" className="px-6 py-3">
									Order id
								</th>
								<th scope="col" className="px-6 py-3">
									items
								</th>
								<th scope="col" className="px-6 py-3">
									Category
								</th>
								<th scope="col" className="px-6 py-3">
									date
								</th>
								<th scope="col" className="px-6 py-3">
									Price
								</th>
								<th scope="col" className="px-6 py-3">
									Action
								</th>
							</tr>
						</thead>
						<tbody>
							{orderData.map(order => 
								 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={order.$id}>
								
								<th
									scope="row"
									className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
								>
									<Link to={`/dashboard/orders/${order.$id}`}>{order.User_name}</Link>
								</th>
								<td className="px-6 py-4">{order.$id}</td>
								<td className="px-6 py-4">{JSON.parse(order.products).length}</td>
								<td className="px-6 py-4">{order.payment_type}</td>
								<td className="px-6 py-4">{date[2]} {date[1]} </td>
								<td className="px-6 py-4">{order.price}</td>
								<td className="px-6 py-4">
									<Select order_status={order.order_status} order_id={order.$id} />
								</td>
							</tr>)}
						</tbody>
					</table>
				</div>
				
			</div>
		</>
	);
	if(slug) return (
		<div>
			<Outlet/>
		</div>
	)
}

export default Orders;
