// create a component that will keep track of user's auth state, then wrap _app.js so that entire app konws
// so that entire app konws
// if the user is logged in or not if the user is logged in or not
import React, { useEffect, useContext } from 'react';
import firebase from '../firebase';
import { Context } from '../context';
import { axiosAuth } from '../actions/axios';
import { setCookie, destroyCookie } from 'nookies';
const FirebaseAuthState = ({ children }) => {
	const { dispatch } = useContext(Context);
	useEffect(() => {
		return firebase.auth().onIdTokenChanged(async (user) => {
			if (!user) {
				dispatch({
					type: 'LOGOUT',
				});
				destroyCookie(null, 'token');
				setCookie(null, 'token', '', {});
			} else {
				const { token } = await user.getIdTokenResult();
				//set token to cookie
				destroyCookie(null, 'token');
				setCookie(null, 'token', token, {});
				axiosAuth.post('/current-user', {}).then((res) => {
					dispatch({
						type: 'LOGIN',
						payload: res.data,
					});
				});

				// dispatch({
				// 	type: 'LOGIN',
				// 	payload: user,
				// });
			}
		});
	}, []);
	// force refresh the token every 10 minutes
	useEffect(() => {
		const handle = setInterval(async () => {
			console.log(`refreshing token...`);
			const user = firebase.auth().currentUser;
			if (user) {
				const token = await user.getIdToken(true);
				destroyCookie(null, 'token');
				setCookie(null, 'token', token, {});
				// get user info from backend, not firebase
				axiosAuth.post(`/current-user`).then((res) => {
					// console.log("USER ROUTE RES IN FIREBASE_AUTH_STATE", res);
					dispatch({
						type: 'LOGIN',
						payload: res.data,
					});
				});
			}
		}, 10 * 60 * 1000);

		return () => clearInterval(handle);
	}, []);
	return <>{children} </>;
};

export default FirebaseAuthState;
