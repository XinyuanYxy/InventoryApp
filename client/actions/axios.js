import axios from 'axios';
import firebase from '../firebase';

export const axiosPulic = axios.create({
	baseURL: process.env.api,
});

export const axiosAuth = axios.create({
	baseURL: process.env.api,
});

//if the current token is still valid, we send it back to client directly thru this middleware instead of request from the server the token everytime
axiosAuth.interceptors.request.use(
	async (config) => {
		let user = await firebase.auth().currentUser;
		config.headers.token = user ? await user.getIdToken(true) : '';
		return config;
	},
	(err) => {
		return Promise.reject(error);
	}
);
