const firebaseConfig = {
    apiKey: "AIzaSyATg7ZwxP1C6cjNmtjxuuHCKDlq0v_ijho",
    authDomain: "g-chat-258ae.firebaseapp.com",
    projectId: "g-chat-258ae",
    storageBucket: "g-chat-258ae.appspot.com",
    messagingSenderId: "914908545998",
    appId: "1:914908545998:web:7a27802edfe80ee0b8a19f"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};