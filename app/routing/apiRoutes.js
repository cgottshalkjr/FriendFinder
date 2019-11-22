var directorsScores = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(directorsScores);
    });


    app.post("/api/friends", function (req, res) {

        

    });











}