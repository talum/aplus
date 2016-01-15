describe ("formatArticle", function(){
  it("returns the correct html string", function(){
    var article = {url: "http://aplus.com/a/asapscience-science-motivation", title: "Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution", thumbnail: "//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg", article_id: 91632}
    
    var expectedHTML = "<article class='article clearfix'><div class='img-container'><img src='//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg'></div><h2 class='trending'><a href='http://aplus.com/a/asapscience-science-motivation' target='_blank'>Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution</a></h2></article>";
    
    var formattedArticle = app.formatArticle(article);
    expect(formattedArticle).toEqual(expectedHTML);
  });
})

describe ("formatSponsored", function(){
  it("returns the correct sponsored article html string", function(){

    var sponsoredArticle = {url: "http://aplus.com/a/asapscience-science-motivation", title: "Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution", thumbnail: "//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg", sponsored_by: "this cool sponsor", article_id: 91632};

    var expectedHTML = "<span class='sponsored'>SPONSORED BY this cool sponsor</span><article class='article clearfix'><div class='img-container'><img src='//images5.aplus.com/uc-up/e8eb0cec-c766-443b-9112-…e_1200x630.format_jpeg.resize_345x.inline_yes.jpg'></div><h2 class='trending'><a href='http://aplus.com/a/asapscience-science-motivation' target='_blank'>Understanding The Science Of Motivation Could Help You Achieve Your New Year's Resolution</a></h2></article>";

    var sponsoredArticle = app.formatSponsored(sponsoredArticle);

    expect(sponsoredArticle).toEqual(expectedHTML);
  });
})

describe ("formatResponse", function(){
  var responseWithoutSponsor = {
    trending: [
    {
    url: "http://aplus.com/a/if-people-were-sentimental-real-life-like-on-facebook",
    title: "If People Were Sentimental In Real Life Like They Are On Facebook, Their Ridiculousness Would Be Exposed Instantly ",
    thumbnail: "//images5.aplus.com/uc-up/134a1d3a-0334-41df-9975-64345f9717bd/134a1d3a-0334-41df-9975-64345f9717bd.format_jpeg.crop_728x383_56,0.resize_1200x630.format_jpeg.resize_345x.inline_yes.jpg",
    article_id: 91662
    },
    {
    url: "http://aplus.com/a/defog-car-windows",
    title: "4 Secrets To Defogging Your Car Windows Fast",
    thumbnail: "//images5.aplus.com/uc-up/edd4b9b4-79d2-4322-bbfc-2e083fe28ad9/edd4b9b4-79d2-4322-bbfc-2e083fe28ad9.crop_1433x753_0,5.resize_1200x630.format_jpeg.inline_yes.jpg",
    article_id: 91672
    }
    ],
    testing: [ ],
    sponsored: { }
    };

  var responseWithSponsor = {
    trending: [
    {
    url: "http://aplus.com/a/if-people-were-sentimental-real-life-like-on-facebook",
    title: "If People Were Sentimental In Real Life Like They Are On Facebook, Their Ridiculousness Would Be Exposed Instantly ",
    thumbnail: "//images5.aplus.com/uc-up/134a1d3a-0334-41df-9975-64345f9717bd/134a1d3a-0334-41df-9975-64345f9717bd.format_jpeg.crop_728x383_56,0.resize_1200x630.format_jpeg.resize_345x.inline_yes.jpg",
    article_id: 91662
    },
    {
    url: "http://aplus.com/a/defog-car-windows",
    title: "4 Secrets To Defogging Your Car Windows Fast",
    thumbnail: "//images5.aplus.com/uc-up/edd4b9b4-79d2-4322-bbfc-2e083fe28ad9/edd4b9b4-79d2-4322-bbfc-2e083fe28ad9.crop_1433x753_0,5.resize_1200x630.format_jpeg.inline_yes.jpg",
    article_id: 91672
    }
    ],
    testing: [ ],
    sponsored: { url: "http://aplus.com/a/if-people-were-sentimental-real-life-like-on-facebook",
    title: "If People Were Sentimental In Real Life Like They Are On Facebook, Their Ridiculousness Would Be Exposed Instantly ",
    thumbnail: "//images5.aplus.com/uc-up/134a1d3a-0334-41df-9975-64345f9717bd/134a1d3a-0334-41df-9975-64345f9717bd.format_jpeg.crop_728x383_56,0.resize_1200x630.format_jpeg.resize_345x.inline_yes.jpg",
    article_id: 91662, 
    sponsored_by: "this cool sponsor"
    }
    };

    beforeEach(function(){
      spyOn(app, 'formatSponsored');
    });

  describe("when there is no sponsor", function(){
    it("does not call formatSponsored", function(){
      app.formatResponse(responseWithoutSponsor);
      expect(app.formatSponsored).not.toHaveBeenCalled();
    });
  });

  describe("when there is a sponsor", function(){
    it("calls formatSponsored", function(){
      app.formatResponse(responseWithSponsor);
      expect(app.formatSponsored).toHaveBeenCalled();
    });
  });

})