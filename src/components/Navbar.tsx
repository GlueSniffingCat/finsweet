import React from "react";

type Props = {};
import Image from "next/image";
import Navlink from "./Navlink";
export default function Navbar({}: Props) {
    return (
        <div className="z-10 relative flex justify-between px-[1.5rem] md:px-[2.5rem] min-h-[1.5rem] max-w-full bg-black">
            <div className="py-[1.75rem]">
                <h3 className="text-white text-[2rem] font-bold">
                    &#123;Fitsweet
                </h3>
            </div>
            <div className=" hidden xl:flex items-center w-full ml-[2.75rem] border-l-[1px] border-l-white/20">
                <nav className="flex w-full py-[0.75rem] px-[2rem]">
                    <ul className="flex justify-between items-center w-1/2 uppercase">
                        <li>
                            <Navlink label="Home" />
                        </li>
                        <li>
                            <Navlink label="About Us" />
                        </li>
                        <li>
                            <Navlink label="Sermons" />
                        </li>
                        <li>
                            <Navlink label="Blog" />
                        </li>
                        <li>
                            <Navlink label="Contact us" />
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="xl:hidden">
                <button>
                    <div className="p-[1px] w-[15px] bg-white"></div>
                    <div className="p-[1px] w-[15px] my-[3px] bg-white"></div>
                    <div className="p-[1px] w-[15px] bg-white"></div>
                </button>
            </div>
        </div>
    );
}
