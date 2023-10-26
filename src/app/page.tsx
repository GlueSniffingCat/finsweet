import Navbar from "@/components/Navbar";
import Image from "next/image";
export default function Home() {
    return (
        <main className="">
            <Navbar />
            <div className="relative flex items-center min-w-full md:min-h-[90vh] lg:min-h-[80vh] px-[2.5rem] overflow-hidden">
                <div className="text-white font-bold">
                    <p className="py-[1rem] uppercase">welcome to our church</p>
                    <h1 className="text-[4rem] leading-none">
                        BECOME A PART OF <br /> OUR COMMUNITY
                    </h1>
                    <button className="my-[4rem] py-[1rem] px-[3rem] rounded-xl text-black bg-white">
                        <p>LEARN MORE</p>
                    </button>
                    <div className="flex">
                        <div className="w-[25px] h-[1px] p-[1px] mr-[1rem] bg-white"></div>
                        <p className=" relative bottom-2">
                            Lorem Ipsum Dolor Sit Amet, Consectetur <br />
                            adipiscing elit, sed do.
                        </p>
                    </div>
                </div>
                <Image
                    className="z-[-1] object-cover"
                    src="/woman-in-church.jpg"
                    alt=""
                    fill={true}
                />
            </div>
        </main>
    );
}
