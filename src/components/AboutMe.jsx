const AboutMe = () => {
  return (
    <section>
            <section id="about" className="relative mt-96" >
                <div className="absolute z-0 -top-40 left-0 xs:-top-72">
                    <img className=" xs:h-[1200px]" src="/Ellipse8.png" alt="" />
                </div>
            </section>

            <section className="text-left">
                <div className="px-4">
                     <h2 className=" text-[#9BA4ED] font-semibold text-4xl xs:absolute xs:-bottom-[1150px] xs:left-36 xs:w-[400px] xs:pl-12">Build <span className=" text-white  text-left text-4xl font-bolds">whole new world</span> </h2>
                </div>
                <div className="  py-12 px-4">
                    <p className="text-white text-sm pb-4 xs:absolute xs:-bottom-[1250px] xs:left-40 xs:w-[400px] xs:pl-10 xs:text-sm">
Learn more about me in my social networks which are in the contact me section, we can develop many more projects, we are very confident in our products, join us.</p>
                </div>
            </section>
            
            <article className="bg-black w-full">
            <section className="relative bg-black">

                <div className="absolute left-2 p-2 xs:left-[850px]">
                    <img className="xs:w-[400px]" src="/ImageLanding/background2.png" alt="" />
                </div>
                <div className="absolute p-2 top-48 left-10 xs:left-[860px] xs:top-56">
                    <img className="xs:w-[300px]" src="/ImageLanding/Ellipsedown2.png" alt="" />
                </div>
                <div className="absolute p-2 left-20 top-2 xs:left-[920px] xs:top-0">
                    <img className="xs:w-[220px]" src="/ImageLanding/imga2.png" alt="" />
                </div>

            </section>
            </article>
    </section>
  )
}

export default AboutMe