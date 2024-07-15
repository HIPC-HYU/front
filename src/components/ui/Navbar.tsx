import { GiHamburgerMenu } from "react-icons/gi"
import { Link } from "react-router-dom"
import SideMenu from "./SideMenu"
import { useState } from "react"
import {Badgelg} from "./badge";

export default function Navbar() {
    const [sideMenu, setSideMenu] = useState(false);
    
    function onSideMenuClick() {
        setSideMenu(!sideMenu);
    }

    return (
        <header className="w-full h-[64px] fixed z-50 bg-white">
            <nav className="flex justify-between items-center max-w-[1280px] h-full px-4 mx-auto">
                <Link to={'/'}>
                    <img src="/assets/images/Logo_web.png" height={65} width={120} alt="Logo" />
                </Link>
                <GiHamburgerMenu className="text-2xl block md:hidden" onClick={onSideMenuClick} />
                <div className="hidden text-lg md:flex items-center text-gray-500">
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