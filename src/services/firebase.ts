import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from "firebase/auth"

// Firebase 설정
const firebaseConfig = {

  apiKey: "AIzaSyDpNoanzmxDVdKcVcSpfwUoCDZb_eM91Lg",
  authDomain: "hipc-hyu.firebaseapp.com",
  projectId: "hipc-hyu",
  storageBucket: "hipc-hyu.appspot.com",
  messagingSenderId: "347838232778",
  appId: "1:347838232778:web:01fa4786b903212caf1c33",
  measurementId: "G-NM4TDP53PX",

};

// Firebase 초기화
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
