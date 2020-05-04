$.ajax({
    url:"https://devmeteor.cn/list.php",
    success(res){
        var list=JSON.parse(res)
        for(var i=0;i<list.length;i++){
            var title=list[i].title
            var summary=list[i].summary
            var labels=list[i].labels.split(",")
            var labelTmp="";
            for(var j=0;j<labels.length;j++){
                labelTmp+='<span class="blog-label">'+labels[j]+'</span>'
            }
            var timestamp=list[i].timestamp.replace(/-/g,'.')
            var templete='<div class="card">'+
                '<a class="blog-title" href="article.html?t='+title+'">'+title+'</a>'+
                '<p class="blog-summary">'+summary+'...</p>'+
                '<div class="blog-info">'+
                    '<p class="blog-date">'+timestamp.substring(0,timestamp.length -3)+'</p>'+
                    '<div class="blog-labels">'+labelTmp+'</div>'+
                '</div>'+
            '</div>'
            $(".list").append(templete)
        }
    },
    error(){
        console.log("error")
    }
})