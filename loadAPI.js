$(document).ready(function(){
  loadAPI();
});


function loadAPI(){
  $.ajax({
    url: "http://aplus.com/api/v1/sidebar_aplus_data.json",
    dataType: "jsonp"
  }).done(function(response){
    var trending = response.trending;
    var sponsored = response.sponsored;
    for (var i=0; i < trending.length; i++){
      formatArticle(trending[i]);
    }
    formatSponsored(sponsored);
  })
}

function formatArticle(article){
  var title = article.title;
  var url = article.url;
  var thumbnail = article.thumbnail;
  var formattedArticle = "<div class='article'><img src='" + thumbnail + "''><a href='" + url + "' target='blank'><h2>" + title + "</h2></a></div>";
  $('.container').append(formattedArticle);
}

function formatSponsored(article){
  var title = article.title;
  var url = article.url;
  var thumbnail = article.thumbnail;
  var sponsor = article.sponsored_by;
  var formattedArticle = "<div class='article sponsor'><p class='sponsored'>SPONSORED BY " + sponsor + "</p><img src='" + thumbnail + "''><a href='" + url + "' target='blank'><h2>" + title + "</h2></a></div>";
  $('.container').append(formattedArticle); 
}
