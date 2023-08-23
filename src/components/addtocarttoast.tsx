"use client"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { useAppDispatch } from '@/app/store/hooks';
import { addToCart } from '@/app/store/features/cart';
import { PiShoppingBagFill } from "react-icons/pi";

export default function AddToCartTost({ cartItem }: any) {
    console.log("cart---------------------------->", cartItem)
    const dispatch = useAppDispatch();
    const notify = () => toast.success('Product Added Successfuly.', {
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
            <div className='w-fit' onClick={() => dispatch(addToCart(cartItem))}>
                {/* <button onClick={notify}>Notify!</button> */}
                <Button onClick={notify} className="mt-2 group text-gray-800 bg-mylogo hover:bg-transparent  hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                    <PiShoppingBagFill className="mr-2 h-8 w-8 text-mybg group-hover:text-orange-600 duration300" />
                    Add to Cart
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