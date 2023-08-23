"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import {PiHeart } from "react-icons/pi";

export default function BuyNow ({ cartItem }: any) {
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
                <Button onClick={notify} className="mt-4 w-full group text-gray-800 bg-mylogo hover:bg-transparent  hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                            <PiHeart className="mr-2 h-8 w-8 text-mybg group-hover:text-orange-600 duration300" />
                            Buy Now
                        </Button>  
            </div>
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
        </>
    )
}