import React from "react";
import { Hero, SalesSection, CategorySec, Container, SearchBox } from "../components/index";
import { Link } from "react-router-dom";
import FeaturedSec from "../components/FeaturedSec";
import PolicySec from "../components/policySec/PolicySec";

function Home() {
	return (
		<main className="">
			
			<Hero />
			<SalesSection />
			<CategorySec />
			<SalesSection
				subHeading="This Mounth"
				heading="Best Selling Products"
				btnText="View All"
				timeCounter={false}
			/>
			<Container>
				<Link>
					<div className="w-full flex">
						<img
							src="/Frame.png"
							alt="image"
							className=" flex-grow-0 flex-shrink-0 object-cover w-full h-full"
						/>
					</div>
				</Link>
			</Container>
			<SalesSection
				subHeading="Our Products"
				heading="Explore our Products"
				btnText="View All Products"
				timeCounter={false}
				
			/>
			<FeaturedSec />
			<PolicySec />
		</main>
	);
}

export default Home;
