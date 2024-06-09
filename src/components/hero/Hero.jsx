import { Link } from "react-router-dom"
import image1 from '/images/image1.jpg'
import image2 from '/images/image2.jpg'
import { useState } from "react"
import React from "react"
import {Container} from "../index"

function Hero() {
    const [slideCount, setSlideCount] = useState(0)
    const imageUrls = [image1,image2,image1,image2,image1]
    const timeoutRef = React.useRef(null);
    function nextSlide(){
        setSlideCount(slideCount < imageUrls.length-1 ? slideCount+1 : 0)
    }
    function prevSlide(){
        setSlideCount(slideCount > 0 ? slideCount-1 : imageUrls.length)
    }
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    React.useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout(
          () =>
            setSlideCount((prevIndex) =>
              prevIndex === imageUrls.length - 1 ? 0 : prevIndex + 1
            ),
          3000
        );
    
        return () => {
            resetTimeout()
        };
      }, [slideCount]);
   
  return (
   <>
   
        <div className="md:container mb-20">
            <div className='flex '>
                <div className=' border-e-2 p-8 pl-0 min-w-60 hidden md:block'>
                    <ul className="font-primary font-medium gap-4 flex flex-col">
                        <Link><span>Woman's Fashion</span><span className="ml-10">{'>'}</span></Link>
                        <Link><span>Men's Fashion </span><span className="ml-16">{'>'}</span></Link>
                        <Link><li>Electronics</li></Link>
                        <Link><li>Home & Lifestyle</li></Link>
                        <Link><li>Medicine</li></Link>
                        <Link><li>Sports & Outdoor</li></Link>
                        <Link><li>Baby's & Toys</li></Link>
                        <Link><li>Home & Lifestyle</li></Link>
                        
                    </ul>
                </div>
                <div className='flex top-12 sm:top-0 relative'>
                    <div className="flex overflow-hidden w-full h-full">
                    {
                        imageUrls.map((img) => (
                            <div key={img + Math.random()} 
                                style={{ transform: `translate3d(${slideCount * -100}%, 0, 0)`}}
                                className="flex-grow-0 flex-shrink-0 object-cover w-full h-full block">
                                <img src={img}  alt={img} 
                                className="flex-grow-0 flex-shrink-0 object-cover w-full h-full block "
                                />
                            </div>
                        ))
                    }
                    </div>
                    <div className=" absolute bottom-1 sm:bottom-2 right-1/2 translate-x-1/2">
                        {imageUrls.map((_,index) =>(
                            <button onClick={()=>setSlideCount(index)} key={index} 
                            className={`h-1 w-1 sm:h-3 sm:w-3 rounded-full mr-2 
                            ${ index==slideCount ? 'bg-slate-100' : 'bg-slate-400'  }`} ></button>                                              

                        ))}
                    </div>
                </div>
            </div>
        </div>
   </>
  )
}

export default Hero