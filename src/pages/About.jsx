import CategBox from "../components/CategorySec/CategBox";
import { Container } from "../components/index";
import React from "react";
import PolicySec from "../components/policySec/PolicySec";
import PolicyCard from "../components/policySec/PolicyCard";

function About() {
	return (
		<Container>
			<div>
				<div className="flex items-center justify-between my-20">
					<p className="text-slate-400 font-primary">
						Home / <span className="text-black font-medium hover:underline">About</span>
					</p>
				</div>
				<div className="flex gap-8 justify-between mb-36">
					<div className="w-2/5">
						<h2 className="mt-20 mb-10 text-5xl font-primary  font-semibold">Our Story</h2>
						<p className="text-xl">
							Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace
							with an active presense in Bangladesh. Supported by wide range of tailored
							marketing, data and service solutions, Exclusive has 10,500 sallers and 300
							brands and serves 3 millioons customers across the region.{" "}
						</p>{" "}
						<br></br>
						<p className="text-xl">
							Exclusive has more than 1 Million products to offer, growing at a very fast.
							Exclusive offers a diverse assotment in categories ranging from consumer.
						</p>
					</div>
					<div className="w-1/2">
						<img src="/images/Side Image.png" alt="asdasd" className="rounded-md" />
					</div>
				</div>
				<div className="flex gap-10 justify-around my-10">
					<PolicyCard 
            classes="border p-6 px-10"
            classes2="invert-0"
            IconUrl="/images/Group.svg"
            heading="10.5k"
            para="Sallers active our site"
          />
					<PolicyCard 
            classes="border p-6 px-10"
            classes2="invert-0"
            IconUrl="/images/Icon-Moneybag.png"
            heading="33k"
            para="Anual gross sales in our site "
          />
					<PolicyCard 
            classes="border p-6 px-10"
            classes2="invert"
            IconUrl="/images/Icon-Sale.png"
            heading="45.5k"
            para="Monthly Product Sale"
          />
					<PolicyCard 
            classes="border p-6 px-10"
            classes2="invert-0"
            IconUrl="/images/Icon-Shopping bag.png"
            heading="25k"
            para="Customer active our site"
          />
					
				</div>
				<div className="flex justify-around">
					<div className="flex flex-col my-20 ">
						<div className="p-1 border rounded-md mb-4">
							<img src="/images/image 46.png" alt="sdasd" />
						</div>
						<h3 className="text-2xl font-semibold">Tom Cruis</h3>
						<p>Founder & Chairman</p>
						<div className="flex items-center gap-2 mt-2">
							<span>
								<img src="/Icon-Twitter.png" alt="sd" />
							</span>
							<span>
								<img src="/Icon-Linkedin.png" alt="sd" />
							</span>
							<span>
								<img src="/Group.png" alt="sd" />
							</span>
						</div>
					</div>
					<div className="flex flex-col my-20 ">
						<div className="p-1 border rounded-md mb-4">
							<img src="/images/image 51.png" alt="sdasd" />
						</div>
						<h3 className="text-2xl font-semibold">Emma Watson</h3>
						<p>Mananging Director</p>
						<div className="flex items-center gap-2 mt-2">
							<span>
								<img src="/Icon-Twitter.png" alt="sd" />
							</span>
							<span>
								<img src="/Icon-Linkedin.png" alt="sd" />
							</span>
							<span>
								<img src="/Group.png" alt="sd" />
							</span>
						</div>
					</div>
					<div className="flex flex-col my-20 ">
						<div className="p-1 border rounded-md mb-4">
							<img src="/images/image 47.png" alt="sdasd" />
						</div>
						<h3 className="text-2xl font-semibold">Will Smith</h3>
						<p>Product Designer</p>
						<div className="flex items-center gap-2 mt-2">
							<span>
								<img src="/Icon-Twitter.png" alt="sd" />
							</span>
							<span>
								<img src="/Icon-Linkedin.png" alt="sd" />
							</span>
							<span>
								<img src="/Group.png" alt="sd" />
							</span>
						</div>
					</div>
				</div>
				<PolicySec />
			</div>
		</Container>
	);
}

export default About;
