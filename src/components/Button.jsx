import React from "react";
import { useNavigate } from "react-router-dom";

function Button({ children, linkTo = "", type = "button" , classes='bg-primary-0 text-white'}) {
	const navigation = useNavigate()
	return (
		<button type={type} className={`py-3 px-10 h-12 font-primary ${classes} rounded hover:bg-primary-0
		 hover:border-primary-0 hover:text-white transition-all hover:scale-[1.01] inline-block`}
		onClick={()=> navigation(linkTo)}>
			{children}
		</button>
	);
}

export default Button;
