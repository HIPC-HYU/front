import React, { useEffect, useState } from 'react';
import { auth, db } from "../services/firebase.ts";
import { signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

interface UserData {
    department: string;
    email: string;
    name: string;
    boj_id: string;
    isProfileComplete: boolean;
}

export default function Mypage() {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const user = auth.currentUser;
            if (user) {
                const userRef = doc(db, 'users', user.uid);
                const userSnap = await getDoc(userRef);
                if (userSnap.exists()) {
                    const data = userSnap.data() as UserData;
                    setUserData(data);
                    if (!data.isProfileComplete) {
                        navigate('/signup');
                    }
                } else {
                    // 사용자 문서가 없는 경우 회원가입 페이지로 리다이렉트
                    navigate('/signup');
                }
            } else {
                navigate('/login');
            }
            setLoading(false);
        };

        fetchUserData();
    }, [navigate]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("로그아웃 중 오류 발생:", error);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!userData) {
        return null; // 또는 에러 메시지를 표시할 수 있습니다.
    }

    return (
        <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div className="md:flex">
                    <div className="p-8 w-full">
                        <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold mb-1">마이페이지</div>
                        <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{userData.name}님의 프로필</h1>
                        <div className="mt-4">
                            <div className="mb-4">
                                <p className="text-gray-500">이메일</p>
                                <p className="font-semibold">{userData.email}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-500">학과</p>
                                <p className="font-semibold">{userData.department}</p>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-500">백준 아이디</p>
                                <p className="font-semibold">{userData.boj_id}</p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="mt-6 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-200"
                        >
                            로그아웃
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}