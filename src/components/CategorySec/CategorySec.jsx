import React from "react";
import { SubHeading, Container } from "../index";
import Arrow from "/arrow.svg";
import CategBox from "./CategBox";
import { useRef, useState } from "react";

function CategorySec() {
	const categories = ["Phones", "Computers", "SmartWatch", "Camera", "HeadPhone", "Gaming"];
	const ref = useRef();
	const [count, setCount] = useState(0);
	function translateRight() {
		let w_full = ref.current.scrollWidth;
		let w_screen = ref.current.offsetWidth;
		if (count < (Math.round(w_full / w_screen) - 1) * 100) {
			setCount((prev) => (prev += 100));
		}
	}
	function translateLeft() {
		if (count > 0) {
			setCount((prev) => (prev -= 100));
		}
	}

	return (
		<div>
			<Container>
				<div className="pb-10 border-b mb-5">
					<div className="ml-2"> 
						<SubHeading text="Categories" />
						<div className="flex items-baseline justify-between mt-2 sm:mt-6">
							<div className="flex items-end justify-between w-full md:w-1/2">
								<h1 className="text-3xl sm:text-4xl font-primary font-[600] tracking-wide">
									Browse By Category
								</h1>
							</div>
							<div className="hidden sm:flex gap-4">
								<button
									className="w-10 h-10 bg-slate-100 flex justify-center items-center rounded-full"
									onClick={() => translateLeft()}
								>
									<img src={Arrow} alt={`${Arrow}`} />
								</button>
								<button
									className="w-10 h-10 bg-slate-100 flex justify-center items-center rounded-full"
									onClick={() => translateRight()}
								>
									<img src={Arrow} alt={`${Arrow}`} className=" rotate-180" />
								</button>
							</div>
						</div>
					</div>
					<div
						className="flex  gap-2 sm:gap-3 justify-evenly mt-5 flex-wrap sm:flex-nowrap sm:mt-16 transition-transform duration-1000 ease-in-out overflow-clip"
						ref={ref}
						style={{ transform: `translateX(-${count}%)` }}
					>
						{categories.map((item, i) => (
							<CategBox text={item} key={item} IconUrl={`/Icons/${item}.svg`} />
						))}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default CategorySec;
