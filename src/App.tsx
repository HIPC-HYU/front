import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import RankPage from './pages/Rankpage'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import SignUp from './pages/auth/signup'
import SignIn from './pages/auth/signin'
function App() {
  
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/rank' element={<RankPage />}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
