import logo from './logo.svg';
import './App.css';
import React,{useEffect, useState} from 'react';
import firebase from './firebase';
import OneSignal from 'react-onesignal';

function App() {

  // push notifications
  // React.useEffect(() => {
  //   console.log("firebase",firebase)
  //   const messaging = firebase.messaging();
  //   messaging.requestPermission().then(() => {
  //     return messaging.getToken();
  //   }).then((data) => {
  //     console.log("token",data)
  //   })
  // })

  useEffect(() => {
    OneSignal.init({
      appId: "640be759-166d-4a2b-914c-90c1b2f82d2e"
    });
  }, []);


  return (
    <div className="App">
      <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
      <p className="text-3xl text-gray-700 font-bold mb-5">
        Demo of the Push notifications
      </p>
      <p className="text-gray-500 text-lg">
        React and Tailwind CSS in action
      </p>
    </div>
    </div>
  );
}

export default App;
