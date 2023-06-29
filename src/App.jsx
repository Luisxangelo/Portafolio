import AboutMe from './components/AboutMe'
import './App.css'
import ContactMe from './components/ContactMe'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'


function App() {
  return (
    <main className='bg-black h-full font-principal-font'>
      
    <Header />
    <Home id="/"/>
    <Projects id="projects"/>
    <AboutMe id="about"/>
    <ContactMe id="contact"/>
    
    

    </main>
  )
}

export default App
