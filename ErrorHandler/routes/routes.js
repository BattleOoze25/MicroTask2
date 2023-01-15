const express = require('express')
const router = express.Router()
const errorHandler = require('../errorHandlerMiddleware/errorhandler')

// const app = express()


router.get("/error",(req, res, next)=>{
    try{
        console.log("error found");
        res.status(400).send("Error reported")

    }catch(err){
        next(err)
    }
    
} )




module.exports = router