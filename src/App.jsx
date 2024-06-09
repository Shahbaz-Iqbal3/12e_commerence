import { Outlet } from "react-router-dom";
import { Header, Footer, Loading, Logo, SearchBox } from "./components/index";
import { useEffect, useState } from "react";
import { addProducts } from "./store/cartSlice";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { login, logout } from "./store/authSlice";
import { ToastContainer, toast } from "react-toastify";


function App() {
	const dispatch = useDispatch();
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		authService
			.getCurrentUser()
			.then((userData) => {
				if (userData) {
					dispatch(login(userData));
				} else {
					dispatch(logout());
				}
			})
			.finally(() => setLoading(false));
		return () => {};
	}, []);
	if (isLoading) {
		return (
			<div className="w-full h-screen flex justify-center items-center flex-col">
				<Loading size=" w-20 h-20 " />
				<div className="relative bottom-10">
					<Logo />{" "}
				</div>
			</div>
		);
	}
	return (
		<>
			<div className=" m-auto  overflow-hidden ">
				<ToastContainer />
				<div className="bg-[#C42A2C] p-2 fixed top-0 z-50 h-14 w-full sm:hidden">
					<SearchBox classes="flex sm:hidden fixed top-2 right-1/2 translate-x-1/2 z-30 w-[calc(100%-20px)]" />
				</div>
				<Header />
				<Outlet />
				<Footer />
			</div>
		</>
	);
}

export default App;
