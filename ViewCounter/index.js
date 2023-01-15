const express = require('express')
const app = express()
app.use(express.json())
const viewCounter = require('./viewCounterMiddleware/viewcounter')

app.listen(3000, ()=>{
    console.log("Server has been started");
})

app.use(viewCounter)

const routes = require('./routes/routes')
app.use('/api', routes)



