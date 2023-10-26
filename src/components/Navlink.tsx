import Link from "next/link";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

type Props = {
    label: String;
};
const Roboto = Roboto_Condensed({
    weight: "400",
    style: "normal",
    subsets: ["greek"],
});

function Navlink({ label }: Props) {
    return (
        <Link
            href="/About-Us"
            className={`py-[1rem] px-[1.5rem] text-white ${Roboto.className}`}
        >
            {label}
        </Link>
    );
}

export default Navlink;
