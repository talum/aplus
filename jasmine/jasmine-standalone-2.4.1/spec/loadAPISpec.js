beforeEach(function(){
  article = {url: "http://aplus.com/a/asapscience-science-motivation", title: "Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution", thumbnail: "//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg", article_id: 91632}
});

describe ("formatArticle", function(){
  it("returns an html string", function(){
    var formattedArticle = formatArticle(article);
    debugger;
    var expectedHTML = "<article class='article clearfix'><div class='img-container'><img src='//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg'></div><h2 class='trending'><a href='http://aplus.com/a/asapscience-science-motivation' target='_blank'>Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution</a></h2></article>";
    expect(formattedArticle).toEqual(expectedHTML);
  });
})
