const ContactMe = () => {

  return (
    <section className="mt-96 text-white p-6 pb-60 xs:mx-[300px] xxs:mx-52 xs:mt-[500px]">
        <div className="bg-gray-700/40 rounded-3xl p-4 py-36 xs:py-24">
            <h1 className="font-bold text-center text-4xl p-2">Contact Me!</h1>
            <p className="py-8 text-center">You can contact me through all my social networks!</p>
        <div className="grid grid-flow-col gap-2"> 
        <button className="border-2 rounded-xl p-3 hover:bg-blue-700/50 "><a href="https://www.facebook.com/luisxangelo/"><i className='bx bxl-facebook-circle'></i></a></button>
        <button className="border-2 rounded-xl p-3 hover:bg-red-300/50 "><a href="https://www.instagram.com/luisxangelo/"><i className='bx bxl-instagram'></i></a></button>
        <button className="border-2 rounded-xl p-3 hover:bg-gray-500/50 "><a href="https://github.com/Luisxangelo"><i className='bx bxl-github'></i></a></button>
        <button className="border-2 rounded-xl p-3 hover:bg-indigo-500/50 "><a href="https://www.linkedin.com/in/angeloaroni/"><i className='bx bxl-linkedin-square '></i></a></button>
        </div>
        </div>
    </section>
  )
}

export default ContactMe