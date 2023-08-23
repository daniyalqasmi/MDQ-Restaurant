import SentMessage from "@/components/sentmessage";

export default function Contactus() {
    return (
        <div><div id="contact" className="pl-18  ">
        <section className=" body-font relative">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                <div className="lg:w-2/3 md:w-1/2= rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative border-solid border-2 border-mylogo pb-8">
                    <iframe
                        width="100%"
                        height="100%"
                        className="absolute inset-0"
                        frameBorder={0}
                        title="map"
                        marginHeight={0}
                        marginWidth={0}
                        scrolling="no"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3619.4328024835127!2d67.12875847440871!3d24.883214577914433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3391ed54f2047%3A0x4a8cd291ad1999bb!2sDaniyal%20Coaching%20Center!5e0!3m2!1sen!2s!4v1685995793123!5m2!1sen!2s"
                        style={{ filter: " contrast(1.2) opacity(0.4)" }}
                    />
                    <div className="bg-mybg relative flex flex-wrap py-6 rounded shadow-md border-solid border-2 border-mylogo bg-opacity-color-20">
                        <div className="lg:w-1/2 px-6">
                            <h2 className="title-font font-extrabold text-mylogo tracking-widest text-xs">
                                ADDRESS
                            </h2>
                            <p className="mt-1 text-white">
                                Drigh Road Cantt Bazzar,Karachi
                            </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                            <h2 className="title-font font-extrabold text-mylogo tracking-widest text-xs">
                                EMAIL
                            </h2>
                            <a className="text-white p-500 leading-relaxed">Daniyalqasmi5327@email.com</a>
                            <h2 className="title-font font-extrabold text-mylogo tracking-widest text-xs mt-4">
                                PHONE
                            </h2>
                            <p className="leading-relaxed text-white ">+92347-8381849</p>
                        </div>
                    </div>
                </div>
                <div className="lg:w-1/3 md:w-1/2 bg-mybg flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 border-solid border-2 rounded-xl  border-mylogo pl-3 pr-3 ">
                    <h2 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-mylogo">
                        Contact
                    </h2>
                    <p className="leading-relaxed mb-5 text-white p-600">
                        feel free to Contact
                    </p>
                    <div className="relative mb-4">
                        <label htmlFor="name" className="leading-7 text-sm text-white p-600  hover:text-mylogo">
                            Name
                        </label >
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full bg-mylogo rounded border border-mywhite focus:border-mywhite focus:ring-2 focus:ring-mywhite text-base outline-none text-white p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-mywhite"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="email" className="leading-7 text-sm text-white p-600  hover:text-mylogo">
                            Email
                        </label >
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full bg-mylogo rounded border border-mywhite focus:border-mywhite focus:ring-2 focus:ring-mywhite text-base outline-none text-white p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-mywhite"
                        />
                    </div>
                    <div className="relative mb-4">
                        <label htmlFor="message" className="leading-7 text-sm text-white p-600 hover:text-mylogo">
                            Message
                        </label >
                        <textarea
                            id="message"
                            name="message"
                            className="w-full  bg-mylogo rounded border border-mywhite focus:border-mywhite focus:ring-2 focus:ring-mywhite text-base outline-none text-white p-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out hover:text-mywhite "
                            defaultValue={""}
                        />
                        
                    </div>
                    
                    <button  className="text-white bg-mylogo border-0 py-2 px-6 focus:outline-none hover:bg-transparent rounded text-lg">
                            Send Message
                        </button>
                    
                    
                </div>
            </div>
        </section>

    </div>
        </div>

    )
}