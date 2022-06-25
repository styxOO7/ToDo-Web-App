import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDIzlTCABL9WIG8mKIig-2Ql_FHy-kKvzM",
    authDomain: "todo-app-bac2d.firebaseapp.com",
    databaseURL: "https://todo-app-bac2d-default-rtdb.firebaseio.com",
    projectId: "todo-app-bac2d",
    storageBucket: "todo-app-bac2d.appspot.com",
    messagingSenderId: "307841024493",
    appId: "1:307841024493:web:47c900fdf210fcceb2e7e4"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;