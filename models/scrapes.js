const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scrapeSchema = new Schema ({
    title: String,
    body: String,
    author: String,
    date: Date // might not be a thing
})

const scrape = mongoose.model('Scrape', scrapeSchema);

module.exports = scrape;