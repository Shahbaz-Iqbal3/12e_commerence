import React from "react";
import Camera from "/Icons/Camera.svg";
import { Link } from "react-router-dom";
function CategBox({ IconUrl = Camera, text = "Camera"  ,classes='' , classes2=''}) {
	return (
		<Link className="w-[calc(50%-10px)] block">
			<div
				className="flex flex-col justify-center items-center gap-0  border h-40 w-full rounded
                  hover:bg-primary-0 hover:text-white group transition-colors "
			>
				<div>
					<img src={IconUrl} alt={`${IconUrl}`} className={` group-hover:invert ${classes2}`} />
				</div>
				<div>
					<span className={classes}>{text}</span>
				</div>
			</div>
		</Link>
	);
}

export default CategBox;
