import  React , { useId } from "react";

const Input = React.forwardRef(function Input(
	{ type ="button", className = "", ...props },
	ref
) {
  const id = useId()
	return (
		
			<input
				type={type}
				className={`p-3 px-4 rounded-lg bg-slate-200 text-slate-900 outline-none
                     focus:bg-gray-300 duration-200 border-b border-gray-200 w-full font-primary
                     ${className}`}
				ref={ref}
       
				{...props}
				id={id}
			/>
	
	);
});

export default Input;
