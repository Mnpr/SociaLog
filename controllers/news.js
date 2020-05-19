// exporting modules and adding routes
module.exports = function(){
    return {
        SetRouting: function(router){
            router.get('/latest-news', this.news);
        },
        
        news: function(req, res){
            res.render('news/news', {title: 'Fabbootok - Latest News', user: req.user});
        }
    }
}

//rendering view news.ejs