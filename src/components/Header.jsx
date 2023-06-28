import { useDispatch, useSelector } from "react-redux"
import { changeIsMenu } from "../store/slices/menuslice";
import store from "../store";

const Header = () => {

   const dispatch = useDispatch()
  
   const{isShowMenu} = useSelector(store => store.menu)

    const handleOnChange = () =>dispatch(changeIsMenu())


  return (

    <section className="relative">
        
        <div className="absolute top-8 left-16 max-[321px]:left-8  min-[321px]:grid">
            <img src="/Logo.png" alt="" />
        </div>
       
        <section className="relative">
            <div className="absolute top-8 right-8 min-[630px]:hidden">
                <button onClick={handleOnChange}>  <i className='bx bx-menu text-white text-3xl max-[630px]:text-lg'></i>
                </button>
                </div>
            <section className={` ${isShowMenu? "bg-black/50 rounded-2xl":"hidden"} w-[10px]`}>
            <ul className={`text-white gap-2 p-2 min-[630px]:hidden ${isShowMenu? "bg-black/50 rounded-2xl -left-72":"hidden"}`}>
                <li className="p-2 hover:bg-slate-500/50 rounded-md">Home</li>
                <li className="p-2 hover:bg-slate-500/50 rounded-md">Projects</li>
                <li className="p-2 hover:bg-slate-500/50 rounded-md">About Me</li>
                <li className="p-2 hover:bg-slate-500/50 rounded-md">Contac Me</li>
            </ul>
            </section>
           
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