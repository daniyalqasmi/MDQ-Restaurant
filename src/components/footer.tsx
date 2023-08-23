import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
    return (
        <div>
            <footer className="text-white body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                QUICK LINKS
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Home</Link>
                                </li>
                                <li>
                                    <Link href={"/about"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">About</Link>
                                </li>
                                <li>
                                    <Link href={"/contactus"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Contact Us</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                Page Links
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"#Mostpopulardishes"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Most Popular Dishes</Link>
                                </li>
                                <li>
                                    <Link href={"#Ourservices"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Services</Link>
                                </li>
                                <li>
                                    <Link href={"#Ourpromotion"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Promotions</Link>
                                </li>
                            
                                <li>
                                    <Link href={"#Categories"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Our Categories</Link>
                                </li>
                                
                                <li>
                                    <Link href={"#bestselling"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">Best Selling Products</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4 ">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                CONTACT US
                            </h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <Link href={"/"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">CALL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-white hover:text-myorange scroll-m-20 text-sm font-  tracking-tight">+92-34783818-49</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-white hover:text-myorange scroll-m-20 text-base font-  tracking-tight">EMAIL US</Link>
                                </li>
                                <li>
                                    <Link href={"/"} className="text-white hover:text-myorange scroll-m-20 text-sm font-  tracking-tight">Daniyalqasmi5327@gmail.com</Link>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="scroll-m-20 text-xl font-semibold  tracking-tight text-myorange mb-3">
                                Subscribe
                            </h2>
                            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                                    <label
                                        htmlFor="footer-field"
                                        className="leading-7 text-sm text-white"
                                    >
                                        Your Email Here
                                    </label>
                                    <input
                                        type="text"
                                        id="footer-field"
                                        name="footer-field"
                                        className="w-full bg-gray-100 bg-opacity-50 rounded border border-white focus:bg-transparent focus:ring-2 focus:ring-orange-800 focus:border-myorange text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                    />
                                </div>
                                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex mt-2 text-white bg-myorange border-0 py-2 px-6 focus:outline-none hover:bg-orange-800 rounded">
                                    Get Notified
                                </button>
                            </div>
                            <p className="text-white hover:text-myorange scroll-m-20 text-sm">
                                Please provide us your email
                                <br className="lg:block hidden" />
                                to get notified for delicious food
                            </p>
                        </div>
                    </div>
                </div>
                <div >
                    <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
                        <a className="flex title-font font-medium items-center md:justify-start justify-center text-myorange">
                            <Image src={'/assest/logo-01.png'} alt="logo" width={100} height={100} />
                            <span className="ml-3 text-xl">RESTAURANT</span>
                        </a>
                        <p className="text-sm text-white sm:ml-6 sm:mt-0 mt-4">
                            © 2023 Restaurant | Powered by<span className="ml-3 text-sm text-myorange">Daniyal</span>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-7 mt-4 justify-center sm:justify-start ">
                            <a className="text-white p-500">
                                <a href="https://www.facebook.com/Daniyalqasmi5327">
                                    <FaFacebookF className="text-3xl hover:text-blue-700" />
                                </a>
                            </a>
                            <a className="ml-3 text-white p-500">
                                <a href="https://www.instagram.com/muhammaddaniyalqasmi5327">
                                    <FaInstagram className="text-3xl ml  hover:text-red-700  " />

                                </a>
                            </a>
                        </span>
                    </div>
                </div>
            </footer >

        </div >
    )
}