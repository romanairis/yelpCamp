var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  mongoose = require("mongoose"),
  seedDb = require("./seeds"),
  passport = require("passport"),
  flash = require("connect-flash"),
  LocalStrategy = require("passport-local"),
  User = require("./models/user"),
  commentRoutes = require("./routes/comments"),
  authRoutes = require("./routes/auth"),
  campgroundsRoutes = require("./routes/campgrounds"),
  methodOverride = require("method-override");

//start Db
// seedDb();

//passport configuration
app.use(
  require("express-session")({
    secret: "Once again Argo wins cutest dog",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride("_method"));
app.use(flash());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//use User on every page
app.use(function(req, res, next) {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  next();
});

mongoose.connect("mongodb://localhost:27017/yelp_camp", {
  useNewUrlParser: true
});
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

//use routes
app.use("/campgrounds", campgroundsRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);
app.use(authRoutes);

//server listens
app.listen(3000, process.env.IP, function() {
  console.log("yelpCamp server has started");
});