"use client"

import { Button } from "@/components/ui/button";
import { PiHeart, PiShoppingBagFill } from "react-icons/pi";
import { FiPlus, FiMinus } from "react-icons/fi";
import Buycardcomponent from "@/components/buycardcomponents";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useState } from "react";
import { addToCart } from "@/app/store/features/cart";
import BuyNow from "@/components/buynow";
import AddToCartTost from "@/components/addtocarttoast";


export default function BuyCardPage({ params }: { params: { buycard: string } }) {
    const product = useAppSelector((state) => state.products);
    const cart = product.filter((val) => val.cart == params.buycard);
   
    const dispatch = useAppDispatch();
    const [cartItem, setCartItem] = useState(

        {
            id: cart[0].id,
            title: cart[0].title,
            image: cart[0].image[0],
            cart: cart[0].cart,
            price: cart[0].price,
            discount: cart[0].discount,
            category: cart[0].category,
            description: cart[0].description,
            topping: cart[0].topping,
            qty: cart[0].qty,
        }

    )
    
    return (
        <div>
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    {/* image */}
                    <div className="flex items-center w-{60} h-{60}"><Buycardcomponent image={cart[0].image} /></div>
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        {/* category */}
                        <h2 className="scroll-m-20 text-sm font-semibold text-white tracking-widest uppercase">
                            {cart[0].category}
                        </h2>
                        {/* title */}
                        <h1 className="text-mylogo scroll-m-20 text-2xl font-semibold tracking-tight mb-1 mt-2">
                            {cart[0].title}
                        </h1>
                        {/* stars/rating */}
                        <div className="rating rating-sm mt-2">
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-mylogo" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-mylogo" checked />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-mylogo" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-mylogo" />
                            <input type="radio" name="rating-6" className="mask mask-star-2 bg-mylogo" />
                        </div>
                        {/* description */}
                        <p className="leading-relaxed text-yellow-200 scroll-m-20 text-base font-normal tracking-tight mt-2">
                            {cart[0].description}
                        </p>
                        {/* topping */}
                        <div className="mt-6 flex item-center justify-between ">
                            <div className="flex  items-center ">
                                <span className="mr-3 text-mylogo scroll-m-20 text-base font-semibold tracking-tight gap-6">Extra</span>
                                <div className="form-control w-full max-w-xs  ">
                                    {/*  */}
                                    <select  className="select select-bordered">
                                        <option disabled selected>Sauces</option>
                                        {cart[0].topping.map((item, i) => (
                                            <option key={i}>{item}</option>))}
                                    </select>
                                </div>

                            </div>
                        </div>
                        {/* quantity */}
                        <div className="flex items-center pb-5 border-b-2 border-mylogo mb-3">
                            <span className="mr-3 text-mylogo scroll-m-20 text-base font-semibold tracking-tight gap-6 mt-2">Quantity</span>
                            {/* buttons less */}
                            <Button onClick={() => (setCartItem({ ...cartItem, qty: cartItem.qty <= 1 ? 1 : --cartItem.qty }))} className="mt-2 group text-gray-800 bg-mylogo hover:bg-transparent  hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                                <FiMinus className="mr-2 h-8 w-8 text-mybg group-hover:text-orange-600 duration300" />
                                Less
                            </Button>
                            {/* quantity number */}
                            <div className="mr-2 ml-2 scroll-m-20 text-bs font-semibold tracking-tight text-white mt-2">
                                {cartItem.qty}
                            </div>
                            {/* button pluss */}
                            <Button onClick={() => (setCartItem({ ...cartItem, qty: ++cartItem.qty }))} className="mt-2 group text-gray-800 bg-mylogo hover:bg-transparent  hover:text-white scroll-m-20 text-xs font-semibold tracking-tight rounded-xl">
                                <FiPlus className="mr-2 h-8 w-8 text-mybg group-hover:text-orange-600 duration300" />
                                Add
                            </Button>
                        </div>
                        {/* price */}
                        <div className="flex item-center justify-between ">

                            <div >
                                {/* price */}
                                <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-white ${cartItem.discount > 0 && "line-through decoration-2 decoration-mylogo/70"}`}>
                                    Rs {cartItem.price * cartItem.qty}
                                </span>
                                {/* discount */}

                                {cartItem.discount > 0 &&
                                    <span className="ml-5 scroll-m-20 text-2xl font-semibold tracking-tight text-white " >
                                        Rs{(cartItem.price - (cartItem.price * cartItem.discount) / 100) * cartItem.qty}
                                    </span>}
                            </div>
                            {/* add to cart */}
                            <AddToCartTost cartItem={cartItem} />
                        </div>
                        {/* buy now */}

                        <BuyNow/>
                    </div>
                </div>
            </div>
        </div>
    )
}