import Image from "next/image";
export default function contact() {
    return (
        <section>
            <main>
                <div>
                    <h1 className="text-6xl font-bold font-serif mx-[780px] mt-20">Contact Us</h1>
                    <p className="text-lg font-medium text-slate-400 mx-[740px] mt-4">
                        Any question or remarks? Just write us a message!
                    </p>
                    <div className="flex">
                        <div className="w-[550px] h-[800px] bg-black mt-20 rounded-lg text-white">
                            <h2 className="text-3xl font-bold pt-8 ml-20 ">Contact Information</h2>
                            <p className="text-xl font-medium text-gray-400 ml-20 mt-4">Say something to start a live chat!</p>
                            <div className="mt-40 ml-10 space-y-5">
                            <div className="flex">
                            <Image src={"/phone.png"} alt={"phone call"}
                             height={400}
                              width={400}
                             className="h-8 w-8 " ></Image>
                             <p className="ml-4">+92 315184784</p>
                            </div>
                            <div className="flex">
                            <Image src={"/Email.png"} alt={"phone call"}
                             height={400}
                              width={400}
                             className="h-8 w-9 ml-" ></Image>
                             <p className="ml-4">anonymous@gmail.com</p>
                            </div>
                            <div className="flex">
                            <Image src={"/Loca.png"} alt={"phone call"}
                             height={400}
                              width={400}
                             className="h-9 w-10 ml-" ></Image>
                             <p className="ml-4 w-72" >Pakistan,Karachi,Gulshane-mimar Sec 6b1 House No#150</p>
                            </div>
                            </div>
                            <div className="flex mt-[315px] space-x-6 ml-8  ">
                            <Image src={"/twitt.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
                            <Image src={"/insa.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
                             <Image src={"/face.jpeg"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[52px] w-[52px] " ></Image>
                            <Image src={"/circle.png"} alt={"phone call"}
                             height={400}
                              width={400}
                             className="h-48 w-48 relative inline-block left-[90px] bottom-[132px]" ></Image>
                             <Image src={"/circle2.png"} alt={"phone call"}
                             height={400}
                              width={400}
                             className="h-40 w-40 relative inline-block bottom-44  right-40" ></Image>
                            </div>
                        </div>
                        <div className="mt-40 ml-80 space-y-40">
                        <div className="space-x-20">
                        <input type="text" placeholder="Enter your First Name" className="w-60 text-xl h-10 outline-slate-400 pl-2" />                  
                        <input type="text" placeholder="Enter your Last Name" className="w-60 text-xl h-10 outline-slate-400 pl-2"/>
                        </div>
                        <div className="space-x-20">        
                        <input type="text" placeholder="Enter your Email" className="w-60 text-xl h-10 outline-slate-400 pl-2"/>                  
                        <input type="text" placeholder="Enter your Phone Number" className="w-60 text-xl h-10 outline-slate-400 pl-2"/>
                        </div>
                        <div>
                        <p className="text-xl font-bold ml-2">Message</p>              
                        <input type="text" placeholder="Enter your Message..." className="w-[600px] text-xl h-10 outline-slate-400 pl-2 mt-2"/>
                        </div>
                        <button className="bg-black text-white text-2xl px-4 py-2 rounded-md">Send Message</button>
                        </div>
                        

                    </div>
                </div>
            </main>
        </section>
    )
}