import React from "react";
import SubHeading from "./SubHeading";
import Container from "./Container";
import { Link } from "react-router-dom";
function FeaturedSec() {
	return (
		<Container>
			<div>
				<div>
					<SubHeading text="Featured" />
					<h1 className="text-4xl font-primary font-[600] tracking-wide pt-5">New Arrival</h1>
				</div>
				<div className="mt-8 w-full sm:h-[600px] flex gap-4 flex-col sm:flex-row ">
					<div
						className="w-full sm:w-1/2 h-full flex flex-col  justify-end text-white
                      items-start bg-[url('/pic-image1.png')] bg-cover bg-bottom rounded p-7"
					>
						<h2 className="text-2xl mb-3 font-medium">Play Station 5</h2>
						<p className=" mb-3 text-md">
							Balck and white version of the PS5 coming out on sale
						</p>
						<Link className=" underline text-md underline-offset-4 font-medium">Shop Now</Link>
					</div>
					<div className="w-full sm:w-1/2 h-full flex flex-col gap-4">
						<div
							className="w-full h-1/2 flex flex-col  justify-end text-white
                          items-start bg-[url('/pic-image2.png')] bg-cover bg-bottom rounded p-7 "
						>
							<h2 className="text-2xl mb-3 font-medium">Play Station 5</h2>
							<p className=" mb-3 text-md">
								Balck and white version of the PS5 coming out on sale
							</p>
							<Link className=" underline text-md underline-offset-4 font-medium">
								Shop Now
							</Link>
						</div>
						<div className="flex flex-col sm:flex-row gap-4 h-1/2">
							<div
								className="w-full sm:w-1/2 h-full flex flex-col  justify-end text-white
                              items-start bg-[url('/pic-image3.png')] bg-cover bg-bottom rounded p-7"
							>
								<h2 className="text-2xl mb-3 font-medium">Play Station 5</h2>
								<p className=" mb-3 text-md">
									Balck and white version of the PS5 coming out on sale
								</p>
								<Link className=" underline text-md underline-offset-4 font-medium">
									Shop Now
								</Link>
							</div>
							<div
								className="w-full sm:w-1/2 h-full flex flex-col  justify-end text-white
                              items-start bg-[url('/pic-image4.png')] bg-cover bg-bottom rounded p-7"
							>
								<h2 className="text-2xl mb-3 font-medium">Play Station 5</h2>
								<p className=" mb-3 text-md">
									Balck and white version of the PS5 coming out on sale
								</p>
								<Link className=" underline text-md underline-offset-4 font-medium">
									Shop Now
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Container>
	);
}

export default FeaturedSec;
