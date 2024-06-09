import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Container, Input, Loading, Logo } from "../components/index";
import { useDispatch } from "react-redux";
import authService from "../Appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const { register, handleSubmit } = useForm();
	const [error, setError] = useState("");
	const [isLoading, setLoading] = useState(false);

	const login = async (data) => {
		setLoading(true)
		setError("");
		try {
			const session = await authService.login(data);
 
			if (session) {
				const userData = await authService.getCurrentUser();
				if(userData){
					dispatch(authLogin(userData));
				}
				navigate("/");
			}
		} catch (error) {
			setLoading(false)
			setError(error.message);	
		}
	};
	
	return (
		<Container>
			<div className="flex items-center justify-center w-full mt-8">
				<div className="hidden sm:block">
					<img src="/login.png" alt="" />
				</div>
				<div className="w-full max-w-lg  sm:p-10 pt-10 p-2 ">
					<h2 className=" text-3xl  font-semibold tracking-wider font-primary">
						Log in to Exclusive
					</h2>
					<p className="my-2  text-black/60 font-semibold font-primary">Enter your details below</p>
					<p className={`text-red-600 sm:mt-4 h-10 text-center ${error ? 'opacity-100' : 'opacity-0'}`}>{error ? error : 'nothing'}</p>
					<form onSubmit={handleSubmit(login)} className="sm:mt-8">
						<div className="space-y-5 ">
							<Input
								placeholder="Enter Your Email"
								type="email"
								className=" "
								{...register("email", {
									required: true,
									validate: {
										matchPatren: (val) =>
											/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
												val
											) || "Email address must be a valid address",
									},
								})}
							/>
							<Input
								placeholder="Password"
								type="password"
								className="mb-3 "
								{...register("password", {
									required: true,
								})}
							/>
							<div className="flex justify-between items-center flex-wrap">
								<Button type="submit" className="w-full" >
									{isLoading ? <Loading /> : 'Log In'}
								</Button>
								
								<p className="mt-2   text-black/60">
									Don't have any account?
									<Link
										to="/signup"
										className="font-medium text-primary ml-2 transition-all duration-200 hover:underline"
									>
										Sign Up
									</Link>
								</p>
							</div>
						</div>
					</form>
				</div>
			</div>
		</Container>
	);
}

export default Login;
