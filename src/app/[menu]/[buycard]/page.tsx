
import BuyCardPage from "./buycardpage";

export default function Buycard({ params }:{params:{buycard:string}}) {
    return (
        <div>
            <section className="text-gray-600 body-font overflow-hidden">
            <BuyCardPage params={params}/>
        </section>
        </div>
    )
}