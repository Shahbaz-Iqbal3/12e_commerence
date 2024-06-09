import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Loading } from "../components/index";
import { LuPackagePlus, LuX } from "react-icons/lu";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useState } from "react";
import appwriteService from "../Appwrite/product";
import { useNavigate } from "react-router-dom";

function AddProduct( {product , text='Add New', imageUrl} ) {
	
	const {
		register,
		handleSubmit,
		reset,
		resetField,
		formState: { errors, isSubmitSuccessful },
	} = useForm({
		defaultValues: {
			title: product?.title || "",
			category: product?.category || "",
			description: product?.description || "",
			disc_price: product?.disc_price || "",
			image: imageUrl || "",
			no_of_review: product?.no_of_review || "",
			price: product?.price || "",
			rating: product?.rating || "",
			stoke: product?.stoke || "true",
		},
	});

	useEffect(() => {
		if (isSubmitSuccessful) {
			reset();
			setPreview("");
		}
		if(product){
			setPreview(product?.image ? appwriteService.getFilePreview(product?.image) : preview)
		}
	}, [isSubmitSuccessful]);

	const [loading, setLoading] = useState(false);
	const [preview, setPreview] = useState("");
	const navigate = useNavigate();
	let image;

	const onSelectFile = (e) => {
		image = e?.target.files[0];
		if (image) {
			const ImageUrl = URL.createObjectURL(image);
			setPreview(ImageUrl);
		}
	};

	function randomString(length) {
		var chars = "0123456789".split("");
		var str = "";
		for (var i = 0; i < length; i++) {
			str += chars[Math.floor(Math.random() * chars.length)];
		}
		return str;
	}

	async function handleDelete() {
		const del = await appwriteService.deleteProduct(product.$id)
		if(del){
			navigate('/dashboard/addproducts')
		}
	}

	const submit = async (data) => {
		if (product) {
			
			const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(product.image);
            }

            const dbPost = await appwriteService.updateProduct(product.$id, {
                ...data,
                image: file ? file.$id : undefined,
            });
			if(dbPost){
				
				navigate('/dashboard/products')
			}
		} else {
			setLoading(true);
			const file = await appwriteService.uploadFile(data.image[0]);

			if (file) {
				const fileId = file.$id;
				data.image = fileId;

				const dbPost = await appwriteService.createProduct({
					...data,
					product_id: randomString(9),
				});
				setLoading(false);
				if (dbPost) {
				}
			}
		}
	};
	return (
		<>
			<div className="px-4 pt-6">
				<div className="text-3xl font-primary font-semibold inline-block">
					<span className=" inline-block">
						{text} Product <LuPackagePlus />
					</span>
				</div>
			</div>
			<form className="px-4" onSubmit={handleSubmit(submit)}>
				{(errors.image ||
					errors.title ||
					errors.description ||
					errors.category ||
					errors.rating ||
					errors.no_of_review ||
					errors.price ||
					errors.disc_price ||
					errors.stoke) && (
					<span className="text-red-500 absolute left-1/2 -translate-x-1/2">
						Something Went wrong. Please check again 
					</span>
				)}
				<div className=" md:flex-row flex flex-col-reverse ">
					<div className="md:w-2/3">
						<div className="mt-8">
							<div className="space-y-5 ">
								<Input
									placeholder="Product Title*"
									type="text"
									className={errors.title && "border border-red-500"}
									{...register("title", {
										required: true,
									})}
								/>
								<textarea
									placeholder="Product Discription*"
									rows={9}
									type="textaera"
									className={`bg-slate-200 focus:bg-gray-300 outline-none rounded-lg p-3 px-4 w-full font-primary
									${errors.description && "border-red-500 border"}`}
									{...register("description", {
										required: true,
									})}
								></textarea>

								<Input
									placeholder="Category*"
									type="text"
									className={errors.category && "border border-red-500"}
									{...register("category", {
										required: true,
									})}
								/>
								<div className="flex justify-center gap-4">
									<Input
										placeholder="Rating (1-5)*"
										type="number"
										className={errors.rating && "border border-red-500"}
										{...register("rating", {
											required: true,
										})}
									/>
									<Input
										placeholder="No of Reviews*"
										type="number"
										className={errors.no_of_review && "border border-red-500"}
										{...register("no_of_review", {
											required: true,
										})}
									/>
								</div>
								<div className="flex justify-center gap-4">
									<Input
										placeholder="Price*"
										type="number"
										className={`${errors.price && "border border-red-500"} w-1/2 `}
										{...register("price", {
											required: true,
										})}
									/>
									<Input
										placeholder="Dicount Price*"
										type="number"
										className={`${errors.disc_price && "border border-red-500"} w-1/2 `}
										{...register("disc_price", {
											required: true,
										})}
									/>
								</div>
								<ul className="flex  gap-6 ">
									<li>
										<input
											type="radio"
											id="hosting-small"
											name="stoke"
											value="true"
											className="hidden peer"
											{...register("stoke")}
										/>
										<label
											htmlFor="hosting-small"
											className="inline-flex items-center justify-center font-semibold w-full p-3 text-gray-500 bg-white border border-gray-200
										 rounded-lg cursor-pointer  peer-checked:border-green-600 peer-checked:text-green-600 hover:text-gray-600 hover:bg-gray-100 "
										>
											In Stoke
										</label>
									</li>
									<li>
										<input
											type="radio"
											id="hosting-big"
											name="stoke"
											value="false"
											className="hidden peer"
											{...register("stoke")}
										/>
										<label
											htmlFor="hosting-big"
											className="inline-flex items-center justify-center font-semibold w-full p-3 text-gray-500 bg-white border border-gray-200
										 rounded-lg cursor-pointer  peer-checked:border-red-600 peer-checked:text-red-600 hover:text-gray-600 hover:bg-gray-100 "
										>
											Out of Stoke
										</label>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="md:w-1/3 p-4 pt-8">
						<div className="flex items-center justify-center w-full flex-col relative rounded-lg">
							<div className={`${preview ? " opacity-100" : " hidden"} ${errors.image ? "border border-red-500" : "border-gray-300"} rounded-lg`}>
								<div
									onClick={() => setPreview("")}
									className="text-2xl bg-slate-300 rounded-full p-2 w-10 h-10 absolute top-2 right-2 
								cursor-pointer hover:bg-slate-500 hover:text-white"
								>
									{" "}
									<LuX />
								</div>
								<img src={preview} alt={preview} className=" rounded-lg" />
							</div>

							<label
								htmlFor="dropzone-file"
								className={` ${
									preview ? " opacity-0 absolute -z-10" : ""
								} flex flex-col items-center justify-center w-full h-64 border-2
							  border-dashed rounded-lg cursor-pointer bg-gray-5 dark:hover:bg-bray-800 dark:bg-gray-700
							  hover:bg-gray-100 ${errors.image ? "border border-red-500" : "border-gray-300"} `}
							>
								<div className="flex flex-col items-center justify-center pt-5 pb-6">
									<svg
										className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 20 16"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
										/>
									</svg>
									<p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
										<span className="font-semibold">Click to upload*</span>{" "}
									</p>
									<p className="text-xs text-gray-500 dark:text-gray-400">
										SVG, PNG, JPG or GIF (MAX. 800x400px)
									</p>
								</div>
								<input
									id="dropzone-file"
									type="file"
									name="image"
									accept="image/png, image/jpg, image/jpeg, image/gif"
									className=" opacity-0 absolute w-20"
									{...register("image", { required: !product })}
									onChange={(e) => onSelectFile(e)}
								/>
							</label>
						</div>
					</div>
				</div>
				<div className="my-8 flex gap-5 flex-wrap">
					<button
						type="submit"
						className={`py-3 px-10 h-12 w-full md:w-1/2 font-primary bg-primary-0 text-white rounded hover:bg-primary-0
		 hover:border-primary-0 hover:text-white transition-all hover:scale-[1.01] inline-block`}
					>
						{loading ? <Loading size="w-6 h-6" /> : `${text} Product`}
					</button>
					{product && <button
						type="button"
						className={`py-3 px-10 h-12 w-1/2 md:w-1/3 font-primary border-2 border-red-600 bg-red-600 text-white rounded hover:bg-red-700 group
		 hover:border-red-700  transition-all hover:scale-[1.01] inline-block text-md`}
		 onClick={()=>handleDelete()}
					>
 						{loading ? <Loading size="w-6 h-6" /> : <MdOutlineDeleteOutline  className="text-2xl inline-block text-white mr-4  mb-1"/> }{!loading && 'Delete Product'}
					</button>}
				</div>
			</form>
		</>
	);
}

export default AddProduct;
