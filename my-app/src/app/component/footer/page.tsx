
import Image from "next/image";
import Link from "next/link";
export  default function Footer() {
    return (
       <section>
        <main>
            <div className="h-80 bg-black text-white flex mt-40 space-x-40">
                <div>
                <div>
                <Image src={"/logo.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[60px] w-[70px] left-40 relative top-20" ></Image>
                </div>
                <p className="font-semibold text-lg mt-28 w-[530px] ml-40">
                    High level experince in web design and developemt, knowledge producing quality work
                </p>
                </div>
                <div className="mt-16 space-y-5 font-medium">
                <h4 className="text-xl font-bold">
                    USECASES
                </h4>
                <p>
                    Web-designer
                </p>
                <p>
                   Small Business
                </p>
                <p>
                    Web-Bulider
                </p>
                <p>
                    Marketers
                </p>
            </div>
            <div className="mt-16 space-y-5 font-medium">
              <h4 className="text-xl font-bold">
                  COMPANY
              </h4>
              <div className="mt-5">
                <Link href="/about">About Us</Link>
              </div>
              <p>Team</p>
              <p>FAQs</p>
              <div className="mt-5">
                <Link href="/contact">Contact Us</Link>
              </div>
            </div>
            <div>
                <h4  className="text-xl font-bold mt-16">
                    FOLLOW US
                </h4>
                <div className="flex space-x-5 mt-8">
                <Image src={"/face.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
            <Image src={"/insa.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
                <Image src={"/twitt.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
            <Image src={"/git.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
             
                
                </div>
            </div>
            </div>
         
        </main>
       </section>
    )
}