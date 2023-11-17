import InfoCard from "@/components/InfoCard";
import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
    return (
        <main className="">
            <Navbar />
            <section className="relative flex items-center px-[2.5rem] md:px-[6.875rem] min-h-[75vh]">
                <Image
                    className="z-[-1] object-cover"
                    src="/woman-in-church.jpg"
                    alt=""
                    fill={true}
                />
                <div className="text-white/90 uppercase">
                    <p className="font-bold">welcome to our church</p>
                    <h1 className="font-bold text-[1.5rem] md:text-[4rem] my-[1.5rem] md:my-[2rem] tracking-tight">
                        Become a part of <br /> our community
                    </h1>
                    <button className=" px-[2rem] py-[1rem] md:px-[4rem] md:py-[1.5rem] md:my-[2rem] bg-[#FFD2A4] text-black uppercase rounded-xl">
                        learn more
                    </button>
                    <div className="flex my-[4rem] ">
                        <div className="relative top-3 min-w-[1.125rem] max-h-[2px] mr-4 bg-[#FFD2A4]"></div>
                        <p className="leading-6">
                            Lorem ipsum dolor sit amet, consectetur <br />
                            adipiscing elit, sed do.
                        </p>
                    </div>
                </div>
            </section>
            <section className="px-[2.5rem] md:px-[6.875rem] mt-[8rem]">
                <div className=" text-center uppercase">
                    <h4>sub-headline</h4>
                    <h3 className="font-bold text-[3rem]">
                        A church that's relevant
                    </h3>
                </div>

                <div className="flex flex-col lg:flex-row gap-[1.5rem] mt-[4rem]">
                    <InfoCard
                        icon="/prayer-hands.svg"
                        title="About Us"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <InfoCard
                        icon="/soundwave.svg"
                        title="Get involved"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                    <InfoCard
                        icon="/charity.svg"
                        title="About Us"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    />
                </div>
            </section>
            <section className="px-[2.5rem] md:px-[6.875rem] mt-[8rem]"></section>
        </main>
    );
}
