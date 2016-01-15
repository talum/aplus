$(document).ready(function(){
  loadAPI();
});


function loadAPI(){
  var $container = $('.container');
  $.ajax({
    url: "http://aplus.com/api/v1/sidebar_aplus_data.json",
    dataType: "jsonp"
  }).done(function(response){
    var trending = response.trending;
    var sponsored = response.sponsored;
    for (var i=0; i < trending.length; i++){
      var formattedArticle = formatArticle(trending[i]);
      $container.append(formattedArticle);
    }
    if (!$.isEmptyObject(sponsored)){
      var sponsoredArticle = formatSponsored(sponsored);
      $container.append(sponsoredArticle);
    }
  })
}

function formatArticle(article){
  var title = article.title;
  var url = article.url;
  var thumbnail = article.thumbnail;
  var formattedArticle = "<article class='article clearfix'><div class='img-container'><img src='" + thumbnail + "'></div><h2 class='trending'><a href='" + url + "' target='_blank'>" + title + "</a></h2></article>";
  return formattedArticle;
}

function formatSponsored(article){
  var formattedArticle = formatArticle(article);
  var sponsor = article.sponsored_by;
  var sponsoredArticle = "<span class='sponsored'>SPONSORED BY " + sponsor + "</span>" + formattedArticle;
  return sponsoredArticle;
}
