import Image from "next/image";

export default function About() {
    return (
        <div><section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="flex title-font font-medium items-center md:justify-start justify-center text-myorange">
                <Image src={'/assest/logo-01.png'} alt="logo" width={300} height={300} />
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                    <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl text-mylogo">
                        Elevate Your 
                        <br />
                        Culinary Experience at
                        <br className="hidden lg:inline-block " />
                        MDQ Restaurant
                    </h1>
                    <p className="leading-7 [&:not(:first-child)]:mt-6 text-white">
                        Welcome to MDQ Restaurant, where every bite is a journey of exquisite flavors and impeccable hospitality.
                    </p>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors  first:mt-0 text-orange-500 uppercase mt-7">
                        🍽️ Indulge in Excellence:
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6  text-white">
                        Savor the artistry of our culinary experts as they craft dishes that harmonize innovation with tradition. Our menu is a symphony of tastes, bringing together the finest ingredients to create gastronomic masterpieces that delight the senses.
                    </p>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors  first:mt-0 text-orange-500 uppercase mt-7">
                        🌆 A Soothing Ambiance:
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6  text-white">
                        Step into a realm of elegance and charm. The warm ambiance of MDQ Restaurant sets the stage for unforgettable memories. Whether it's an intimate dinner, a celebratory gathering, or a casual meet-up, our space caters to every occasion.
                    </p>
                    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors  first:mt-0 text-orange-500 uppercase mt-7">
                        🌍 Globally Inspired, Locally Rooted:
                    </h2>
                    <p className="leading-7 [&:not(:first-child)]:mt-6  text-white">
                        Experience a world of flavors curated with a local touch. From international classics to dishes inspired by regional treasures, MDQ Restaurant offers a diverse culinary voyage that celebrates both global cuisine and local heritage.
                    </p>
                    <p className="leading-7 [&:not(:first-child)]:mt-6  text-white">
                    Elevate your dining expectations at MDQ Restaurant. Reserve your table today and let us redefine your gastronomic journey. Your palate's desires await.
                    </p>
                </div>
            </div>
        </section>
        </div>
    )
}