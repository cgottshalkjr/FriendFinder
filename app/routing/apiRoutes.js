var directorsScores = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(directorsScores);
    });


    app.post("/api/friends", function (req, res) {

        console.log(req.body.scores)

        var newDirectors = req.body.scores;
        var scoresArr = [];
        var match = 0;

        for (var i = 0; i < directorsScores.length; i++) {
                matchDifference = 0;
            for (var j = 0; i < newDirectors.length; j++) {
                matchDifference += (Math.abs(parseInt(directorsScores[i].scores[j]) - parseInt(newDirectors[j])));
            }

            scoresArr.push(matchDifference);

            
        }
        for (var i = 0; i < scoresArr.length; i++){   
            if(scoresArr[i] <= scoresArr[match]) {
                match = i
            }
            
        }
        res.send(directorsScores[match]);
        directorsScores.push(req.body);

    
    });
}


