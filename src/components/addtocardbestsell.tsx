// "use client"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { Button } from './ui/button';
// import { useAppDispatch } from '@/app/store/hooks';
// import { addToCart } from '@/app/store/features/cart';
// import {PiShoppingBagFill } from "react-icons/pi";

// export default function AddToCartBestSell({cartItem}:any) {
//     const dispatch = useAppDispatch();
//     const notify = () => toast.success('Product Added Successfuly.', {
//         position: "top-left",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//     });

//     return (
//         <>
//             <div className='w-fit' onClick={()=>dispatch(addToCart(cartItem))}>
//                 {/* <button onClick={notify}>Notify!</button> */}
//                 <Button onClick={notify} className="group bg-white hover:bg-transparent text-mybg hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute right-2 bottom-2">
//                     <PiShoppingBagFill className="mr-2 h-8 w-8 group-hover:text-orange-600 duration300" />
//                     Add to card
//                 </Button>
//             </div>
//             <ToastContainer
//                     position="top-left"
//                     autoClose={3000}
//                     hideProgressBar={false}
//                     newestOnTop={false}
//                     closeOnClick
//                     rtl={false}
//                     pauseOnFocusLoss
//                     draggable
//                     pauseOnHover
//                     theme="light"
//                 />
//         </>
//     )
// }
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { PiShoppingBagFill } from "react-icons/pi"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";

const BestSellAddToCart = ({ cart }: { cart: any; }) => {
    const product = useAppSelector((state) => state.products).find((val)=>val.cart == cart);
    const dispatch = useAppDispatch();
    const [cartItem, setCartItem] = useState(

        {
            id:product?.id,
            title:product?.title,
            image:product?.image[0],
            cart:product?.cart,
            price:product?.price,
            discount:product?.discount,
            category:product?.category,
            description:product?.description,
            topping:product?.topping,
            qty:product?.qty,
        }

    )
    return (
        <div><Popover>
            <PopoverTrigger asChild>
                <Button onClick={() => dispatch(addToCart(cartItem))} className="group bg-white hover:bg-transparent text-mybg hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl absolute right-2 bottom-2">
                    <PiShoppingBagFill className="mr-2 h-8 w-8 group-hover:text-orange-600 duration300" />
                    Add to card
                </Button>
            </PopoverTrigger>
            
        </Popover></div>
    )
}

export default BestSellAddToCart