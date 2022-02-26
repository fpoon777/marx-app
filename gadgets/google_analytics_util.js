import * as Analytics from 'expo-firebase-analytics';;

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

export const trackCalculateClicked = async() =>{
    await Analytics.logEvent('calculate_clicked',1)
    .catch((e) => {
            console.log("error: ", e);            
        });
}

export const trackInsulinData = async(data) =>{
  await Analytics.logEvent('insulin_data',data)
  .catch((e) => {
          console.log("error: ", e);            
      });
}