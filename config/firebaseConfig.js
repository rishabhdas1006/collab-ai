// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIRBASE_API_KEY,
	authDomain: "collab-ai-e4e89.firebaseapp.com",
	projectId: "collab-ai-e4e89",
	storageBucket: "collab-ai-e4e89.appspot.com",
	messagingSenderId: "345055974371",
	appId: "1:345055974371:web:1cd840d04b5b2558c946d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
