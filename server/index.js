import express from 'express';
import session from 'express-session';
import mongoSession from 'connect-mongodb-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import multer from 'multer';
import GridFsStorage from 'multer-gridfs-storage';
import Grid from 'gridfs-stream';
import methodOverride from 'method-override';
import User from './schemas/user.js';

//---------- Global vars -----------
const app = express();
const __dirname = path.resolve();
const MongoDBSession = mongoSession(session);


//---------- Middleware -----------
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, '../client/styles')));
app.use(cors());
app.use(methodOverride('_method'));

const db_uri = 'mongodb+srv://admin:admin@cluster0.bmsy0.mongodb.net/TourneyExpressData?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;

function startServer() {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    });
};

mongoose.connect(db_uri, startServer);


//---------- Get Routes -----------
app.get('/', (req, res) => {
    const filePath = path.join(__dirname, '../client/index.html');
	res.sendFile(filePath);
});

app.get('/signup', (req, res) => {
    const filePath = path.join(__dirname, '../client/signup.html');
	res.sendFile(filePath);
});

app.get('/login', (req, res) => {
    req.session.isAuth = false;
	const filePath = path.join(__dirname, '../client/login.html');
	res.sendFile(filePath);
})

app.get('/dashboard', (req, res) => {
	const filePath = path.join(__dirname, '../client/dashboard.html');
	res.sendFile(filePath);
})

app.get('/document', (req, res) => {
    const filePath = path.join(__dirname, '../client/document.html');
	res.sendFile(filePath);
})

//---------- Post Routes -----------
app.post('/signup', (req, res) => {
    const user = new User(req.body)
        , salt = crypto.randomBytes(128).toString('base64')
        , password = req.body.password;
    crypto.pbkdf2(password, salt, 10000, 256, 'sha256', (err, hash) => {
        if (err) {
            return res.send('error');
        }
        user.password = hash.toString('base64');
        user.salt = salt;
        try {
            user.save();
			res.json({msg: 'Success'});
        } catch (e) {
            console.log(e.message);
        }
        
    });
})

app.post('/login', (req, res) => {
    console.log("Called");
    const user = User.find({username: req.body.username}, (err, person) => {
        if (err || person.length == 0) {
			console.log(err);
            return res.json({err: 'Wrong username'});
        } 
		console.log(person[0]);
        const salt = person[0].salt, password = req.body.password;
        crypto.pbkdf2(password, salt, 10000, 256, 'sha256', (e, hash) => {
            if (e) {
				console.log(e);
                return res.send('error');
            }
            if (hash.toString('base64') == person[0].password) {
                console.log("success")
				return res.json({msg: "Success"});
            } else {
                console.log("wrong pw")
                return res.json({err: 'Wrong password'});
            }
        })
    })
})
