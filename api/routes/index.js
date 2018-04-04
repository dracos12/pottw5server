var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

var htmlPath = path.join(__dirname, '..', '..', 'public', 'index.html');
var html = fs.readFileSync(htmlPath);

router
    .route('/')
    .post(function(req, res) {
        console.log("POST to root route");
        res.writeHead(200);
        res.write(html);
        res.end();
    });

module.exports = router;
