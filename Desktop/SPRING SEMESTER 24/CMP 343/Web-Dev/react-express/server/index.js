//Import express into our file
const express = require('express')

//Create a new express application
const app=express()

//Define the port our server will run on
const port=3000


//allow static assets in public 
app.use(express.static('public'))

const root= require('path').join(__dirname, '../client', 'dist')
app.use(express.static(root))


//Define our server routes
app.get('/', (req, res)=>{
res.sendFile('index.html', {root})
})


app.get('/test', (req, res)=>{
    //Do something when the server processes this request

    
    //send back a response to a client
    res.send("Server is operational")
    })



//Run our server to listen at the port we defined

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})


