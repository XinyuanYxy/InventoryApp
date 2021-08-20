import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import morgan from 'morgan';
import { readdirSync } from 'fs';
require('dotenv').config();

//app
const app = express();

//db
mongoose
	.connect(process.env.MONGO_URI, {
		userNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
	})
	.then(() => console.log('DB cloud connected'));

//middleware
app.use(cors());
app.use(morgan('dev'));
readdirSync('./routes').map((route) =>
	app.use('/api', require(`./routes/${route}`))
);
//routes

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`The server is running on port ${port}`));
