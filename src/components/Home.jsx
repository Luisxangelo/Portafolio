const Home = () => {
  return (
    <section>
        <section className="relative" >
             <div className="absolute top-56 max-[630px]:absolute left-0 ">
                <img src="/Ellipse1.png" alt="" />
            </div>
         </section>

        <section className="text-left xxs:pt-[600px]">
            <div className="px-2 ">
                <h2 className=" text-[#9BA4ED] font-semibold text-4xl xs:absolute xs:bottom-48 xs:w-[400px] xs:pl-12">Hi! <span className=" text-white  text-left text-4xl font-bolds">I{"´"}am a backend developed </span> </h2>
             </div>

            <div className="  py-12 px-4">
               <p className="text-white pb-4 text-sm xs:absolute xs:bottom-28 xs:w-[400px] xs:pl-10 xs:text-xs">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
            <button className="text-white border-solid border-white border-2 rounded-lg px-4 py-1 text-center xs:absolute xs:bottom-20 xs:left-14">Click Here</button>
            </div>            
        </section>
        <section className="relative" >
             <div className="absolute xs:-top-96 ">
                <img src="/Ellipse6.png" alt="" />
            </div>
         </section>

        <section className="grid bg-gray-800/20 text-center m-12 p-4 rounded-2xl gap-2 xs:grid-cols-4 xs:transition-colors xs:duration-200 xs:mx-40 xxs:grid-cols-2 xxs:mx-360">
            <div className="bg-gray-700/20 rounded-2xl m-2 p-8 ">
                <div className="flex place-content-center pb-4">
                    <img src="/VrIcon.png" alt="" />
                </div>
                 <h1 className="text-white">Experience the world through VR glasses</h1>
            </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center pb-4">
                <img src="/Icon360.png" alt="" />
            </div>
            <h1 className="text-white">View all your surrounding with 360</h1>
        </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center pb-4">
              <img src="/Gaming.png" alt="" />
            </div>
            <h1 className="text-white">Incredible gaming experience</h1>
        </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center pb-4">
                <img src="/MoneyIcon.png" alt="" />
            </div>
            <h1 className="text-white">Making meetings and tours easier</h1>
        </div>
        </section>

</section>




  )
}

export default Home