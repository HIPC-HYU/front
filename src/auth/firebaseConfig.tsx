import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDpNoanzmxDVdKcVcSpfwUoCDZb_eM91Lg',
  authDomain: 'hipc-hyu.firebaseapp.com',
  projectId: 'hipc-hyu',
  storageBucket: 'hipc-hyu.appspot.com',
  messagingSenderId: '347838232778',
  appId: '1:347838232778:web:01fa4786b903212caf1c33',
  measurementId: 'G-NM4TDP53PX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export const signInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error('로그인 실패:', error);
    return null;
  }
};

export const signOutUser = async (): Promise<void> => {
  try {
    await auth.signOut();
    console.log('로그아웃 성공');
  } catch (error) {
    console.error('로그아웃 실패:', error);
  }
};

export { app, analytics, auth };
