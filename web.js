var http = require('http'),
    port = process.env.PORT || 4000,
    fs = require('fs'),
    server = http.createServer(function(req, res){
      fs.readFile(process.cwd() + "/index.html", function(err, data){
        res.write(data.toString());
        res.end();
      });
    }).listen(port);
