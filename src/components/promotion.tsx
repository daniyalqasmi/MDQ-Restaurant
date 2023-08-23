
export default function Promotion() {
    return (
        <div className="mb-[100px] mt-[100px] "id="Ourpromotion">

            <div className="text-center mb-15">
                <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-mylogo">
                    Our Promotions
                </h1>
                <div className="flex mt-2 justify-center">
                    <div className="w-16 h-1 rounded-full bg-myellow inline-flex" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 rounded-xl mt-10 group" >
                    <div className="hero h-[25rem] promo-1 rounded-xl   text-bg-mylog">
                        <div className="hero-overlay bg-opacity-30"></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 scroll-m-20 text-white text-5xl font-bold tracking-tight uppercase ">Get upto <span className="text-mylogo"> 25% off</span></h1>
                                <p className="mb-5 text-white scroll-m-20 text-base font-medium tracking-tight">Enjoy up to <span className="text-mylogo"> 25% off</span> on every family deal during our sale!</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="hero h-[25rem] promo-2 rounded-xl  ">
                        <div className="hero-overlay bg-opacity-85 "></div>
                        <div className="hero-content text-center text-neutral-content ">
                            <div className="max-w-md">
                                <h1 className="mb-5 scroll-m-20 text-white text-5xl font-bold tracking-tight uppercase ">Get upto <span className="text-mylogo"> 50% off</span></h1>
                                <p className="mb-5 text-white scroll-m-20 text-base font-medium tracking-tight">Unlock unbeatable savings with a phenomenal <span className="text-mylogo"> 50% off</span> during our thrilling midnight sal</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            




        </div>




    )
}