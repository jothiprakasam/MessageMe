const bodyParser = require('body-parser');
const express = require("express");
const app = express();
const port = 3000;
const path=require("path");
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Set up body-parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.render("home");
});

app.post('/post', (req, res) => {
  res.render("home",{body:req.body.name})
  console.log(req.body.id,":", req.body.name); 
  //res.send(req.body.id +":" + req.body.name);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
