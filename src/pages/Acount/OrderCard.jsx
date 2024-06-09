import React, { useEffect, useState } from 'react'
import dataBaseService from "../../Appwrite/config";
import appWriteService from '../../Appwrite/product'
import { notifi } from '../../store/notify'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux';


function OrderCard({orderData}) {

	const [order_status, setOrder_status] = useState('')
	const [isloading, setIsloading] = useState(false)
	let order_state = ["On it's Way", 'Canceled', 'Completed']
	let order_color = ['text-blue-600', 'text-red-600', 'text-green-600']
	
	const dispatch = useDispatch()
	useEffect(() => {
	  if(orderData.order_status == 'pending'){
		setOrder_status(0)
	  }else if(orderData.order_status == 'canceled'){
	    setOrder_status(1)
	  }else{setOrder_status(2)}
	  return () => {
		
	  }
	}, [])

	const date = Date(orderData.date).split(' ')

	function handleCancelOrder(Order_id) {
		setIsloading(true)
		dataBaseService.updateOrder(Order_id, {order_status : 'canceled'}).then((data)=>{
			setOrder_status(1)
			setIsloading(false)
			dispatch(notifi(toast.error("Your order has been Canceled", {
				position: "bottom-left",
			  })))
		})
	}
	
  return (
    <div className="w-full border rounded-md">
				<div className=" border-b flex justify-between mx-2 sm:mx-4 py-2 sm:py-4">
					<div>
						<h2 className="sm:text-2xl font-primary text-slate-800 font-semibold">
							Order ID: #{orderData.$id}. <span className={`block sm:inline ${order_color[order_status]}`}>{order_state[order_status]}</span>
						</h2>
						<p className="text-gray-600 font-primary mb-3 text-sm">
 							Placed on: <span className="text-slate-700 font-semibold ">{date[1]} {date[2]} {date[3]} {}</span> |
							<span className="text-red-700 text-sm  underline cursor-pointer inline-block relative sm:left-2" onClick={()=>handleCancelOrder(orderData.$id)}>
								{isloading  ? 'loading...': order_status == 0 ? 'Cancel this order'  : ''}
							</span>
						</p>
					</div>
					<div className=" text-right">
						<h2 className="sm:text-2xl  font-primary text-slate-800 font-semibold">Rs.{orderData.price}</h2>
						<p className="text-gray-600 font-primary text-sm">{JSON.parse(orderData.products).length} items</p>
					</div>
				</div>
				<div className="relative mt-4">
					<table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
						<thead className="text-s py-3 text-gray-700 uppercase hidden sm:table-header-group">
							<tr >
								<th scope="col" className="px-6 py-3">
									Product
								</th>
								<th scope="col" className="px-6 py-3">
									QYT
								</th>

								<th scope="col" className="px-6 py-3">
									Price / item
								</th>
							</tr>
						</thead>
						<tbody>
							{JSON.parse(orderData?.products).map(product => (
								<tr className="even:bg-white odd:bg-gray-50  border-b" key={product.$id}>
								
								<th scope="row" className="sm:px-6 sm:py-4 flex justify-start items-center gap-2">
									<div className='min-w-10 h-10 '>
										<img src={appWriteService.getFilePreview(product.image)} 
										alt={product.title} 
										className="w-full h-full object-contain aspect-square"/>

									</div>
									<span className={" line-clamp-3"}>{product.title}</span>
									
								</th>
								<td className="sm:px-6 px-2 ">{product.quantity}x</td>
								<td className="sm:px-6 py-4">Rs.{product.price}</td>
							</tr>
							))}
							
							
						</tbody>
					</table>
				</div>
			</div>
  )
}

export default OrderCard