const express = require('express')
const router = express.Router()
const fs = require('fs')


router.get('/get-visitors', (req, res)=>{
    const visitors = fs.readFileSync('./visitors.json', 'utf-8')
    const viewsData = JSON.parse(visitors)
    res.status(200).json({
        views:viewsData.views
    })
})


module.exports = router