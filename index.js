var express = require('express');
var app = express();
const path = require('path');
let ejs = require('ejs');

const ourJSON = {"good" : "yep"};
const myTitle = 'Our First Express App';
let html1 = ejs.render(
    '<% if (myTitle) %> 
    <% { %>
    <h1><%= myTitle %></h1>
    <% } %>', {myTitle: myTitle})


const users = ['Bob', 'John', 'Jane' ]; 
let html = ejs.render('<%= users.join(", "); %>', {users: users});

const port = process.env.PORT || 3000;
app.get("/", (req, res)=> {
    res.send("We are starting our app!")
});

app.put('/', (req, res) => {
    res.send('How are you?')
});

app.delete('/', (req, res) => {
    res.send(ourJSON)
});

app.get("/test-ejs", (req, res)=> {
    res.send(html1);  
});

app.get("/test-ejs2", (req, res)=> {
    res.send(html);  
});

app.listen(port, ()=> console.log(`Server is listening on port ${port}`));

