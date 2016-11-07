import firebase from 'firebase'

export function fireInit(func) {
	// !!!! Replace with your own Firebase settings !!!!!
	var config = {
		apiKey: 'AIzaSyDOHE9a3klVUdbPpKJXcFohSngqmKO29X8',
		authDomain: 'o-farao-ta-de-r1.firebaseapp.com',
		databaseURL: 'https://o-farao-ta-de-r1.firebaseio.com',
		storageBucket: 'o-farao-ta-de-r1.appspot.com',
		messagingSenderId: '220054612746'
	}
	firebase.initializeApp(config)

	firebase.auth().onAuthStateChanged(function (user) {
	  if (user) {
	    func(true, user)
	  } else {
	    func(false)
	  }
	}, function(error) {
	  console.log(error)
	})
}
