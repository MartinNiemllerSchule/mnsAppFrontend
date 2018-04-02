/*
	Stellt Firebase Cloud Messaging bereit

 */
define('fbm', ['firebase'], function (firebase) {
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

	// messaging
	const messaging = firebase.messaging();

	// ServiceWorker registrieren
	navigator.serviceWorker.register('./scripts/vendor/firebase-messaging-sw.js')
		.then((registration) => {
			messaging.useServiceWorker(registration);
		});

	// Callback fired if Instance ID token is updated.
	messaging.onTokenRefresh(function () {
		messaging.getToken()
			.then(function (refreshedToken) {
				console.log('Token refreshed.');
				// Indicate that the new Instance ID token has not yet been sent to the app server.
				setTokenSentToServer(false);
				// Send Instance ID token to app server.
				sendTokenToServer(refreshedToken);
				/*
				// [START_EXCLUDE]
				// Display new Instance ID token and clear UI of all previous messages.
				resetUI();
				// [END_EXCLUDE]
				*/
			})
			.catch(function (err) {
				console.log('Unable to retrieve refreshed token ', err);
				// showToken('Unable to retrieve refreshed token ', err);
			});
	}); // [END refresh_token]

	// [START receive_message]
	// Handle incoming messages. Called when:
	// - a message is received while the app has focus
	// - the user clicks on an app notification created by a sevice worker `messaging.setBackgroundMessageHandler` handler.
	messaging.onMessage(function (payload) {
		console.log("Message received. ", payload);
		/*
		// [START_EXCLUDE]
		// Update the UI to include the received message.
		appendMessage(payload);
		// [END_EXCLUDE]
		*/
	}); // [END receive_message]

	messaging.ein = function () {
		return new Promise((resolve, reject) => {
			messaging.getToken()
				.then(function (currentToken) {
					if (currentToken) {
						console.log('[messaging.ein] Token gefunden');
						resolve({'token': currentToken});
					} else {
						// hole Erlaubnis ein
						console.log('[messaging.ein] Requesting permission...');
						// [START request_permission]
						messaging.requestPermission()
							.then(function () {
								console.log('[messaging.ein] Notification permission granted.');
								setTokenSentToServer(false);
								// Retrieve an Instance ID token for use with FCM.
								messaging.getToken()
									.then((cToken) => {
										messaging.sendTokenToServer(cToken);
										resolve({'token': cToken});
									})
									.catch(() => {
										reject('[messaging.ein] requestPermission gescheitert');
									});
							})
							.catch(function (err) {
								reject('[messaging.ein] Unable to get permission to notify.' + err);
							});
						// [END request_permission]
					}
				})
				.catch(e => { reject('[messaging.ein.getToken] gescheitert: ' + e); });
		});
	};

	messaging.aus = function () {

	};

	/*
	Bereitstellung von Funktionen, die aufgerufen werden müssen
	 */

	// Send the Instance ID token your application server, so that it can:
	// - send messages back to this app
	// - subscribe/unsubscribe the token from topics
	messaging.sendTokenToServer = function (currentToken) {
		if (!isTokenSentToServer()) {
			console.log('Sending token to server...');

			// Send the current token to your server.
			const sendData = 'fname=setToken&token=' + currentToken;
			$.ajax({
				url: urlApi,
				dataType: 'json',
				crossDomain: true,
				data: sendData,
				success: function (response) {
					if (response.erfolg) setTokenSentToServer(true);
				},
				error: function (response, textStatus, e) {
					console.debug('FCM Token wurde nicht richtig übermittelt (ajax)', response, textStatus, e);
				}
			});

		} else {
			console.log('Token already sent to server so won\'t send it again unless it changes');
		}
	}

	function isTokenSentToServer() {
		return window.localStorage.getItem('sentToServer') == 1;
	}

	function setTokenSentToServer(sent) {
		window.localStorage.setItem('sentToServer', sent ? 1 : 0);
	}

	function deleteToken() {
		// Delete Instance ID token.
		// [START delete_token]
		messaging.getToken()
			.then(function (currentToken) {
				// vom Server entfernen
				const sendData = 'fname=deleteToken&token=' + currentToken;
				$.ajax({
					url: urlApi,
					dataType: 'json',
					crossDomain: true,
					data: sendData,
					success: function (response) {
						console.debug('FCM Token vom Server entfernt');
					},
					error: function (response, textStatus, e) {
						console.debug('FCM Token wurde nicht richtig entfernt (ajax)', response, textStatus, e);
					}
				});
				messaging.deleteToken(currentToken)
					.then(function () {
						console.log('Token deleted.');
						setTokenSentToServer(false);
						/*
						// [START_EXCLUDE]
						// Once token is deleted update UI.
						resetUI();
						// [END_EXCLUDE]
						*/
					})
					.catch(function (err) {
						console.log('Unable to delete token. ', err);
					});
				// [END delete_token]
			})
			.catch(function (err) {
				console.log('Error retrieving Instance ID token. ', err);
				// showToken('Error retrieving Instance ID token. ', err);
			});

	}

	return messaging;
});