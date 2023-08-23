"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';
import {PiShoppingBagFill } from "react-icons/pi";

export default function SentMessage({cartItem}:any) {
    const dispatch = useAppDispatch();
    const notify = () => toast.success('Sent Message Successfuly.', {
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
            <div className='w-fit' >
                {/* <button onClick={notify}>Notify!</button> */}
                <Button onClick={notify} className="group bg-white hover:bg-transparent text-mybg hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute mb-2 py-2 px-6 w-[370px] h-[50px]">
                    
                    Sent Message
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