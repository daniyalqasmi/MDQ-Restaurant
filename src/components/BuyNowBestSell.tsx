"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { PiHeart } from "react-icons/pi";
import { ImHeart } from 'react-icons/im';

export default function BuyNowBestSell({ cartItem }: any) {
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
                <Button onClick={notify} className="group bg-white hover:bg-transparent text-mybg hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute bottom-2">
                    <ImHeart className="mr-2 h-8 w-8 group-hover:text-orange-600 duration300" />
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