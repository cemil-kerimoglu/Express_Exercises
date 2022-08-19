var express = require('express');
var app = express();
const path = require('path');
let ejs = require('ejs');
app.set('view engine', 'ejs');

var methodOverride = require('method-override')

const port = process.env.PORT || 3000;


// override with the X-HTTP-Method-Override header in the request
app.use(methodOverride('X-HTTP-Method-Override'))

app.use(express.urlencoded({
    extended: true
  }))

app.get("/", (req, res)=> {
    res.send("Hello From app");
});

app.get('/test-ejs', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views', 'home.ejs'));
    res.render('home', {
        myTitle: 'my first title'
    });
    
});

app.get('/test-ejs2', (req, res) => {
    res.render('users', {
        users : ['Bob', 'John', 'Jane' ]
      });
});


app.put("/", (req, res)=> {
    // console.log("helllo Eorld")
    res.send("How are you?")
});

app.get("/showInput", (req, res)=> {
    // console.log("helllo Eorld")
    res.sendFile(path.join(__dirname, 'views', 'InputForm.html'));
});

app.post("/showPost", (req, res)=> {
    console.log(`${req.body.firstname} + ${req.body.lastname}`)
    res.send(`First name is ${req.body.firstname} Last Name is${req.body.lastname}`)
});

const ourJson = {"good" : "yep"}
app.delete("/", (req, res)=> {
    // console.log("helllo Eorld")
    res.send(ourJson);
});

app.listen(port, ()=> console.log(`Server is listening on port ${port}`));

