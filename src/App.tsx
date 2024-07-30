import { Routes, Route, Outlet } from 'react-router-dom'
import Main from './pages/Main'
import About from './pages/About'
import RankPage from './pages/Rankpage'
import Navbar from './components/ui/Navbar'
import Footer from './components/ui/Footer'
import SignUp from './pages/auth/signup'
import SignIn from './pages/auth/signin'
import MyPage from './pages/mypage'
import BoardList from './pages/board/BoardList.tsx'
import QuestionDetail from './pages/questionDetail.tsx'

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

function App() {

  return (
    <div className='flex flex-col min-h-screen'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path='about' element={<About />} />
          <Route path='signup' element={<SignUp />} />
          <Route path='signin' element={<SignIn />} />
          <Route path='rank' element={<RankPage />} />
          <Route path='mypage' element={<MyPage />} />
          <Route path='board'>
            <Route path='list'>
              <Route path='all' element={<BoardList />} />
            </Route>
            <Route path='question/:id' element={<QuestionDetail />} />
          </Route>
        </Route>
      </Routes>
    </div>)
}

export default App
