import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ImHeart } from "react-icons/im"
import { PiShoppingBagFill } from "react-icons/pi"
import { disconnect } from "process";
import AddToCartBestSell from "./addtocardbestsell";
import BuyNowBestSell from "./BuyNowBestSell";
import BestSellAddToCart from "./addtocardbestsell";
import cart from "@/app/store/features/cart";


export default function BestSellingcard(

    {
        src,
        alt,
        title,
        description,
        price,
        category,
        buycard,
        discount,
    }:
        {
            src: string,
            alt: string,
            title: string,
            description: string,
            price: number,
            category: string,
            buycard: string,
            discount: number,
        }) {
    return (
        <div className="max-w-[350px] h-[30rem]  p-4 mx-auto shadow-gray-500 shadow-md relative rounded-xl  group bg-myellow/80 ">
            <Link href={`/${category}/${buycard}`}>
                {/* image */}
                <div className="block h-[23rem rounded overflow-hidden]">
                    <Image src={src} alt="kuch nahi" width={400} height={400} />
                </div >
                {/* typography */}
                <div className="card-body">
                    {/* title */}
                    <h2 className="mt-5 scroll-m-20 border-b text-lg  font-extrabold tracking-tight transition-colors first:mt-0 text-mybg line-clamp-1">{title}</h2>
                    {/* description */}
                    <p className="mt-2 scroll-m-20 text-sm font-semibold tracking-tight text-white line-clamp-1">{description}</p>
                    {/* price */}
                    <div className="flex gap-4">
                        <p className={`scroll-m-20 text-base font-semibold tracking-tight text-white line-clamp-1 ${discount > 0 && "line-through decoration-2 decoration-mylogo/70"}`}>Rs{price}</p>
                        {/* discounted value */}
                        {discount > 0 && <p className="scroll-m-20 text-base font-semibold tracking-tight text-white line-clamp-1">Rs{price - (price * discount) / 100}</p>}

                    </div>
                </div>
            </Link>
            {/* buttons */}
            <div>

                {/* <AddToCartBestSell cartItem={ {
        src,
        alt,
        title,
        description,
        price,
        category,
        buycard,
        discount,
    }}/> */}
                <div className="mt-2 group items-center ">
                <BuyNowBestSell />
                </div>
                
                {discount > 0 && (
                    <div className="scroll-m-20 text-xs font-semibold tracking-tight p-1 text-white bg-mylogo absolute top-6 left-3 w-[60px] rounded-xl text-center uppercase myDiscount" >{`${discount}% off`}</div>
                )}

            </div>

        </div>
    )
} 