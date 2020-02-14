const express = require('express');
const app = express();
const NewsAPI = require('newsapi');
var port = process.env.port || 8080;
const newsapi = new NewsAPI('139400a180dc46309a2c27b502de0cfc');
app.set('view engine', 'pug');

newsapi.v2.topHeadlines({
  sources: '',
  q: '',
  category: 'business',
  language: 'en',
  country: 'us'
}).then(response => {
  app.get('/', function(req, res){
    res.render('index',{title:
    JSON.stringify(response["totalResults"]), paragraf:
    JSON.stringify(response["articles"])})
  });
});
app.listen(3000);
