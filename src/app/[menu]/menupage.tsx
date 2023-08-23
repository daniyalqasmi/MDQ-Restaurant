"use client"

import BestSellingcard from "@/components/bestsellingprodectscard";
import { useAppSelector } from "../store/hooks";
export default function MenuPage({ params }: { params: { menu: string } }) {
    const product = useAppSelector((state) => state.products);
    const bestSell = product.filter((val) => val.category == params.menu);
    return (
        <div>
            <div className="text-center mb-15  ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-mylogo capitalize">
                    {params.menu}
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex" />
                </div>
            </div>
            <div className="flex flex-wrap justify-center gap-5 mt-[20px]">
                {
                    bestSell.map((items: any, i) => (
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