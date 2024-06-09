import {Input} from '../index'
import Logo from "../Logo"
import { Link } from 'react-router-dom'
import './footer.css'
function Footer() {
  return (
   <>
        <div className='p-8 bg-black border-b z-[2121] relative'>
            <div className="lg:container m-auto font-primary flex flex-col sm:flex-row gap-5 sm:gap-0 justify-between text-white">
                <div className='w-full sm:w-1/6  '>
                    <div><Logo color={'white'} /></div>
                    <div><h2 className='text-2xl my-3 '>Subscribe</h2></div>
                    <div><h3>Get 10% off your first order</h3></div>
                    <div><Input type='text' className='w-[100%] mt-2 bg-transparent'  
                                placeholder='Enter Your Email'
                    /></div>
                </div>
                <div className='w-full sm:w-1/6  space-y-5 '>
                    <div><h2 className='text-2xl'>Support</h2></div>
                    <div><Link>111 - Ghulshan Ali Colony, Lahore, Pakistan</Link></div>
                    <div><Link>shahbaziqbal233@gmail.com</Link></div>
                    <div><Link>+92 3234548826</Link></div>
                </div>
                <div className='w-full sm:w-1/6 space-y-5'>
                    <div><h2 className='text-2xl'>Account</h2></div>
                    <div><Link>My Account</Link></div>
                    <div><Link>Login / Register</Link></div>
                    <div><Link>Cart</Link></div>
                    <div><Link>Whishlist</Link></div>
                    <div><Link>Shop</Link></div>
                </div>
                <div className='w-full sm:w-1/6 space-y-5'>
                    <div><h2 className='text-2xl'>Quick Link</h2></div>
                    <div><Link>Privacy Policy</Link></div>
                    <div><Link>Term of Use</Link></div>
                    <div><Link>FAQ</Link></div>
                    <div><Link>Contact</Link></div>
                </div>
                <div className='w-full sm:w-1/6 space-y-5'>
                    <div><h2 className='text-2xl'>Social Link</h2></div>
                    <div><Link> Facebook</Link></div>
                    <div><Link> Linkdin</Link></div>
                    <div><Link> Twiter X</Link></div>
                    <div><Link> Youtube</Link></div>
                   
                </div>
            </div>
        </div>
        <div className="bg-black text-center py-4 text-white z-[2121] relative">
            <p className=" font-primary font-extralight">© Copyright Shahbaz 2024. All right reserved</p>
        </div>
   </>
  )
}

export default Footer