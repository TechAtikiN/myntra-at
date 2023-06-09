import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCWQ9B4d_oIQURGUfaoIEbyvrObOOKJ7Yg",
  authDomain: "ecom-at.firebaseapp.com",
  projectId: "ecom-at",
  storageBucket: "ecom-at.appspot.com",
  messagingSenderId: "279027094916",
  appId: "1:279027094916:web:24e0e0aae14d92b50139d1"
}

const app = initializeApp(firebaseConfig)

const db = getFirestore(app);

export default db
