const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
/*body-parser is now apart of express so install this depency is no longer needed*/
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());

app.set('view engine', 'pug');

const routes = require('./routes');

app.use(routes);

app.use((req, res, next) => {
    console.log('hello')
    const err = new Error('Oh no... Something went wrong.');
    next();
});

app.use((req, res, next) => {
    console.log('world');
    next();
    
});

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err; 
    res.status(err.status);
    res.render('error');
}); 

app.listen(3000, () => {
console.log('The application is running on localhost:3000!')

});