const express = require("express");
const app = new express();
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const jwt = require("jsonwebtoken");
const JWTStrategy = require("passport-jwt").Strategy;
const ExtractJWT = require("passport-jwt").ExtractJwt;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

const users = [
  {
    username: "jim",
    password: "jim"
  },
  {
    username: "kim",
    password: "kim"
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
        return done("invalid username or password");
      }
    }
  )
);

const SECRET = "grf%$6hdd08(0kssmnssms#4k";

passport.use(
  new JWTStrategy(
    {
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
      secretOrKey: SECRET
    },
    function(jwtPayload, done) {
      let user = users.find(
        u =>
          u.username === jwtPayload.username &&
          u.password === jwtPayload.password
      );
      if (user) {
        return done(null, user);
      } else {
        return done("invalid username or password");
      }
    }
  )
);

const localAuthenticate = (req, res, next) => {
  let curriedFunction = passport.authenticate("local", function(
    err,
    user,
    info
  ) {
    if (err) {
      return res.status(401).json({ message: err });
    } else {
      res.json({ token: jwt.sign(user, SECRET) });
    }
  });
  curriedFunction(req, res, next);
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

app.post("/login", localAuthenticate, function(req, res) {
  res.send("login success");
});

app.get("/secure", jwtAuthenticate, function(req, res) {
  res.json({ message: "your secure resource" });
});

app.listen(3000, function() {
  console.log("app started");
});
