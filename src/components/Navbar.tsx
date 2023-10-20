import React from "react";

type Props = {};
import Image from "next/image";
import Navlink from "./Navlink";
export default function Navbar({}: Props) {
    return (
        <div className="flex min-h-[1.5rem] max-w-full bg-black">
            <div className="relative min-h-[1.75rem] min-w-[300px] m-[1.75rem]">
                <Image
                    alt=""
                    src="/logo-white.svg"
                    fill={true}
                    className="object-contain"
                />
            </div>
            <nav className="flex p-[1.75rem] w-full border-l-[1px] border-l-white/20">
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
    );
}
