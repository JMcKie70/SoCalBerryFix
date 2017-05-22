var http = require('http');
var fs = require('fs');
var server = http.createServer(function (request, response){
    if(request.url === '/') {                           //start home!!!!!!!!!!
        fs.readFile('./views/home.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();                          
        });
    }
    else if(request.url === '/stylesheets/normalize'){
        fs.readFile('./stylesheets/normalize.css', 'utf8', function(errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
        });
    }
    else if(request.url === '/stylesheets/home'){
        fs.readFile('./stylesheets/home.css', 'utf8', function(errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
        });
    }
    else if(request.url === '/images/background'){
        fs.readFile('./images/background.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/blue'){
        fs.readFile('./images/blue.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/straw'){
        fs.readFile('./images/straw.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/grape'){
        fs.readFile('./images/grape.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/rasp'){
        fs.readFile('./images/rasp.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/boysen'){
        fs.readFile('./images/boysen.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/black'){
        fs.readFile('./images/black.jpeg', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'image/jpg'});
            response.write(contents);
            response.end();                         //end home!!!!!!!!!!!!!!
        });
    }                              
    else if(request.url === '/blueberries'){       //start blueberries!!!!!!
        fs.readFile('./views/blueberries.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();                       
        });
    }
    else if(request.url === '/images/blue_plant'){
        fs.readFile('./images/blue_plant.JPG', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();                         //end blueberries!!!!!!
        });
    }
    else if(request.url === '/strawberries'){     //start of strawberries!!!!!
        fs.readFile('./views/strawberries.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/straw_plant'){
        fs.readFile('./images/straw_plant.JPG', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });                                             //end of strawberries!!!!!
    }
    else if(request.url === '/grapeberries'){            //start of grapes!!!!!!
        fs.readFile('./views/grapeberries.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();                       
        });
    }
    else if(request.url === '/images/grape_plant'){
        fs.readFile('./images/grape_plant.JPG', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });                                        //end of grapes!!!!!!!
    }
    else if(request.url === '/raspberries'){     //start of raspberries!!!!!
        fs.readFile('./views/raspberries.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/rasp_plant'){
        fs.readFile('./images/rasp_plant.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });                                         //end of raspberries!!!!!!
    }
    else if(request.url === '/boysenberries'){     //start of boysenberries!!!!!
        fs.readFile('./views/boysenberries.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/boysen_plant'){
        fs.readFile('./images/boysen_plant.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });                                      //end of boysenberries!!!!!!
    }
    else if(request.url === '/blackberries'){     //start of blackberries!!!!!
        fs.readFile('./views/blackberries.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }
    else if(request.url === '/images/black_plant'){
        fs.readFile('./images/black_plant.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpg'});
            response.write(contents);
            response.end();
        });                                     //end of blackberries!!!!!!
    }
    else if(request.url === '/stylesheets/berries'){
        fs.readFile('./stylesheets/berries.css', 'utf8', function(errors, contents){
             response.writeHead(200, {'Content-type': 'text/css'});
             response.write(contents);
             response.end();
        });                                     //stylesheet for all berries!!!!!
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('URL requested is not available.');
    }
});
// tell your server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running on localhost port 8000");
