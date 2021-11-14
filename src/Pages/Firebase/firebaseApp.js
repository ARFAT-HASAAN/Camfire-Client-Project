import firebaseConfig from "./FirebaseConfig";
import { initializeApp } from "firebase/app";

const firebaseApp = () => {

    initializeApp(firebaseConfig);
}

export default firebaseApp