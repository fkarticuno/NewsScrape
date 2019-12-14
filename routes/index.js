const router = require('express').Router();
const Scrape = require('../models/Scrape');

router.get('/', function (req, res){
    Scrape.find({})
    .then(function(scrape){
        res.render('homePage', {
            scrape: scrape
        })
    })
})

router.post('/')

router.post("/add", function(req, res){
    Scrape.create({
        title: req.body.title,
        author: req.body.author,
        body: req.body.body,
        date: req.body.date,
    }).then(function(data){
        console.log(data)
        res.redirect("/")
    })
})

module.exports = router;