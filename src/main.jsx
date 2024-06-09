import React from "react";
import ReactDOM from "react-dom/client";
import Routes from './Routes.jsx'
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";



const router = createBrowserRouter([...Routes]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>
);
