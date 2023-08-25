const express = require('express'); //import express package
const app = express(); // callesthe express() method and assigns it to app object
const path = require('path') // imports path for reading folders
require('dotenv').config();  // imports dot env for reading the environment variable file .env

const PORT = process.env.PORT || 8080 // calls the port variable from the .env file if not exist fallback to 8081

app.use('/', express.static(path.join(__dirname,'/public'))) //enables reading static files
 
app.use('/', require('./routes/root'))   //imports the root route from `routes` directory 'root.js' file 
app.use('/test', require('./routes/testRoute')) // import the test route from 'routes' directory 'testRoute.js' file


app.all('*',(req,res)=>{
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname,'views','404.html'))
    }else if(req.accepts('json')){
        res.json({message:"404 Not Found"})
    }else{
        res.type('txt').send('404 Not Found')
    }
}) // used for returning not found response if the route didn't mach the existing routes

app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`)
})// starts the server on the specified port