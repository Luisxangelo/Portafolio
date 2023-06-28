import { Route, Routes } from 'react-router-dom'
import AboutMe from './AboutMe'
import './App.css'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'


function App() {
  return (
    <main className='bg-black h-full font-principal-font'>

    <Header/>
    <Routes>
       <Route path='/' element={<Home/>}/>

       <Route path='/projects' element= {<Projects/>}/>
    
       <Route path='about' element= {<AboutMe/>}/>
        
       <Route path='contact' element={<ContactMe/>}/>
    </Routes>
    

    </main>
  )
}

export default App
