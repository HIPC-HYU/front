import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import SideMenu from "./SideMenu"
import { useState } from "react"
import {Badgelg} from "./badge";
import GetScrollY from "../../hooks/getScrollY"
export default function Navbar() {
    const [sideMenu, setSideMenu] = useState(false);
    
    function onSideMenuClick() {
        setSideMenu(!sideMenu);
    }
    const scrollY  = GetScrollY()
    return (
        <header className={`w-full h-[64px] fixed z-50 ${scrollY >= 64 ?'bg-white':'bg-transparent'}`}>
            <nav className="flex justify-between items-center max-w-[1280px] h-full px-4 mx-auto">
                <Link to={'/'}>
                    <img src="/assets/images/hipc_logo.svg" className="md:w-[110px] w-[100px] h-fit" alt="Logo" />
                </Link>
                <GiHamburgerMenu className="text-2xl block md:hidden" onClick={onSideMenuClick} />
                <div className={`hidden text-lg md:flex items-center ${scrollY>=64?'text-gray-500':'text-black'}`}>
                    <Link className="mx-5" to={'/about'}>소개</Link>
                    <Link className="mx-5" to={'/rank'}>랭킹</Link>
                    <Link className="mx-5" to={'/board/list/all'}>게시판</Link>
                    <Link className="ml-5" to={'/signin'}><Badgelg color={'#000000'} text="로그인" /></Link>
                </div>
            </nav>
            <SideMenu sideMenu={sideMenu} setSideMenu={setSideMenu} />
        </header>
    )
}