"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import {PiHeart } from "react-icons/pi";
import { FaBasketShopping } from 'react-icons/fa6';

export default function OrderNow ({ cartItem }: any) {
    const notify = () => toast.error('We are actively engaged in the process!', {
        position: "top-left",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    return (
        <>
            <div className='w-full' >
                {/* <button onClick={notify}>Notify!</button> */}
                <Button onClick={notify} className="outline outline-offset-2 outline-2 rounded-3xl text-white group hover:rounded-3xl duration-300 hover:outline-myorange  duration-400">
                            <FaBasketShopping className="mr-2 h-7 w-7 text-white group-hover:text-myorange group-hover:animate-bounce" /><span  className="text-white">Order Now</span> 
                        </Button>
                <ToastContainer
                    position="top-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    )
}