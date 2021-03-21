const express = require('express');

const app = express();


app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('index');

});

app.get('/cards', (req, res) =>{
    res.render('card', {prompt: "Who is buried in Grant's tomb?", 
        hint: "Think about who's tomb it is." });
});

//sandbox 
app.get('/sandbox', (req, res) =>{
    res.render('sandbox');

});
//create a table with two boxes name and last name. 
//https://www.nodejsera.com/library/pug/pug-tables.html
app.listen(3000, () => {
console.log('The application is running on localhost:3000!')

});