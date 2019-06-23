var express = require("express");
var router = express.Router();
var passport = require("passport");

var User = require("../models/user");

//show register
router.get("/register", function(req, res){
    res.render("register");
})

//handle sing up
router.post("/register", function(req, res){
    var newUser = new User({username: req.body.username})
    User.register(newUser, req.body.password, function(err, user) {
        if(err) {
            console.log(err)
            req.flash("error", err.message)
            return res.render("register")
        }
        passport.authenticate("local")(req,res, function() {
            req.flash("success", "Welcome to YelpCamp " + user.username)
            res.redirect("/campgrounds");
        })
    })
})

//show login
router.get("/login", function(req,res){
    res.render("login");
})

//handle login
router.post("/login", passport.authenticate("local",{
    successRedirect: "/campgrounds", 
    failureRedirect: "/login"
}), function(req,res){
    res.send("login logic")
})

//handle logout
router.get("/logout", function(req,res){
    req.logout();
    req.flash("success", "Logged you out");
    res.redirect("/campgrounds");
});

//show homepage
router.get("/", function(req,res) {
    res.render("landing");
});

module.exports = router;