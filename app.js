'use strict';

// MongoDB config
const mongojs = require('mongojs');
const connectionString = 'mongodb://Admin:secretpassword@ds113958.mlab.com:13958/webdjs';
const collections = ['app-users', 'app-collections'];

const db = mongojs(connectionString, collections);

// EXPRESS config
const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser');

const app = express();

// view engine
app.set('views engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);

// set static folder
app.use('/', express.static(path.join(__dirname, 'src'))); // 'dist'

// body-parser MW
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// routes User
app
    .get('/users', function (req, res, next) {
        db['app-users'].find({
        }, function (err, users) {
            if (err) {
                res.send(err);
            }
            res.json(users);
        })
    })
    .get('/users/:userName', function (req, res, next) {
        db['app-users'].findOne({ userName: req.params.userName }, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    })
    .get('/users/:id', function (req, res, next) {
        db['app-users'].findOne({ id: mongojs.ObjectId(req.params.id) }, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        })
    })
    .post('/users', function (req, res, next) {
        let user = req.body;

        //validations
        if (!user.userName || !user.passWord) {
            res.status(400);
            res.json({ "error": "Bad data!" });
        } else {
            db['app-users'].save(user, function (err, user) {
                if (err) {
                    res.send(err);
                }
                res.json(user);
            })
        }
    });

// routes Collections
app
    .get('/collections', function (req, res, next) {
        db['app-collections'].find().sort({
            creationDate: -1
        }, function (err, collections) {
            if (err) {
                res.send(err);
            }
            res.json(collections);
        })
    })
    .get('/collections/:id', function (req, res, next) {
        db['app-collections'].findOne({ _id: mongojs.ObjectId(req.params.id) }, function (err, collection) {
            if (err) {
                res.send(err);
            }
            res.json(collection);
        })
    })
    .post('/collections', function (req, res, next) {
        let collection = req.body;

        //validations

        db['app-collections'].save(collection, function (err, collection) {
            if (err) {
                res.send(err);
            }
            res.json(collection);
        })
    })
    .put('/collections/:id', function (req, res, next) {
        let queryToMember,
            updateMember;

        if (req.body.tag === 'edit') {
            queryToMember = { _id: mongojs.ObjectId(req.body.id), "members.title": req.body.title };
            updateMember = { $set: { "members.$.description": req.body.description } };
        } else if (req.body.tag === 'delete') {
            queryToMember = { _id: mongojs.ObjectId(req.body.id), "members.title": req.body.title };
            updateMember = { $set: { "members.$.isVisible": false } };
        } else {
            queryToMember = { _id: mongojs.ObjectId(req.body.id) };
            updateMember = { $addToSet: { members: req.body } };
        }

        db['app-collections'].findAndModify({
            query: queryToMember,
            update: updateMember,
            new: true
        }, function (err, collection) {
            if (err) {
                res.send(err);
                return;
            }
            res.json(collection);
        });
    });

// connection on port
const port = process.env.PORT || 3333
app.listen(port);
console.log(`Server running on port:${port}`);

// open in the browser
if (port === 3333) {
    require('openurl').open(`http://localhost:${port}`);
}
