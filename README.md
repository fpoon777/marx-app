# MarxApp

## Description
The MarxApp is developed by Ke Lou for the Augmented Health Lab at Dartmouth College. It uses React Native framework on the frontend and Google firebase database as the backend. First time users need to complete a short demographic survey before using the app. The result of the survey is sent to the Google Firebase for research purposes. 


The main app has three tabs:
* Calculator (Main component that calculates the insulin prescription needed)
* ADA Information (Can be filled in by future developers when the information is available)
* Feedback (Collects bug/medicine update reports and send them to the firebase)

The calculator component asks the users for daily insulin unit intake and total number of days needed and allows the users to select `pens` and `vials`, which are two of the common insulin container shapes. Users will be directed to a medicine selection page that contains only `pens` or `vials`. Once the users have completed all the questions, the summary page will ask the users to confirm all information and then calculate. The calculated data and all user inputs are also sent to Google analytics for research purposes.

## Instruction to Run

First, use `npm install` to install all the node modules.

Then install `expo app` from either Google Playstore or Apple Store, then use `expo start` to see the app on the phone.

## Building Instruction:

To build an android version, run `expo build:android` and log onto your `expo` developer account. You can choose to build an apk for testing purpose, or build an android bundle so that it can later be signed by Google and published to the Google Playstore.

To build an ios app, run `expo build:ios`, but in order to build an installation package, you need to have an Apple developer account. 

## Download the Android Apk
You can download the android apk from the url below:

[Download Link for Android Version](https://expo.dev/@fpoon777/marx-app) (Expires on June 10, 2022).