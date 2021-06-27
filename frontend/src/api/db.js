import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyCDSHRTAt4klqbgezITradCwvCr1DUQgBk',
	authDomain: 'teencli-project.firebaseapp.com',
	projectId: 'teencli-project',
	storageBucket: 'teencli-project.appspot.com',
	messagingSenderId: '172321504327',
	appId: '1:172321504327:web:f34fed74a9b44c2699c562',
};

export const app = firebase.initializeApp(firebaseConfig);
export const db = app.database();

export const Register = async (email, password) => {
	return await app
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then((userCredential) => {
			return userCredential;
		})
		.catch((error) => {
			return { error: true };
		});
};
export const Login = async (email, password) => {
	return await app
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then((userCredential) => {
			return userCredential;
		})
		.catch((error) => {
			return { error: true };
		});
};
