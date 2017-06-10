// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({
            order: [
                ['updatedAt', 'ASC']
            ]
        }).then(function(data) {
            var hbsObject = {
                burgers: data
            };
            res.render("index", hbsObject);
        });
    });


    app.post("/", function(req, res) {
            // console.log("Burger insert - passing of burger: %s",req.body)
        db.Burger.create({
            burger_name: req.body.burger,
            devoured: null
        }).then(function(dbBurger) {
            res.redirect("/");
        });
    });

    app.put("/:id", function(req, res) {
        db.Burger.update({
            devoured: true,
        }, {
            where: {
                id: req.params.id
            }
        }).then(function(dbBurger) {
            res.redirect("/");
        });
    });
};
