const Home = () => {
  return (
    <section>
        <section id="/" className="relative z-0" >
             <div className="absolute top-56 max-[630px]:absolute left-0 z-0 ">
                <img src="/Ellipse1.png" alt="" />
            </div>
         </section>

        <section className="text-left xxs:pt-[600px]">
            <div className="px-2 ">
                <h2 className=" text-[#9BA4ED] font-semibold text-4xl xs:absolute xs:bottom-60 xs:w-[400px] xs:pl-12 xs:left-12">Hi! <span className=" text-white  text-left text-4xl font-bolds">I{"´"}am a backend developed </span> </h2>
             </div>

            <div className="  py-12 px-4">
               <p className="text-white pb-4 text-sm xs:absolute xs:bottom-36 xs:w-[400px] xs:pl-10 xs:text-sm xs:left-16">I’m probably the most passionate developer you will ever get to work with. If you have a great project that needs some amazing skills, I’m your guy.</p>
            <button className="relative text-white border-solid border-white border-2 rounded-lg px-4 py-1 text-center xs:absolute xs:bottom-24 xs:left-24 z-10"><a href="#about">Click Here</a></button>
            </div>            
        </section>
        <section className="relative z-0" >
             <div className="absolute xs:-top-96 z-0 ">
                <img src="/Ellipse6.png" alt="" />
            </div>
         </section>
        <section className="relative z-20">
        <section className="grid bg-gray-800/20 text-center m-12 p-4 rounded-2xl gap-2 xs:grid-cols-6 xs:transition-colors xs:duration-200  xxs:grid-cols-2 xxs:mx-360">
            <div className="bg-gray-700/20 rounded-2xl m-2 p-8 ">
                <div className="flex place-content-center pb-4">
                  <a href="https://carritodecomprasterminado.netlify.app/"><img src="/images/Ecommerce.png" alt="" /></a> 
                </div>
                <a href="https://carritodecomprasterminado.netlify.app/"><h1 className="text-white">E-comerce</h1></a>
            </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center pb-4">
                <a href="https://spacephrase.netlify.app/"><img src="/images/Pagephrase.png" alt="" /></a>
            </div>
            <a href="https://spacephrase.netlify.app/"><h1 className="text-white">Phrase of Page Aleatorium</h1></a>
        </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center pb-4">
              <a href="https://appclimate1.netlify.app/"><img src="/images/Climateapp.png" alt="" /></a>
            </div>
           <a href="https://appclimate1.netlify.app/"><h1 className="text-white">Climate App</h1></a>
        </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center justify-center pb-4">
                <a href="https://rickandmorty321.netlify.app/"><img src="/images/Rickandmortyapp.png" alt="" /></a>
            </div>
            <a href="https://rickandmorty321.netlify.app/"><h1 className="text-white">App Rick and Morty</h1></a>
        </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center justify-center pb-4">
               <a href="https://froms4.netlify.app/"> <img src="/images/forms.png" alt="" /></a>
            </div>
           <a href="https://froms4.netlify.app/"> <h1 className="text-white">Forms</h1></a>
        </div>
        <div className="bg-gray-700/20 rounded-2xl m-2 p-8">
            <div className="flex place-content-center justify-center pb-4">
                <a href="https://pokedexprimaryversion.netlify.app/"><img src="/images/Pokemonapp.png" alt="" /></a>
            </div>
           <a href="https://pokedexprimaryversion.netlify.app/"> <h1 className="text-white">Pokemon App</h1></a>
        </div>
        </section>
        </section>
</section>




  )
}

export default Home