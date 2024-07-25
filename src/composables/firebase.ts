import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDfJNVISXFNaHOfsEZElWIG5kS61gnKF2A",
    authDomain: "vue-blogsite-9b0ef.firebaseapp.com",
    projectId: "vue-blogsite-9b0ef",
    storageBucket: "vue-blogsite-9b0ef.appspot.com",
    messagingSenderId: "602708070655",
    appId: "1:602708070655:web:4b034a4e30866243873cca"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const todosRef = collection(db, 'todos')