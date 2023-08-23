
import Cardcard from "@/components/cardCard";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "../store/hooks";
import ProceedToCheak from "@/components/proceedtocheakout";


export default function CardPage() {
    const cartArray = useAppSelector((state) => state.cart);
    const total = cartArray.reduce((total, arr) => { return (total + ((arr.price - (arr.price * arr.discount) / 100))*arr.qty) },0)
    return (
        <div> <div className="grid lg:grid-cols-3 grid-cols-1">
            {/* items */}
            <div className="col-span-2 ">
                <Cardcard />
            </div>
            {/* summry */}
            <div className="bg-mywhite/20 p-5 rounded-xl">
                {/* heading */}
                <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-mylogo">Order Summary</h2>
                <div className="b-5 border-b-2 border-mylogo mt-2 mb-2"></div>
                <div className="scroll-m-20 text-sm font-medium tracking-tight text-white">
                    <div className="flex flex-center justify-between capitalize">
                        <h2>Sub Total</h2>
                        <h2>Rs{total}</h2>
                    </div>
                    <div className="flex flex-center justify-between capitalize">
                        <h2>Delivery Charges</h2>
                        <h2>TBD</h2>
                    </div>
                    <div className="flex flex-center justify-between capitalize">
                        <h2>Sales Tax</h2>
                        <h2>TBD</h2>
                    </div>
                </div>
                <div className="b-5 border-b-2 border-mylogo mt-2 mb-2"></div>
                <div className="flex flex-center justify-between uppercase  font-semibold text-sm tracking-tight text-mylogo">
                    <h2>estimated Total</h2>
                    <h2>Rs{total}</h2>
                </div>
                <div className="b-5 border-b-2 border-mylogo mt-2 mb-2"></div>
                <div className="flex items-center justify-center w-full">
                    <ProceedToCheak/>

                </div>
                <div className="b-5 border-b-2 border-mylogo mt-2 mb-2"></div>
                <p className="text-sm font-semibold tracking-tight text-white w-[97%] text-center italic  ">{`* Delivery Charges and sales tax will be calculated in the Checkout page`} </p>
            </div>

        </div></div>
    )
}