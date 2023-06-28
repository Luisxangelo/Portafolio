const Header = () => {


  return (
    <section className="relative">
        
        <div className="absolute top-8 left-16 max-[321px]:left-8  min-[321px]:grid">
            <img src="/Logo.png" alt="" />
        </div>
       
        <section className="relative">
            <div className="absolute top-8 right-8 min-[630px]:hidden">
                 <i className='bx bx-menu text-white text-3xl max-[630px]:text-lg'></i>
             </div>
           <div className="max-[630px]:hidden text-white text-center flex p-8  place-content-center gap-16 text-base">
                <h3>Home</h3>
                <h3>Projects</h3>
                <h3>About Me</h3>
                <h3>Contac Me</h3>
            </div>
        </section>
        <section className="">
        <div className="xxs:absolute top-0 right-0">
            <img className="min-[321px]:w-[700px]" src="/Logotipo.png" alt="" />
        </div>
        <div className="absolute top-0">
            <img src="/Ellipse1.png" alt="" />
        </div>
        </section>
        </section>
  )
}

export default Header