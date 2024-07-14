import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function SideMenu({ sideMenu, setSideMenu }: {sideMenu:boolean,setSideMenu:React.Dispatch<React.SetStateAction<boolean>>}) {
  const [isVisible, setIsVisible] = useState(sideMenu);

  useEffect(() => {
    if (sideMenu) {
      setIsVisible(true);
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    }
  }, [sideMenu]);

  return (
    <div className={`fixed inset-0 z-20 transition-all duration-300 ease-in-out ${isVisible ? 'visible' : 'invisible'}`}>
      <div 
        onClick={() => setSideMenu(false)} 
        className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${sideMenu ? 'bg-opacity-60' : 'bg-opacity-0'}`}
      />
      <div 
        className={`absolute flex font-pretendard text-2xl font-semibold p-4 flex-col top-0 right-0 w-80 h-full bg-white transform transition-transform duration-300 ease-in-out ${sideMenu ? 'translate-x-0' : 'translate-x-full'}`}
          >
              <Link to={'/about'} className='mt-10 mb-4'>소개</Link>
              <Link to={'/rank'} className='mb-4'>랭크</Link>
              <Link to={'/notice'} className=''>공지사항</Link>

      </div>
    </div>
  )
}