"use client"
import BestSellingcard from "./bestsellingprodectscard";
import { useAppSelector } from "@/app/store/hooks";

export default function BestSelling() {
    const product = useAppSelector((state) => state.products);
    const bestSell = product.slice(0, 6);
    return (
        <div id="bestselling" className="mb-[100px] mt-[100px]">
            <div className="text-center mb-15  ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-mylogo">
                    Best Selling Products
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex " />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-[20px]">
                {
                    bestSell.map((items:any, i) => (
                        <BestSellingcard 
                        key={i}
                        src={items.image[0]} 
                        alt={items.title} 
                        title={items.title} 
                        description={items.description} 
                        price={items.price}
                        category={items.category}
                        buycard={items.cart}
                        discount={items.discount}
                         />
                    ))
                }
            </div>


        </div>
    )
} 