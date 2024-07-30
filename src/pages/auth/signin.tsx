import React, { useEffect, useState } from 'react';
import { User } from 'firebase/auth';
import { signInWithGoogle, signOutUser, auth } from '../../auth/firebaseConfig';
import { FaGoogle, FaSignOutAlt } from 'react-icons/fa';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    const user = await signInWithGoogle();
    if (user) {
      console.log("로그인 성공:", user);
    }
  };

  const handleSignOut = async () => {
    await signOutUser();
    console.log("로그아웃 완료");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-cyan-500 to-blue-200">
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md">
        {user ? (
          <div className="text-center">
            <img 
              src={user.photoURL || 'https://via.placeholder.com/100'} 
              alt="Profile" 
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-400"
            />
            <h2 className="text-2xl font-bold text-gray-800 mb-4">안녕하세요, {user.displayName}님!</h2>
            <p className="text-gray-600 mb-6">{user.email}</p>
            <button 
              onClick={handleSignOut}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out flex items-center justify-center w-full"
            >
              <FaSignOutAlt className="mr-2" /> 로그아웃
            </button>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">환영합니다</h2>
            <p className="text-gray-600 mb-8">계속하려면 로그인해 주세요.</p>
            <button 
              onClick={handleSignIn}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out flex items-center justify-center w-full"
            >
              <FaGoogle className="mr-2" /> Google로 로그인
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;