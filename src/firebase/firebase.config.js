// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBK0TZ7AvDq7pcwilZdSZlf6CfvYjVay0k",
  authDomain: "travel-meta.firebaseapp.com",
  projectId: "travel-meta",
  storageBucket: "travel-meta.appspot.com",
  messagingSenderId: "543412757316",
  appId: "1:543412757316:web:8d80629e198fd6c209ed11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;