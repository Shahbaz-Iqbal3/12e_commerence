import {
	About,
	Acount,
	Cart,
	CheckOut,
	Error,
	Home,
	MyOrder,
	ProductPage,
	SignIn,
	SignUp,
	Thanks,
	WishList,
} from "./pages/index.js";
import {AdminPage, Products ,AddProduct ,Orders, Overview, OrderDetail} from "./admin/index.js";
import App from "./App.jsx";
import Myaccount from "./pages/Acount/Myaccount.jsx";
import EditProduct from "./admin/EditProduct.jsx";

 const Routes =  [
	
	{
		path: "/",
		// errorElement: <Error />,
		element: <App />,
		children: [
			{
				path: "/dashboard",
				element: <AdminPage />,
				children: [
					{
						path: "products",
						element: <Products />
					},
					{
						path: 'orders',
						element: <Orders />,
						children: [{
							path: ":slug",
							element: <OrderDetail />
						}]
					},
					{
						path: 'addproducts',
						element: <AddProduct />
					},
					{
						path: 'editproduct/:slug',
						element: <EditProduct />
					},
					{
						path: 'overview',
						element: <Overview />
					},
				]
			},
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/cart",
				element: <Cart />,
			},
			{
				path: "/product/:slug",
				element: <ProductPage />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/login",
				element: <SignIn />,
			},
			{
				path: "/signup",
				element: <SignUp />,
			},
			{
				path: "/account",
				element: <Acount />,
				children: [
					{
						path: "my-orders",
						element: <MyOrder />,
					},
					{
						path: "my-account",
						element: <Myaccount />,
					},
					{
						path: "wishlist",
						element: <WishList />,
					},
				]
			},
			{
				path: "/thanks-for-shopping",
				element: <Thanks />,	
			},
			{
				path: "/checkout",
				element: <CheckOut />,
			},
			{
				path: "/*",
				element: <Error />,
			},
		],
	},
]
export default Routes