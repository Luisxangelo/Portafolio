import { useDispatch, useSelector } from "react-redux"
import { changeIsMenu } from "../store/slices/menuslice";


const Header = () => {

   const dispatch = useDispatch()
  
   const{isShowMenu} = useSelector(store => store.menu)

    const handleOnChange = () =>dispatch(changeIsMenu())


  return (

    <section className="relative">
        
        <div className="absolute z-0 top-8 left-16 max-[321px]:left-8  min-[321px]:grid">
            <img src="/Logo.png" alt="" />
        </div>
       
        <section className="relative">
            <div className="absolute z-10 top-8 right-8 min-[630px]:hidden">
                <button onClick={handleOnChange}>  <i className='bx bx-menu text-white text-3xl max-[630px]:text-lg'></i>
                </button>
                </div>
            <section className={` ${isShowMenu? "bg-black/50 rounded-2xl":"hidden"} relative z-10 w-[200px]`}>
            <ul className={`text-white gap-2 p-2 min-[630px]:hidden  ${isShowMenu? "bg-black/50 rounded-2xl -left-72 ":"hidden"}`}>
            <a href="#/"><li className="p-2 hover:bg-slate-500/50 rounded-md">Home</li></a>
            <a href="#projects"><li className="p-2 hover:bg-slate-500/50 rounded-md">Projects</li></a>
            <a href="#about"><li className="p-2 hover:bg-slate-500/50 rounded-md">About Me</li></a>
            <a href="#contact">   <li className="p-2 hover:bg-slate-500/50 rounded-md">Contac Me</li></a>
            </ul>
            </section>
           
           <div className="max-[630px]:hidden text-white text-center flex p-8  place-content-center gap-16 text-base">
                <a href="#/"><h3>Home</h3></a>
                <a href="#projects"><h3>Projects</h3></a>
                <a href="#about"><h3>About Me</h3></a>
                <a href="#contact"><h3>Contac Me</h3></a>
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