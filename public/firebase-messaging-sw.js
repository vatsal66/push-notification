importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.20.0/firebase-messaging.js");


firebase.initializeApp({
    apiKey: "AIzaSyAh0Gnkkup1ljR-mvGWRk9hegQkNU43OGA",
    authDomain: "first-cloud-messaging-ab9ff.firebaseapp.com",
    projectId: "first-cloud-messaging-ab9ff",
    storageBucket: "first-cloud-messaging-ab9ff.appspot.com",
    messagingSenderId: "28475836786",
    appId: "1:28475836786:web:54ddf732694628aae7f5eb"
});

const initMessaging = firebase.messaging();