const Express = require("express");
const app = new Express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const passportJWT = require("passport-jwt");
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

app.use(Express.json());
app.use(Express.urlencoded({ extended: false }));
app.use(passport.initialize());

const users = [
  {
    username: "mary",
    password: "password"
  }
];

passport.use(
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      session: false
    },
    function(username, password, done) {
      let user = users.find(
        u => u.username === username && u.password === password
      );
      if (user) {
        return done(null, user);
      } else {
        return done("invalid username or password", null);
      }
    }
  )
);

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: "your_jwt_secret"
    },
    function(jwtPayload, cb) {
      console.log(jwtPayload);
      return cb(null, jwtPayload);
    }
  )
);

const authenticate = (req, res, next) => {
  passport.authenticate("local", function(err, user, info) {
    if (err) {
      return res.status(401).json({ message: err });
    } else {
      res.json({ token: jwt.sign(user, "your_jwt_secret") });
    }
  })(req, res, next);
};

const jwtAuthenticate = (req, res, next) => {
  passport.authenticate("jwt", function(err, user, info) {
    console.log("jwt", user);
    if (err || !user) {
      return res.sendStatus(403);
    } else {
      next();
    }
  })(req, res, next);
};
app.post("/login", authenticate, function(req, res) {
  res.redirect("/");
});

app.get("/secure", jwtAuthenticate, function(req, res) {
  res.json({ message: "your secure resource" });
});

app.listen(3000);
