import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDFYmsztLtrVrm3nHVgj96MfK_gwqu0d34",
  authDomain: "vuejs-demo-d773e.firebaseapp.com",
  projectId: "vuejs-demo-d773e",
  storageBucket: "vuejs-demo-d773e.appspot.com",
  messagingSenderId: "684138343077",
  appId: "1:684138343077:web:89db6beb17b16393f8fb4c",
  measurementId: "G-LN43WPS0K7"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
// ấn vào cài đặt ứng dụng sẽ thấy 