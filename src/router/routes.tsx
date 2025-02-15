import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Mypage from "../pages/Mypage"
import About from "../pages/About"
import Rank from "../pages/Rank"
import SignUp from "../pages/SignUp"
import PrivateRoute from "../components/PrivateRoute"
import Board from "../pages/board/Board"
import BoardDetail from "../pages/board/BoarderDetail"
import AskForm from "../pages/board/AskFrom"
import QuestionEdit from "../components/question/QuestionEdit"


export default function Router() {
    return (
        <div className="min-h-[calc(100vh-12rem)] w-full h-auto">
            <Routes>
                <Route index element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/about" element={<About />} />
                <Route path="/rank" element={<Rank />} />
                <Route path="/board" element={<Board />} />
                <Route path="/board/:id" element={<BoardDetail />} />
                <Route path="/board/:id/edit" element={<QuestionEdit />} />
                <Route path="/ask" element={<PrivateRoute>
                    <AskForm />
                </PrivateRoute>} />
            </Routes>
        </div>
    )
}