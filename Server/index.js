import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
app.use(morgan('common'));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));

// CONNECT MONGOOSE
mongoose
	.connect(
		`mongodb+srv://socialink:${process.env.DB_PASS}@cluster0.1hhxq9h.mongodb.net/?retryWrites=true&w=majority`
	)
	.then(() => console.log('SOCIALINK Database Connected Successfully!'))
	.catch((err) => console.log(err));

// MADDILWARE
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('<h1>How are you?</h1>');
});

app.use('*', (req, res) => {
	const { baseUrl } = req;

	res.send(`<h1>${baseUrl} Not Found!</h1>`);
});

app.listen(port, () => {
	console.log(`SOCIALINK Server Running on Port: ${port}`);
});
