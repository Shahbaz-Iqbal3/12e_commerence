import React from "react";

function SubHeading({text="Today's"}) {
	return (
		<div className="flex justify-start items-center gap-2 sm:gap-4">
			<div className="h-9 w-4 bg-primary-0 rounded"></div>
			<div className="font-primary font-medium text-primary-0">
				<span>{text}</span>
			</div>
		</div>
	);
}

export default SubHeading;
