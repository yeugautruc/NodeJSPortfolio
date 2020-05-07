const path = require('path');
const express = require('express');
const app = express();
const publicDirectoryPath = path.join(__dirname, '../public/');
app.use(express.static(publicDirectoryPath));
app.set('view engine', 'hbs');

app.get('/', function (req, res) {
  res.render('index', {
    title: "Home",
    name: "HungDoan"
  });
})
app.get('/home', function (req, res) {
  res.render('index', {
    title: "Home",
    name: "HungDoan"
  });
})
app.get('/projects', function (req, res) {
  res.send('<h1>Hello projects </h1>');
})
app.get('/contact', function (req, res) {
  res.send('<h1>Hello contact </h1>');
})
app.listen(3000, () => {
  console.log("The server is running on port 3000");
})