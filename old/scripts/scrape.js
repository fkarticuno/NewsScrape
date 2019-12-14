var cheerio = require("cheerio");
var axios = require("axios");
var query ='therock';

axios.get("https://twitter.com/"+query).then(function(response) {
    var $ = cheerio.load(response.data);
    console.log(response.data);
    var articles = [];
});