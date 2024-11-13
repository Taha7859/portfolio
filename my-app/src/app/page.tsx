import Image from "next/image";

export default function Home() {
  return (
    <section>
    <main>
        <div className="flex">
          <div className="w-[570px] h-[790px]   bottom-44 bg-yellow-500">
            <Image src={"/image.02.png"} alt={"image.2"}
            height={400}
            width={400}
            className="relative top-[190px] h-[600px] w-[620px] ml-16" ></Image>
          </div>
          <div className="ml-20 mt-48 space-y-6">
            <h3 className="text-3xl font-semibold font-serif">
              Hello!
            </h3 >
            <h1 className="text-5xl font-bold font-serif">
              I'm TAHA
            </h1>
            <p className="text-xl w-[550px]">
            Hi I'm Taha, an aspiring developer passionate about web development, AI, and cloud engineering. With experience in TypeScript and hands-on projects, I’m driven to create engaging applications and expand my skills. Currently part of the Governor Sindh IT Program, I’m eager to grow, collaborate, and make a meaningful impact in tech.
            </p>
            <a href="/contact">
    <button className="text-xl font-extrabold rounded-full px-7 py-3 mt-4 bg-yellow-400 text-white shadow-md shadow-gray-600">
        Contact
    </button>
</a>
          </div>
        </div>
    </main>
    <main>
      <div className="flex mt-36">
        <div className="ml-28 ">
        <h2 className="text-4xl text-slate-600 font-mono">
          Why Me ?
        </h2>
        <h1 className="text-5xl mt-16 w-[800px] font-mono">
        I bring your vision to life with stunning website designs
        </h1>
        <p className="w-[480px] mt-10">
        I specialize in crafting visually striking and highly functional websites tailored to meet your unique needs. With a keen eye for design and a solid foundation in development, I ensure that every site I create is not only beautiful but also intuitive and responsive across all devices. I understand the importance of a strong online presence and am committed to delivering solutions that enhance user experience and drive engagement.
        </p>
        <a href="https://resume-builder--chi.vercel.app/">
                        <button className="text-2xl mt-4 bg-yellow-400 rounded-xl px-4 py-1">
                            Resume
                        </button>
                         </a>
        </div>
        <div className=" mb-40 mt-14 ml-[350px]  ">
        <div className="flex space-x-8 space-y-10">
          <div className="h-80 w-72 shadow-2xl shadow-slate-400 rounded-xl">
            <Image src="/image.3.png" alt="image.3"
            height={400}
            width={400} className="h-9 w-9 ml-8 mt-3">
            </Image>
            <h4 className="text-xl ml-4 mt-8">
              BRAND DESIGN
            </h4>
            <p className="mt-4 ml-4">
            Creating a cohesive and memorable brand identity is key to making a lasting impact. I design visually striking, unique brand elements that communicate your values, connect with your audience, and set you apart in a competitive market.
            </p>
          </div>

          <div className="h-[340px] w-72 shadow-2xl shadow-slate-500 rounded-xl">
            <Image src="/image.4.png" alt="image.4"
            height={400}
            width={400} className="h-9 w-9 ml-8 mt-3">
            </Image>
            <h4 className="text-xl ml-4 mt-8">
              UI/UX DESIGNER
            </h4>
            <p className=" mt-4 ml-4">
            I specialize in crafting intuitive and engaging user experiences that prioritize both usability and aesthetics. By merging thoughtful design with functionality, I ensure every interaction is seamless and impactful, ultimately enhancing user satisfaction and loyalty.
            </p>
          </div>
          </div>
          
        <div className="flex space-x-6 space-y-10 ">  
          <div className="h-[300px]  w-72 shadow-2xl shadow-slate-500 rounded-xl">
            <Image src="/image.5.png" alt="image.5"
            height={400}
            width={400} className="h-9 w-9 ml-8 mt-6">
            </Image>
            <h4 className="text-xl ml-4 mt-8">
              WEB DESIGNER
            </h4>
            <p className=" mt-4 ml-4">
            I create stunning, responsive websites that captivate visitors and convey your brand's message effectively. With a focus on aesthetics and functionality, I ensure an exceptional user experience across all devices.
            </p>
          </div>

          <div className="h-[400PX] w-72 shadow-2xl shadow-slate-600 rounded-xl">
            <Image src="/image.6.png" alt="image.6"
            height={400}
            width={400} className="h-9 w-9 ml-6 mt-6">
            </Image>
            <h4 className="text-xl mt-8 ml-4">
              BACKEND DEVELOPER
            </h4>
            <p className=" mt-4 ml-4">
            As a backend developer, I build robust server-side applications that enhance user experiences. With expertise in various programming languages and frameworks, I design databases, develop APIs, and ensure efficient data processing. My focus is on creating scalable solutions that support frontend functionality and improve overall application performance.
            </p>
          </div>
          </div>
        </div>
      </div>
    </main>
    </section>
  );
}
