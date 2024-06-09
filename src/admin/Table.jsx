import React, { useState } from "react";
import Select from "./Select";

function Table() {
	
	return (
		<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
			<table className="w-full text-sm text-left rtl:text-right text-slate-100 dark:text-slate-100">
				<thead className="text-xs text-white uppercase dark:text-white bg-slate-700">
					<tr>
						<th scope="col" className="px-6 py-3">
							Product name
						</th>
						<th scope="col" className="px-6 py-3">
							Color
						</th>
						<th scope="col" className="px-6 py-3">
							Category
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
					<tr className=" border-b border-slate-700">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-slate-50 whitespace-nowrap dark:text-slate-100"
						>
							Apple MacBook Pro 17"
						</th>
						<td className="px-6 py-4">Silver</td>
						<td className="px-6 py-4">Laptop</td>
						<td className="px-6 py-4">$2999</td>
						<td className="px-6 py-4">
							<Select order_status={'pending'}/> 
						</td>
					</tr>
					<tr className=" border-b border-slate-700">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-slate-50 whitespace-nowrap dark:text-slate-100"
						>
							Microsoft Surface Pro
						</th>
						<td className="px-6 py-4">White</td>
						<td className="px-6 py-4">Laptop PC</td>
						<td className="px-6 py-4">$1999</td>
						<td className="px-6 py-4">
							<Select />
						</td>
					</tr>
					<tr className=" border-b border-slate-700">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-slate-50 whitespace-nowrap dark:text-slate-100"
						>
							Magic Mouse 2
						</th>
						<td className="px-6 py-4">Black</td>
						<td className="px-6 py-4">Accessories</td>
						<td className="px-6 py-4">$99</td>
						<td className="px-6 py-4">
							<Select />
						</td>
					</tr>
					<tr className=" border-b border-slate-700">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-slate-50 whitespace-nowrap dark:text-slate-100"
						>
							Google Pixel Phone
						</th>
						<td className="px-6 py-4">Gray</td>
						<td className="px-6 py-4">Phone</td>
						<td className="px-6 py-4">$799</td>
						<td className="px-6 py-4">
							<Select />
						</td>
					</tr>
					<tr className=" border-slate-40">
						<th
							scope="row"
							className="px-6 py-4 font-medium text-slate-50 whitespace-nowrap dark:text-slate-100"
						>
							Apple Watch 5
						</th>
						<td className="px-6 py-4">Red</td>
						<td className="px-6 py-4">Wearables</td>
						<td className="px-6 py-4">$999</td>
						<td className="px-6 py-4">
							<Select />
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	);
}

export default Table;
