// Variables
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const date = require(__dirname + '/date.js');
  // lists variables
let items = ['Buy Food' , 'Cook Food' , 'Eat Food'];
let workItems = [];

// setting up body-parser & EJS with express
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('public'));
app.set('view engine', 'ejs');

// listen on port 3000
app.listen(3000 , () => {
  console.log('Server is running on port 3000');
})

// Setting the get request on root route
app.get('/' , (req , res) => {
 
  // getting the date
  const day = date.getDate();
  // render the page using EJS
  res.render('list' , {listTitle : day , newListItem : items})

})

// Catching post request on root route
app.post('/' , (req , res) => {
  
  const item = req.body.newItem;
  
  if(req.body.list ==='Work') {
    workItems.push(item);
    res.redirect('/work')
  }else {
    items.push(item)
    res.redirect('/')
  }

})


// work route
app.get('/work' , (req , res) => {
  res.render('list' , {listTitle : 'Work' , newListItem : workItems});
})

// About route
app.get('/about' , (req , res) => {
  res.render('about')
})