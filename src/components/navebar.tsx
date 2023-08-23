"use client"




import Link from "next/link";
import React from "react";
import { FaHamburger } from "react-icons/fa"
import { NavigationMenuDemo } from "./navlinks";
import Image from "next/image";
import { useAppSelector } from "@/app/store/hooks";

export default function Navbar() {
    const cart = useAppSelector((state) => state.cart);
    return (
        <div><div className="navbar bg-myblack">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="p-0 text-2xl lg:hidden bg-myblack text-myorange">
                        <FaHamburger />
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-mylogo ">
                        <li><Link href={"/home"}>Home</Link></li>
                        <li tabIndex={0}>
                            <details>
                                <summary>Menu</summary>
                                <ul className="p-2">
                                    <li><Link href={"/maincourse"}>Main Course</Link></li>
                                    <li><Link href={"/familysize"}>Family Size</Link></li>
                                    <li><Link href={"/sandwiches"}>Sandwiches</Link></li>
                                    <li><Link href={"/dessrts"}>Desserts</Link></li>
                                    <li><Link href={"/breakfast"}>Breakfast</Link></li>
                                    <li><Link href={"/drinks"}>Drinks</Link></li>
                                </ul>
                            </details>
                        </li>

                        <li><Link href={"/about"}>About</Link></li>
                        <li><Link href={"/contactus"}>Contact Us</Link></li>
                    </ul>
                </div>
                <Link href={"#"} ><Image src={'/assest/logo-01.png'} alt="logo" width={100} height={100} className="p-2 hidden lg:block" /></Link>
            </div>
            <div className="navbar-center ">
                <Link href={"#"} ><Image src={'/assest/logo-01.png'} alt="logo" width={100} height={100} className=" block lg:hidden" /></Link>
                <div className="hidden lg:block">
                    <NavigationMenuDemo />
                </div>
            </div>
            <div className="navbar-end">
                <div className="flex-none">
                    <Link href={'/card'}>
                         <label tabIndex={0} className="pr-4 cursor-pointer text-mylogo hover:text-white duration-300">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            {cart.length > 0 && <span className="badge badge-sm indicator-item">
                                {cart.length}
                            </span>}
                            
                        </div>
                         </label>
                    </Link>
                </div>
            </div>

        </div>
        </div>
    )
}

