import firebase from 'firebase/app';
import 'firebase/auth';
const firebaseConfig = {
	apiKey: 'AIzaSyBJIBRHXbGg33t_mb-4K7Bf_xK4hUYcsbY',
	authDomain: 'inventoryapp-ed96f.firebaseapp.com',
	projectId: 'inventoryapp-ed96f',
	storageBucket: 'inventoryapp-ed96f.appspot.com',
	messagingSenderId: '828604455710',
	appId: '1:828604455710:web:3e051df005f2530e50470f',
	measurementId: 'G-YFQNNYPL4G',
};
// Initialize Firebase if have not initialized yet
if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
