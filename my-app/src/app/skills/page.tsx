
import Image from "next/image"

export default function skills() {
    return (
                <section>
                    <main>
                        <div className=" mt-32">
                            <h1 className="text-3xl font-serif font-bold border-2 border-black inline-block mx-[800px] px-8 py-2">
                                SKILLS
                            </h1>
                            <p className="text-xl font-semibold mt-20 mx-[600px] ">
                                Using Now :
                            </p>
                            <div className="flex mx-[650px] mt-10 space-x-32">
                                <div>
                                <Image src={"/javascript.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[80px] w-[80px] " ></Image>
                                    <p className="font-semibold px-1">
                                        Javascript
                                    </p>
                                </div>
                                <div>
                                <Image src={"/html.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[80px] w-[80px] " ></Image>
                                <p className="font-semibold px-5">HTML</p>
                                </div>
                                <div>
                                <Image src={"/css.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[110px] w-[110px] relative bottom-5 " ></Image>
                                <p className="font-semibold px-10 relative bottom-8">CSS</p>
                                </div>
                            </div>
                            <div className="flex mx-[650px] mt-10 space-x-32">
                                <div>
                                <Image src={"/nextjs.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[80px] w-[80px] " ></Image>
                                    <p className="font-semibold px-3">
                                        Next.Js
                                    </p>
                                </div>
                                <div>
                                <Image src={"/node.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[110px] w-[110px] relative bottom-5" ></Image>
                                <p className="font-semibold px-7 relative bottom-8">Nodejs</p>
                                </div>
                                <div>
                                <Image src={"/figma.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[70px] w-[55px] " ></Image>
                                <p className="font-semibold  px-1">Figma</p>
                                </div>
                            </div>
                            <p  className="text-xl font-semibold mt-20 mx-[600px]">
                                Others :
                            </p>
                            <div className="flex mx-[650px] mt-10 space-x-32">
                            <div>
                            <Image src={"/typescript.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[80px] w-[80px] " ></Image>
                                <p className="font-semibold ">Typescript</p>
                                </div>
                                <div>
                                <Image src={"/react.png"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[110px] w-[110px] relative bottom-4" ></Image>
                                    <p className="font-semibold px-8 relative bottom-7 ">
                                        React
                                    </p>
                                </div>                            
                                <div>
                                <Image src={"/canva.jfif"} alt={"image.2"}
            height={400}
            width={400}
            className=" h-[80px] w-[80px] " ></Image>
                                <p className="font-semibold px-4">Canva</p>
                                </div>
                            </div>                            
                        </div>
                    </main>
                </section>
            
    )
}