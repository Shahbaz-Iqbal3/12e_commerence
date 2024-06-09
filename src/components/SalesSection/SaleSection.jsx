import React, { useState, useRef, useEffect } from "react";
import Container from "../Container";
import SubHeading from "../SubHeading";
import ProductCard from "../ProductCard";
import Arrow from "/arrow.svg";
import TimeCounter from "./TimeCounter";
import Button from "../Button";
import appwriteProduct from '../../Appwrite/product'
import { Query } from "appwrite";

function SaleSection({subHeading="Today's",heading="Flash Sales", btnText="View All Products", timeCounter=true,}) {
	const [products, setProducts] = useState([])
    const [count , setCount] = useState(0)
    const ref = useRef()
	
	useEffect(() => {
	  appwriteProduct.getProducts([Query.limit(15)]).then(data => {
		setProducts(data.documents)
	  })
	}, [])
	

    function translateRight () {
        let w_full = ref.current.scrollWidth
        let w_screen = ref.current.offsetWidth 
        if (count < (Math.round(w_full/w_screen)-1)*100) {
            setCount(prev => prev+=100 )
        }
    }
    function translateLeft () {  
        if (count > 0) {  
            setCount(prev => prev-=100 )
        }
    }
	return (
		<>
			<Container>
				<div className=" overflow-x-clip border-b pb-5" >
					<div className="flex sm:block flex-col items-center justify-center ml-2 -mt-4">
						<div className=" self-start"><SubHeading text={subHeading} /></div>
						<div className="flex items-baseline justify-between relative">
 							<div className="flex flex-col sm:flex-row items-center  sm:items-end w-full sm:w-[calc(90%-20px)] ">
								<h1 className="text-4xl font-primary font-[600] tracking-wide sm:pt-5 sm:mr-5">{heading}</h1>
								{timeCounter && <TimeCounter deadline="2024-06-31T23:59:59" />}
							</div>
							<div className="sm:flex gap-4 hidden">
								<button className="w-10 h-10 bg-slate-100 flex justify-center items-center rounded-full"
                                onClick={()=>translateLeft()}>
									<img src={Arrow} alt={`${Arrow}`} />
								</button>
								<button className="w-10 h-10 bg-slate-100 flex justify-center items-center rounded-full"
                                onClick={()=>translateRight()}>
									<img src={Arrow} alt={`${Arrow}`} className=" rotate-180" />
								</button>
							</div>
						</div>
					</div>
                    <div  ref={ref} className={`flex flex-wrap sm:flex-nowrap justify-evenly gap-2 w-full mt-2 sm:mt-10  transition-transform duration-1000 ease-in-out`}
                     style={{transform: `translateX(-${count}%)`}} >
						
                        {products?.map(item => <ProductCard  key={item.$id} product={item}/> )}
                    </div>
                  
                    <div className="hidden sm:flex justify-center mt-10 items-center w-full"><Button>{btnText}</Button></div>
				</div>
			</Container>
		</>
	);
}

export default SaleSection;
