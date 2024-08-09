import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { auth, db } from "../services/firebase.js";
import { Button, TextField } from '@mui/material';

export default function SignUp() {
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User | null>(null);
    const [signUpForm, setSignUpForm] = useState({
        boj_id: '',
        name: '',
        department: ''
    });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setCurrentUser(user);
            } else {
                navigate('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);


    const handleSignUpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setSignUpForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (!currentUser) {
            console.error("No user logged in");
            return;
        }
        try {
            await setDoc(doc(db, "users", currentUser.uid), {
                ...signUpForm,
                email: currentUser.email,
                photoURL: currentUser.photoURL,
                updatedAt: new Date(),
                isProfileComplete: true
            });
            console.log('Sign up form submitted:', signUpForm);
            navigate('/'); // 홈페이지로 리다이렉트
        } catch (error) {
            console.error("Error updating user document: ", error);
        }
    };

    return (
        <div className='deepBlue w-full h-screen flex items-center justify-center'>
            <div className='bg-white flex md:flex-row flex-col items-center max-w-4xl w-full rounded-2xl h-[600px] relative'>
                <div
                    className='md:w-1/2 w-full bg-blue-950 md:h-full maxmd:rounded-t-2xl md:rounded-l-2xl h-1/2 flex flex-col justify-center items-center'
                    style={{
                        backgroundImage: "url(./assets/images/hipc_bgmain.png)",
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    <div className='text-center text-3xl text-white'>
                        회원가입
                    </div>
                </div>
                <div className='md:w-1/2 w-full md:h-full h-1/2 p-4'>
                    {currentUser && (
                        <div className='w-full h-32 my-10 flex flex-col justify-center items-center'>
                            <img src={currentUser.photoURL || undefined} width={100} height={100} className='rounded-full' />
                            <p className='font-pretendard text-gray-700 mt-2'>{currentUser.displayName || currentUser.email}</p>
                        </div>
                    )}
                    <div className='pt-4'>
                        <form onSubmit={handleSignUp}>
                            <TextField
                                fullWidth
                                margin="normal"
                                label="백준 아이디"
                                name="boj_id"
                                value={signUpForm.boj_id}
                                onChange={handleSignUpChange}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="이름"
                                name="name"
                                value={signUpForm.name}
                                onChange={handleSignUpChange}
                            />
                            <TextField
                                fullWidth
                                margin="normal"
                                label="학과"
                                name="department"
                                value={signUpForm.department}
                                onChange={handleSignUpChange}
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                sx={{ mt: 3 }}
                            >
                                회원가입
                            </Button>
                        </form>
                    </div>

                </div>
            </div>
        </div>

    );
}
