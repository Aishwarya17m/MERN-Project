import { initializeApp } from "firebase/app";

import {getStorage} from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyBziyY56Vp-oE8pjljSvJOT-aID0Pmsdfc",
  authDomain: "watch-7bc67.firebaseapp.com",
  databaseURL: "https://watch-7bc67-default-rtdb.firebaseio.com",
  projectId: "watch-7bc67",
  storageBucket: "watch-7bc67.appspot.com",
  messagingSenderId: "1092856995095",
  appId: "1:1092856995095:web:436ae5f464c0019f292b52",
  measurementId: "G-8GJ914V1L6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app)