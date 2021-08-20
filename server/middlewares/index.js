import admin from '../firebase';
import User from '../models/user';

export const findOrCreateUser = async (req, res, next) => {
	// console.log('req.header.token', req.headers.token);
	try {
		const firebaseUser = await admin.auth().verifyIdToken(req.headers.token);
		// console.log('FIREBASE USER IN CURRENT USER MIDDLEWARE', firebaseUser);
		// save the user to db or send response if it is already saved
		const user = await User.findOne({ email: firebaseUser.email });
		if (user) {
			//send user response
			req.currentUser = user;
			next();
			// res.json(user);
		} else {
			//create and send response
			let newUser = await new User({
				email: firebaseUser.email,
				firstName: firebaseUser.name
					? firebaseUser.name
					: firebaseUser.email.split('@')[0],
				lastName: firebaseUser.name
					? firebaseUser.name
					: firebaseUser.email.split('@')[0],
				gender: firebaseUser.gender ? firebaseUser.gender : 'none',
				phoneNumber: firebaseUser.phoneNumber ? firebaseUser.gender : 'none',
			}).save();

			req.currentUser = newUser;
			next();
		}
	} catch (err) {
		console.log(err);
		res.status(401).json({ err: 'Invalid or expired token' });
	}
};
