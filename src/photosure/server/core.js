var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var logfmt = require('logfmt');
var passport = require('passport');
var TumblrStrategy = require('passport-tumblr').Strategy;
var tumblr = require('tumblr');

var consumerKey = 'Tg1KPogMJGHntn64LnRYkTK0pAdlt5VdihWiDNEuNjrYH7TB20';
var consumerSecret = 'DWkALXsUpaGntJjl7v3ZUbslcBIY2W3B5LIuHfAFoZug37UII4';
var oauthToken;
var oauthTokenSecret;

passport.serializeUser(function(user, done) {
    //complete tumblr profile is serialize here
    //todo: only serialize ids with simple map lookup/storage
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new TumblrStrategy(
    {
        consumerKey: consumerKey,
        consumerSecret: consumerSecret,
        callbackURL: 'http://127.0.0.1:5000/auth/tumblr/callback'
    },
    function(token, tokenSecret, profile, done) {
        oauthToken = token;
        oauthTokenSecret = tokenSecret;
        return done(null,  profile);
    }
));

var app = express();
app.use(logfmt.requestLogger());
app.use(cookieParser());
app.use(bodyParser());
app.use(session({ secret: 'keyboard cat' }));
app.use(passport.initialize());
app.use(passport.session());

app.get('/', function(req, res) {
    res.send('Hello World!');
});

app.get('/auth/tumblr',
        passport.authenticate('tumblr'),
        function(req, res) {
        });

app.get('/auth/tumblr/callback',
        passport.authenticate('tumblr'),
        function(req, res) {
            res.redirect('/tumblr');
        });

app.get('/tumblr',
        ensureAuthenticated,
        function(req, res) {
            console.log(oauthToken);
            console.log(oauthTokenSecret);
            var blog = new tumblr.Blog('cpleblow.tumblr.com', { consumer_key: consumerKey,
                                                                consumer_secret: consumerSecret,
                                                                token: oauthToken,
                                                                token_secret: oauthTokenSecret });

            blog.posts({ offset: 0 }, function(err, res2) {

                console.log(res2.posts.length);
                res.send(JSON.stringify(res2, null, 4));
            });
        });

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
    console.log("Listening on " + port);
});

function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/tumblr');
}
