var express = require('express');
var app = express();
var logger = require('morgan')
const json = { a : '1', b: '2'}

app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...');
    next(); // pass control to the next handler
});

var a_middleware_function = function (req, res, next) {
    res.send('Welcome Home');
    // next()
}

// Function added with use() for all routes and verbs
app.use(a_middleware_function);

// Function added with use() for a specific route
app.use('/someroute', a_middleware_function);

// A middleware function added for a specific HTTP verb and route
app.get('/', a_middleware_function);


app.use(logger('dev'))
app.get('/secret', function (req, res) {
    res.send(json.a);
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
