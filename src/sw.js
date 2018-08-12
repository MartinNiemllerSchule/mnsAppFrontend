importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.3.0/firebase-messaging.js');
// Initialize Firebase
const config = {
	apiKey: "AIzaSyD5O2ZjNd8ChC8SmocLfjhQ2f_V12FcWAM",
	authDomain: "vapp-mns.firebaseapp.com",
	databaseURL: "https://vapp-mns.firebaseio.com",
	projectId: "vapp-mns",
	storageBucket: "vapp-mns.appspot.com",
	messagingSenderId: "289478987889"
};
firebase.initializeApp(config);


const messaging = firebase.messaging();

/**
 * Here is is the code snippet to initialize Firebase Messaging in the Service
 * Worker when your app is not hosted on Firebase Hosting.

 // [START initialize_firebase_in_sw]
 // Give the service worker access to Firebase Messaging.
 // Note that you can only use Firebase Messaging here, other Firebase libraries
 // are not available in the service worker.

 // Initialize the Firebase app in the service worker by passing in the
 // messagingSenderId.

 // Retrieve an instance of Firebase Messaging so that it can handle background
 // messages.
 const messaging = firebase.messaging();
 // [END initialize_firebase_in_sw]
 **/

var handleBackgroundMessage = payload => {
	console.log('[sw.js] Received background message ', payload);
	/* Customize notification here
	const notificationTitle = 'MNS sagt';
	const notificationOptions = {
		body: 'Background Message body.', //payload.data
		icon: './images/mns-icon-1x.png'
	};
	return self.registration.showNotification(notificationTitle, notificationOptions);
	*/
}

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(handleBackgroundMessage);
// [END background_handler]

self.addEventListener('push', function (event) {
	if (event.data) {
		console.log('[sw.js] This push event: ', event.data);
		console.debug('[sw.js] ', navigator.userAgent);
		handleBackgroundMessage(event.data);
	} else {
		console.log('[sw.js] This push event has no data.');
	}
});
