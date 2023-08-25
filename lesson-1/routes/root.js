const express = require('express')
const router = express.Router()

const path = require('path')

router.get('^/$|/index(.html)?', (req,res)=>{
    res.sendFile(path.join(__dirname,'..','views','index.html'))
}) // prepares the index html and sends it as a response 

module.exports = router // exports the route to be imported at the server.js