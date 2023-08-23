import Image from "next/image";

export default function Services() {
    return (
        <div id="Ourservices">
            <section className="text-white body-font mb-[100px] mt-[100px]">
                <div className="container px-5 mx-auto">
                    <div className="text-center mb-10">
                        <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-4xl mb-4 text-mylogo">
                            Our Services
                        </h1>
                        <div className="flex mt-2 justify-center">
                            <div className="w-16 h-1 rounded-full bg-myellow inline-flex" />
                        </div>
                    </div>

                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6 ">
                        {/* delivery */}
                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center group ">
                            <div className="w-40 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 group-hover:animate-fade-in">
                                <Image src={'/assest/drive-01.png'} alt="Delivery" width={100} height={100} className='w-60 h-30 ' />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-mylogo scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                                    Free Delivery
                                </h2>
                                <p className="line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors ">
                                    Free delivery on orders above 5000, relish exquisite dishes from home no extra cost easy online ordering. Memorable dining made affordable.
                                </p>
                            </div>
                        </div>

                        {/* costumer */}

                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center group ">
                            <div className="w-40 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 group-hover:animate-fade-in">
                                <Image src={'/assest/costumer.png'} alt="Delivery" width={100} height={100} className='w-30 h-25 text-mylogo ' />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-mylogo scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                                    24/7 Service
                                </h2>
                                <p className="line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors ">
                                    Uninterrupted 24/7 restaurant service offering delectable dishes, catering to customers cravings and convenience, anytime, day or night.
                                </p>
                            </div>
                        </div>
                        {/* Money back */}

                        <div className="p-4 md:w-1/3 flex flex-col text-center items-center group ">
                            <div className="w-40 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0 group-hover:animate-fade-in">
                                <Image src={'/assest/save-01.png'} alt="Delivery" width={100} height={100} className='w-30 h-25 text-mylogo ' />
                            </div>
                            <div className="flex-grow">
                                <h2 className="text-mylogo scroll-m-20 text-lg font-bold tracking-tight lg:text-xl capitalize mb-3">
                                    Money Back
                                </h2>
                                <p className="line-clamp-2 scroll-m-20  text-base font-semibold tracking-tight transition-colors ">
                                    Customer satisfaction is our priority, backed by a reliable money-back guarantee. If youre not delighted with your order, we offer a prompt refund, no questions asked.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}