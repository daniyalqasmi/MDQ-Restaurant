"use client"
import Image from "next/image";
import { Button } from "./ui/button";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa"
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import { addCard, delItem, subtractCard } from "@/app/store/features/cart";

export default function Cardcard() {
    const cartArray = useAppSelector((state) => state.cart);
    const dispatch = useAppDispatch();
    console.log("abc",cartArray)
    return (<>
        {cartArray.length >= 1 && cartArray.map((item, i) => (
            <div key={i} className="flex px-10 py-3">
                <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="w-[100px] h-[100]"
                />
                <div className="flex px-5 justify-between items-center w-full">
                    <div>
                        <h2 className="text-sm font-semibold leading-none line-clamp-1 text-mylogo">
                            {item.title}
                        </h2>
                        <p className="mt-2 text-sm text-mylogo/80 leading-none line-clamp-1 font-semibold ">Topping:&nbsp;
                            <span>
                                {item.topping}
                            </span>
                        </p>
                        <div className="mt-2 flex items-center">
                            <Button onClick={()=>(dispatch(subtractCard(item)))} className="group hover:bg-mywhite/75 bg-mylogo text-white hover:text-mylogo w-fit h-fit rounded-lg text-sm duration-300">
                                <FaMinus className="h-2 w-2 group-hover:text-mylogo" />
                            </Button>
                            <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold tracking-tight">{item.qty}
                            </div>
                            <Button onClick={()=>(dispatch(addCard(item)))} className="group hover:bg-mywhite/75 bg-mylogo text-white hover:text-mylogo w-fit h-fit rounded-lg text-sm duration-300">
                                <FaPlus className="h-2 w-2 group-hover:text-mylogo" />
                            </Button>
                        </div>
                        <div className="mt-3 lg:hidden flex-col  gap-5 ">
                            <h3 className="text-sm font-semibold leading-none line-clamp-1 text-mylogo">
                                <span >Price:&nbsp;</span>
                                Rs{item.discount > 0 ? item.price - (((item.price * item.discount) / 100)) * item.qty : item.price * item.qty}
                            </h3>
                            <FaTrash onClick={() => dispatch(delItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer mt-1" />
                        </div>
                    </div>

                </div>
                <div className="hidden lg:flex flex-col items-end gap-5 ">
                    <h3 className="text-sm font-semibold leading-none line-clamp-1 text-mylogo">
                        <span>Price:&nbsp;</span>
                        Rs{item.discount > 0 ? item.price - (((item.price * item.discount) / 100)) * item.qty : item.price * item.qty}
                    </h3>
                    <FaTrash onClick={() => dispatch(delItem(item.uuid))} className="text-base font-semibold leading-none line-clamp-1 text-red-600 cursor-pointer " />
                </div>
            </div>
        ))}

    </>)
}