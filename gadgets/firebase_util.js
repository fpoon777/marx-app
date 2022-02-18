import firebase from 'firebase/compat/app';;
import { getDatabase, ref, onValue, set } from 'firebase/compat/database';


const firebaseConfig = {
    apiKey: "AIzaSyDzR6huEWNsr6TuP8bKD1M-is03osZMjWE",
    authDomain: "marx-861fa.firebaseapp.com",
    databaseURL: "https://marx-861fa-default-rtdb.firebaseio.com",
    projectId: "marx-861fa",
    storageBucket: "marx-861fa.appspot.com",
    messagingSenderId: "963546447458",
    appId: "1:963546447458:web:8ddb233f31c88b44151b3b",
    measurementId: "G-S15GVFZH1C"
  };
  
// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

// firebase.initializeApp(firebaseConfig);
const db = firebase.database()
// const analytics = getAnalytics(app);

export function storeFeedback(email, feedback, detail) {
    db.ref().child('feedback').push({
        emailAddress: email,
        feedbackReason: feedback,
        details: detail,
    });
}

export function storePersonalInfo(dataObject){
    db.ref().child('Personal Info').push({
        username: dataObject.username,
        age: dataObject.age,
        gender: dataObject.gender,
        race: dataObject.race,
        state: dataObject.state,
        education: dataObject.education,
        job: dataObject.job,
        year: dataObject.year,
        employer: dataObject.employer,
        email: dataObject.email
    });
}

// export default storeFeedback;