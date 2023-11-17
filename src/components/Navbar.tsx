import React from "react";

type Props = {};
import Image from "next/image";
import Navlink from "./Navlink";
export default function Navbar({}: Props) {
    return (
        <div className="flex px-[2.5rem] md:px-[6.875rem] bg-[#161722]">
            <div className="relative p-[2.5rem] md:p-[3rem] mr-[4.125rem] ">
                <Image
                    className="object-contain"
                    src="/logo-white.svg"
                    alt=""
                    fill={true}
                />
            </div>
            <div className="hidden md:flex border-l-[2px] border-white/10">
                <nav className="hidden lg:flex gap-[3rem] items-center px-[4rem] uppercase">
                    <Navlink label="home" url="/" />
                    <Navlink label="about us" url="/about-us" />
                    <Navlink label="sermon" url="/sermon" />
                    <Navlink label="blog" url="/blog" />
                </nav>
            </div>
            <button className=" hidden lg:block self-center py-[1.25rem] px-[3rem] ml-auto rounded-xl  bg-[#FFD2A4] uppercase">
                contact us
            </button>
            <button className="lg:hidden ml-auto">
                <div className="min-w-[2rem] p-px bg-white"></div>
                <div className="min-w-[2rem] p-px my-[0.5rem] bg-white"></div>
                <div className="min-w-[2rem] p-px bg-white"></div>
            </button>
        </div>
    );
}
