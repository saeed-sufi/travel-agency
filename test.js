var fs = require('fs');
var https = require('https');

fs.writeFile(__dirname + '/indextest.html', "<h1> Testing node </h1>", function(error) {
    if(error) {
        console.log(error);
    } else {
        console.log("Congrats");
    }
})

var imgLoc = "https://mir-s3-cdn-cf.behance.net/project_modules/fs/1ead1d88077811.5dcb70b8923db.png";

https.get(imgLoc, function(response) {
    response.pipe(fs.createWriteStream(__dirname + '/photo.png'));
})