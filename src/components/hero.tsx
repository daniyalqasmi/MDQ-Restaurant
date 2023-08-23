import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import { FaBasketShopping } from "react-icons/fa6"
import OrderNow from "./heroordernow";


export default function Hero() {
    return (
        <div className="mb-[150px]">
            <div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-no-repeat" >
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-5 text-white  ">Exquisite <span className="text-myorange ">Fusion</span></h1>
                        <p className="mb-5 scroll-m-20 text-lg font-semibold tracking-tight text-white">Culinary haven, enchanting ambiance, innovative masterpieces. Locally-sourced ingredients, impeccable service, unforgettable experience. A symphony of flavors, a cherished dining memory awaits.</p>
                        <OrderNow/>
                    </div>
                </div>
            </div></div>
    )

}