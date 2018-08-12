/*
	Stellt Firebase Cloud Messaging bereit

 */
define('fbm', ['db', 'firebase'], function (db, firebase) {


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
	navigator.serviceWorker.register('/sw.js')
		.then((registration) => {
			messaging.useServiceWorker(registration);

			// Callback fired if Instance ID token is updated.
			messaging.onTokenRefresh(function () {
				messaging.getToken()
					.then(refreshedToken => {
						console.log('Token refreshed.');
						// Indicate that the new Instance ID token has not yet been sent to the app server.
						messaging.setTokenSentToServer(false);
						// Send Instance ID token to app server.
						messaging.sendTokenToServer(refreshedToken);
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

				if (payload.data && payload.data.fcm_action) {
					if (payload.data.fcm_action === 'updateVPlan') {
						db.getVertretungsplaene();
						if (typeof updateVertretungsplanUI === 'function') updateVertretungsplanUI(db);
					}

				}
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
										messaging.setTokenSentToServer(false);
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
						.catch(e => {
							reject('[messaging.ein.getToken] gescheitert: ' + e);
						});
				});
			};

			messaging.aus = function () {
				return new Promise((resolve, reject) => {
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
								success: (response) => {
									console.debug('[messaging.aus] Token vom Server entfernt', response);
									messaging.deleteToken(currentToken)
										.then(function () {
											console.log('[messaging.aus] Token deleted.');
											messaging.setTokenSentToServer(false);
											resolve(response);
										})
										.catch(err => {
											console.log('[messaging.aus] Unable to delete token. ', err);
											reject(err);
										});
								},
								error: (response, textStatus, e) => {
									console.debug('[messaging.aus] Token wurde nicht richtig vom Server entfernt (ajax)', response, textStatus, e);
									reject({'response': response, 'textStatus': textStatus, 'err': e});
								}
							});
							// [END delete_token]
						})
						.catch(function (err) {
							console.log('Error retrieving Instance ID token. ', err);
						});
				});
			};

			/*
			Bereitstellung von Funktionen, die aufgerufen werden müssen
			 */

			// Send the Instance ID token your application server, so that it can:
			// - send messages back to this app
			// - subscribe/unsubscribe the token from topics
			messaging.sendTokenToServer = function (currentToken) {
				if (!messaging.isTokenSentToServer()) {
					console.log('Sending token to server...');

					// Send the current token to your server.
					const sendData = 'fname=setToken&token=' + currentToken;
					$.ajax({
						url: urlApi,
						dataType: 'json',
						crossDomain: true,
						data: sendData,
						success: function (response) {
							if (response.erfolg) messaging.setTokenSentToServer(true);
						},
						error: function (response, textStatus, e) {
							console.debug('FCM Token wurde nicht richtig übermittelt (ajax)', response, textStatus, e);
						}
					});

				} else {
					console.log('Token already sent to server so won\'t send it again unless it changes');
				}
			};

			messaging.isTokenSentToServer = () => window.localStorage.getItem('sentToServer') == 1;
			messaging.setTokenSentToServer = (sent) => {
				window.localStorage.setItem('sentToServer', sent ? 1 : 0);
			};
		});

	return messaging;
});