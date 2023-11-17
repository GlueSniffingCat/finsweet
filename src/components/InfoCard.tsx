import Image from "next/image";
import React from "react";

type Props = {
    icon: string;
    title: string;
    content: string;
};

export default function InfoCard({ icon, title, content }: Props) {
    return (
        <div className="border-b-[1rem] border-[#FFD2A4] bg-[#FFF5EB]">
            <div className=" p-[1.25rem] md:p-[2.5rem] lg:p-[5rem]">
                <div className="relative max-w-fit mb-[1.5rem]">
                    <Image
                        className="contain"
                        src={icon}
                        alt=""
                        width={48}
                        height={48}
                    />
                </div>
                <div>
                    <h2 className="mb-[.5rem] text-[2rem] font-bold">
                        {title}
                    </h2>
                    <p className="md:max-w-[75%]">{content}</p>
                </div>
            </div>
        </div>
    );
}
