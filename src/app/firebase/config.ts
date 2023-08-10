import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBaleabKYS3N9kPGN4cr3JlwtUc3aslya8",
    authDomain: "pplq-545c5.firebaseapp.com",
    databaseURL: "https://pplq-545c5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pplq-545c5",
    storageBucket: "pplq-545c5.appspot.com",
    messagingSenderId: "207414189674",
    appId: "1:207414189674:web:fc4f829df5c5d510bf7413",
    measurementId: "G-TL043PS4VX"
};

const app = initializeApp(firebaseConfig);

export const database = getDatabase();