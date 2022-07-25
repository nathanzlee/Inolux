import express from 'express';
import session from 'express-session';
import mongoSession from 'connect-mongodb-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import User from './schemas/user.js';

//---------- Global vars -----------
const app = express();
const __dirname = path.resolve();
const MongoDBSession = mongoSession(session);


//---------- Middleware -----------
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, '../client/styles')));
app.use(express.static(path.join(__dirname, '../client/img')));

const db_uri = 'mongodb+srv://admin:admin@cluster0.lekve.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 8000;
const conn = mongoose.createConnection(db_uri);

function startServer() {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
    });
};

mongoose.connect(db_uri, startServer);

const store = new MongoDBSession({
	uri: db_uri,
	collection: 'sessions'
})

app.use(session({
	secret: 'Omnipong sucks',
	cookie: {maxAge: 2400000},
	resave: false,
	saveUninitialized: false,
	store: store
}))

const isAuth = (req, res, next) => {
    if (req.session.isAuth) {
		next();
    } else {
        res.redirect('/login');
    }
}

const isNotAuth = (req, res, next) => {
    if (!req.session.isAuth) {
		next();
    } else {
        res.redirect('/');
    }
}

//---------- Get Routes -----------
app.get('/', isAuth, (req, res) => {
    const filePath = path.join(__dirname, '../client/index.html');
	res.sendFile(filePath);
});

app.get('/signup', isNotAuth, (req, res) => {
    const filePath = path.join(__dirname, '../client/signup.html');
	res.sendFile(filePath);
});

app.get('/login', isNotAuth, (req, res) => {
    req.session.isAuth = false;
	const filePath = path.join(__dirname, '../client/login.html');
	res.sendFile(filePath);
})

app.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            throw err;
        }

        res.redirect('/login');
    })
})

app.get('/dashboard', isAuth, (req, res) => {
	const filePath = path.join(__dirname, '../client/dashboard.html');
	res.sendFile(filePath);
})

app.get('/document', isAuth, (req, res) => {
    const filePath = path.join(__dirname, '../client/document.html');
	res.sendFile(filePath);
})

app.get('/travel/new', isAuth, (req, res) => {
    const filePath = path.join(__dirname, '../client/newTravelAuth.html');
	res.sendFile(filePath);
})

app.get('/userinfo', (req, res) => {
    res.json(req.session.user);
})
app.get('/users', (req, res) => {
    User.find({}, (err, people) => {
        res.json({users: people})
    })
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

// app.post('/addmanager', (req, res) => {
//     const manager = User.find({firstName: req.body.manager}, (err, person) => {
//         if (err || person.length == 0) {
//             console.log(err)
//             return res.json({err: "Wrong name"})
//         }
//         console.log(person[0])
//         User.findOneAndUpdate(
//             {firstName: req.body.firstName},
//             {$push: {managers: person[0]}},
//             (err) => {
//                 if (err) {
//                     console.log(err)
//                 } else {
//                     res.json({msg: "success"})
//                 }
                
//             }
//         )
//     })

    
// })

app.post('/login', (req, res) => {
    console.log("Called");
    const user = User.find({email: req.body.email}, (err, person) => {
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
                req.session.isAuth = true;
                req.session.user = person[0];
                console.log("success");
                res.json({msg: "success"});
            } else {
                console.log("wrong pw")
                res.json({err: 'Wrong password'});
            }
        })
    })
})


