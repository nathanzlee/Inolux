import express from 'express';
import session from 'express-session';
import mongoSession from 'connect-mongodb-session';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import User from './schemas/user.js';
import TravelAuth from './schemas/travelAuth.js';

//---------- Global vars -----------
const app = express();
const __dirname = path.resolve();
const MongoDBSession = mongoSession(session);


//---------- Middleware -----------
app.use(bodyParser.json({limit: '50mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.static(path.join(__dirname, '/client/styles')));
app.use(express.static(path.join(__dirname, '/client/img')));

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
    const filePath = path.join(__dirname, '/client/index.html');
	res.sendFile(filePath);
});

app.get('/signup', isNotAuth, (req, res) => {
    const filePath = path.join(__dirname, '/client/signup.html');
	res.sendFile(filePath);
});

app.get('/login', isNotAuth, (req, res) => {
    req.session.isAuth = false;
	const filePath = path.join(__dirname, '/client/login.html');
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
	const filePath = path.join(__dirname, '/client/dashboard.html');
	res.sendFile(filePath);
})

app.get('/document', isAuth, (req, res) => {
    const filePath = path.join(__dirname, '/client/document.html');
	res.sendFile(filePath);
})

app.get('/travelauth/new', isAuth, (req, res) => {
    const filePath = path.join(__dirname, '/client/newTravelAuth.html');
	res.sendFile(filePath);
})

app.get('/info/user', (req, res) => {
    User.find({number: req.session.user.number}).populate('travelAuths').populate({path: 'travelAuths', populate: {path: 'managerSig', populate: {path: 'user'}}}).exec((err, user) => {
        if (err) {
            return res.json({err: err})
        }
        res.json(user[0]);
    })
})

app.get('/info/travelauth/:id', (req, res) => {
    TravelAuth.find({_id: req.params.id}).exec((err, form) => {
        if (err) {
            return res.json({err: err})
        }
        const requesterNum = form[0].number;
        User.find({number: requesterNum}).populate('managers').exec((error, user) => {
            if (error) {
                return res.json({err: error})
            }
            if (req.session.user.number == requesterNum) {
                return res.json({travelAuth: form, user: "requester", reqLevel: user[0].level});
            } else if (form[0].international && user[0].level == 1) {
                const manager = user[0].managers[0];
                const role = (req.session.user.number == manager.number) ? "manager" : "president";
                return res.json({travelAuth: form, user: role, reqLevel: user[0].level});
            } 
            else {
                return res.json({travelAuth: form, user: "manager", reqLevel: user[0].level});
            } 
        })
    })
})

app.get('/travelauth/:id', isAuth, (req, res) => {
    // If req.session.user isn't manager, redirect
    TravelAuth.find({_id: req.params.id}).exec((err, form) => {
        if (err) {
            return res.json({err: err})
        }
        const requesterNum = form[0].number;
        User.find({number: requesterNum}).populate('managers').exec((error, user) => {
            if (error) {
                return res.json({err: error})
            }
            const manager = user[0].managers[0];
            if (req.session.user.number == requesterNum || req.session.user.number == manager.number || req.session.user.level == 3) {
                const filePath = path.join(__dirname, '/client/travelAuth.html');
                res.sendFile(filePath);
            } else {
                res.redirect('/');
            }
        })
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

app.post('/travelauth/new', (req, res) => {
    const newTravelAuth = new TravelAuth(req.body);
    try {
        newTravelAuth.save();
    } catch (e) {
        console.log(e);
    }
    
    User.find({number: req.body.number}).populate('managers').exec((err, user) => {
        const managerNum = user[0].managers[0].number;
        let filter;
        if (req.body.international) {
            filter = {$or: [{number: req.body.number}, {number: managerNum}, {level: 3}]}
        } else {
            filter = {$or: [{number: req.body.number}, {number: managerNum}]}
        }

        User.updateMany(
            filter,
            {$push: {travelAuths: newTravelAuth}},
            (error) => {
                if (error) {
                    console.log(error)
                } else {
                    res.json({msg: "Success"})
                }
                
            }
        )
    })
})

app.post('/travelauth/save/:id', (req, res) => {
    TravelAuth.updateOne(
        {_id: req.params.id},
        {$set: 
            {
                purpose: req.body.purpose, 
                startDate: req.body.startDate, 
                endDate: req.body.endDate, 
                itinerary: req.body.itinerary, 
                travelAdv: req.body.travelAdv, 
                personalTravel: req.body.personalTravel, 
                international: req.body.international,
                notes: req.body.notes
            }
        },
        (err) => {
            if (err) {
                return res.json(err)
            } else {
                res.json({msg: "Success"})
            }
        }
    )
})

app.post('/travelauth/authorize/:id', (req, res) => {
    if (req.body.role == "manager") {
        TravelAuth.updateOne(
            {_id: req.params.id},
            {$set: {managerSig: req.body.signature, status: req.body.status, notes: req.body.notes}},
            (err) => {
                if (err) {
                    return res.json(err)
                } else {
                    res.json({msg: "Success"})
                }
            }
        )
    } else {
        TravelAuth.updateOne(
            {_id: req.params.id},
            {$set: {presidentSig: req.body.signature, status: req.body.status, notes: req.body.notes}},
            (err) => {
                if (err) {
                    return res.json(err)
                } else {
                    res.json({msg: "Success"})
                }
            }
        )
    }
    
})

app.post('/travelauth/deny/:id', (req, res) => {
    TravelAuth.updateOne(
        {_id: req.params.id},
        {$set: {status: "denied", notes: req.body.notes}},
        (err) => {
            if (err) {
                return res.json(err)
            } else {
                res.json({msg: "Success"})
            }
        }
    )
})

