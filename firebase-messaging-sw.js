importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/9.14.0/firebase-messaging-compat.js')

const firebaseConfig = {
    apiKey: "AIzaSyAosXpMDUQCRKIaUVUK1Ky0s_z73LhFdCk",
    authDomain: "ahmad-pwa.firebaseapp.com",
    projectId: "ahmad-pwa",
    storageBucket: "ahmad-pwa.appspot.com",
    messagingSenderId: "490730574540",
    appId: "1:490730574540:web:019be57cee66be9ca52869"
  };

const app = firebase.initializeApp(firebaseConfig)
const messaging = firebase.messaging()

// Optional: Add an event listener to handle background messages
self.addEventListener('push', (event) => {
  const payload = event.data.json();
  const options = {
    body: payload.notification.body,
    icon: payload.notification.icon
  };

  self.registration.showNotification(payload.notification.title, options);
});