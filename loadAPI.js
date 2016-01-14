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
    debugger;
    for (var i=0; i < trending.length; i++){
      formatTrending(trending[i]);
    }
    // $('.container').append(sponsored);
  })
}

function formatTrending(article){
  var title = article.title;
  var url = article.url;
  var thumbnail = article.thumbnail;
  var formattedArticle = "<img src='" + thumbnail + "''><a href='" + url + "' target='blank'><h2>" + title + "</h2></a>";
  $('.container').append(formattedArticle);
}

function formatSponsored(){


}

