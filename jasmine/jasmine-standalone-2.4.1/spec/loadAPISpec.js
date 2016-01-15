describe ("formatArticle", function(){
  it("returns the correct html string", function(){
    var article = {url: "http://aplus.com/a/asapscience-science-motivation", title: "Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution", thumbnail: "//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg", article_id: 91632}
    var formattedArticle = formatArticle(article);
    var expectedHTML = "<article class='article clearfix'><div class='img-container'><img src='//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg'></div><h2 class='trending'><a href='http://aplus.com/a/asapscience-science-motivation' target='_blank'>Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution</a></h2></article>";
    expect(formattedArticle).toEqual(expectedHTML);
  });
})

describe ("formatSponsored", function(){
  it("returns the correct sponsored article html string", function(){
    var sponsoredArticle = {url: "http://aplus.com/a/asapscience-science-motivation", title: "Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution", thumbnail: "//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg", sponsored_by: "this cool sponsor", article_id: 91632}
    var sponsoredArticle = formatSponsored(sponsoredArticle);
    var expectedHTML = "<span class='sponsored'>SPONSORED BY this cool sponsor</span><article class='article clearfix'><div class='img-container'><img src='//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg'></div><h2 class='trending'><a href='http://aplus.com/a/asapscience-science-motivation' target='_blank'>Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution</a></h2></article>";
    expect(sponsoredArticle).toEqual(expectedHTML);
  });
})