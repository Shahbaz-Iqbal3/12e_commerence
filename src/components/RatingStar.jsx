import { useState } from "react";
import { FaStar } from "react-icons/fa";

function RatingStar({ nofStar = 5, rating = 4 }) {
	return (
		<>
			<div className="flex gap-2">
				{[...Array(nofStar)].map((_, index) => {
					index++;
					return (
						<FaStar
							key={index}
							className={`  
								${index <= Math.round(rating) ? "fill-[#FFAD33]" : " fill-slate-300"}
							`}
						/>
					);
				})}
			</div>
		</>
	);
}

export default RatingStar;
