const Projects = () => {
  return (
    <section> 
            <section id="projects" className="relative" >
                <div className="absolute -top-72 right-0 ">
                    <img src="/Ellipse7.png" alt="" />
                </div>
            </section>

            <section className="text-left">
                <div className="px-4">
                     <h2 className=" text-[#9BA4ED] font-semibold text-4xl xs:absolute xs:-bottom-[700px] xs:right-36 xs:w-[400px] xs:pl-12">Last landing <span className=" text-white  text-left text-4xl font-bolds">and website projects</span> </h2>
                </div>
                <div className="  py-12 px-4">
                    <p className="text-white text-sm pb-4 xs:absolute xs:w-[400px] xs:-bottom-[800px] xs:right-32 xs:pl-10 xs:text-sm">Here I want to present one of the many projects that we are developing giving the best application and user experience, you can try each one of them since they are working 100%</p>
                </div>
            </section>
            
            <article className="">
            <section className="relative bg-black">

                <div className="absolute left-2 p-2 xs:left-20">
                    <img className="xs:w-[400px]" src="/ImageLanding/background.png" alt="" />
                </div>
                <div className="absolute p-2 top-48 left-16 xs:left-40 xs:top-64 ">
                    <img className="xs:w-[300px]" src="/ImageLanding/Ellipsedown.png" alt="" />
                </div>
                <div className="absolute p-2 left-14 xxs:top-2 xs:left-40">
                    <img  className="xs:w-[250px]" src="/ImageLanding/imga1.png" alt="" />
                </div>

            </section>
            </article>
    </section>
  )
}

export default Projects