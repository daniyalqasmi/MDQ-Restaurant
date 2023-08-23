"use client"
import { Divide } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import BestSellingcard from "./bestsellingprodectscard";
import { useAppSelector } from "@/app/store/hooks";


export default function Mostpopular() {
    const bestSell = useAppSelector((state) => state.products.slice(0,9));
    
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className="mb-[100px] mt-[100px] ml-4 mr-4  " id="Mostpopulardishes">
            <div className="text-center   ">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-mylogo capitalize text-center">
                    Most Popular Dishes
                </h1>
                <div className="flex mt-2 justify-center ">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex mb-5 " />
                </div>
            </div>
            <Slider {...settings}>
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
            </Slider>

        </div>
    )
}