import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyDItD4q8p3PmBWfm-M9o_oxVUkOP8cubok",
    authDomain: "my-book-99f28.firebaseapp.com",
    projectId: "my-book-99f28",
    storageBucket: "my-book-99f28.appspot.com",
    messagingSenderId: "812352779734",
    appId: "1:812352779734:web:e55afb49bd4053bea22077",
    measurementId: "G-WGTX63ZWJT"
  };
  const app=firebase.initializeApp(firebaseConfig)
  export const auth =app.auth();
  export default app;