import Image from "next/image";
import Link from "next/link";

export  default function Header() {
    return (
        <div className="flex h-24 rounded-full shadow-xl shadow-slate-400 mt-6 mx-44 w-[1600px]">
           <div className="flex ml-16 my-6">
                <Image src={"/logo.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[50px] w-[60px] top-2 left-20 relative " ></Image>
            <div className="space-x-5 ml-[890px] mt-2">
                <Link href="/" className="text-2xl hover:bg-yellow-400 focus:font-bold hover:font-bold focus:bg-yellow-400 focus:text-white py-1 px-6 font-semibold hover:text-white rounded-full">Home </Link>
                <Link href="/about" className="text-2xl hover:bg-yellow-400 focus:font-bold hover:font-bold focus:bg-yellow-400 focus:text-white py-1 px-6 font-semibold hover:text-white rounded-full">About </Link>
                <Link href="/skills" className="text-2xl hover:bg-yellow-400 focus:font-bold hover:font-bold focus:bg-yellow-400 focus:text-white py-1 px-6 font-semibold hover:text-white rounded-full">Skills </Link>
                <Link href="/contact" className="text-2xl hover:bg-yellow-400 focus:font-bold hover:font-bold focus:bg-yellow-400 focus:text-white py-1 px-6 font-semibold hover:text-white rounded-full">Contact </Link>
            </div>
            </div>
        </div>
    )
}