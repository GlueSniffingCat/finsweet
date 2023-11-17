import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

type Props = {
    label: string;
    url: string;
};
const Roboto = Roboto_Condensed({
    weight: "400",
    style: "normal",
    subsets: ["greek"],
});

function Navlink({ label, url }: Props) {
    return (
        <Link
            href={url}
            className={`py-[1rem] px-[1.5rem] text-white/90 ${Roboto.className}`}
        >
            {label}
        </Link>
    );
}

export default Navlink;
