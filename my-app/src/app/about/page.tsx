import Image from "next/image";
export default function about() {
    return (       
             <section>
                <main>
                    <div className="flex ">
                        <div className="ml-36 mt-44">
                            <h1 className="text-5xl font-semibold font-serif ">
                                About Me
                            </h1>
                            <p className="w-[500px] font-medium text-lg mt-8">
                            Hi, I'm Taha—a dedicated web developer with a passion for crafting engaging and user-friendly digital experiences. My journey in web development began with a curiosity for the language of code, which has since evolved into a committed pursuit of excellence in building functional, beautiful web interfaces. With each project, I aim to merge creativity with functionality, continuously learning and incorporating new technologies to refine my skills. I value collaboration, innovation, and a user-centered approach, believing these elements are key to delivering exceptional digital experiences. Welcome to my portfolio, where I share my journey and projects with you.
                             </p>
                            <a href="https://resume-builder--chi.vercel.app/">
                        <button className="text-2xl mt-4 bg-yellow-400 rounded-xl px-4 py-1">
                            Resume
                        </button>
                         </a>
                        </div>                      
                        <div className="w-[450px] h-[450px] bg-yellow-500 ml-[650px] rounded-full mt-24">
            <Image src={"/image.02.png"} alt={"image.2"}
            height={400}
            width={400}
            className="mx-9 my-2 h-96 w-96" ></Image>

            
          </div>        
                    </div>
                </main>
             </section>
    )
}