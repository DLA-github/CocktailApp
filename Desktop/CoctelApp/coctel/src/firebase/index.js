import fb from "firebase"
// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCuwizvKljYnibYDKf5_VZU9EqNRYqnFFY",
    authDomain: "cocktailtry.firebaseapp.com",
    databaseURL: "https://cocktailtry.firebaseio.com",
    projectId: "cocktailtry",
    storageBucket: "",
    messagingSenderId: "567357079084",
    appId: "1:567357079084:web:cf4133d66d165dc0"
};
// Initialize Firebase
const firebaseApp = fb.initializeApp(config);


export default firebaseApp.firestore();