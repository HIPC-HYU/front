import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import RankPage from './pages/Rankpage'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
function App() {
  
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About/>} />
        <Route path='/rank' element={<RankPage />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
