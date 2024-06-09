import React from "react";
import PolicyCard from "./PolicyCard";
import Container from "../Container";
function PolicySec() {
	return (
		<Container>
			<div className="flex flex-col sm:flex-row gap-6 justify-around my-24 px sm:px-14">
				<PolicyCard />
				<PolicyCard IconUrl="/Icons/icon-headphone.svg" heading="24/7 Customer Service" para="Freindly 24/7 customer support"/>
				<PolicyCard IconUrl="/Icons/Icon-secure.svg" heading="Money back gurantee" para="We return money within 30 days"/>
				
			</div>
		</Container>
	);
}

export default PolicySec;
