import { Routes, Route } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import RankPage from './pages/Rankpage'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import SignUp from './pages/auth/signup'
import SignIn from './pages/auth/signin'
import MyPage from './pages/mypage'
import BoardList from './pages/board/BoardList.tsx'
function App() {
  
  return (
    <>    
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signin' element={<SignIn/>} />
        <Route path='/rank' element={<RankPage />} />
        <Route path='/mypage' element={<MyPage />} />
        <Route path='/board'>
          <Route path='list'>
            <Route path='all' element={<BoardList/>}/>
          </Route>
          <Route path=':id' />
        </Route>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
