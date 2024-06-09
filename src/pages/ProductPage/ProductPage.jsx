import React, { useEffect, useState } from "react";
import { Container, Loading, ProductCard, SalesSection } from "../../components/index";
import appwriteService from '../../Appwrite/product'
import { Link, useParams } from "react-router-dom";
import ProductDetail from "./ProductDetail";

function ProductPage() {
    const {slug} = useParams()
    const [product, setProduct] = useState('')
	const [loading, setLoading] = useState(true)
    useEffect(() => {
      appwriteService.getProduct(slug).then(data => {
		setProduct(data)
		setLoading(false)
	  })
    }, [slug])
    if (loading) {
		return <div className="h-screen w-full flex justify-center items-center"><Loading size="h-20 w-20"/></div>
	}
	return (
		<div className="mt-20">
			<Container>
				<div>
					<div className="flex items-center justify-between sm:mb-20 mb-5">
						<p className="text-slate-400 font-primary line-clamp-1">
							Products / {product.category} / <Link to={`/product/${product.$id}`} className="text-black font-medium hover:underline" >{product.title}</Link> 
						</p>
					</div>
					<div>
						<ProductDetail productItem={product}/>
					</div>	
						
				</div>
			</Container>
			<div className="mt-2s">
				<SalesSection 
				   timeCounter={false}
				   subHeading="Realted Items"
				   heading=""

				/>	
			</div>
		</div>
	);
}

export default ProductPage;
