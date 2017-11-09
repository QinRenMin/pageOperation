function addFav() {
   if(window.external.AddFavorite){
       window.external.AddFavorite('./单击收藏夹.html','javascript300实例');
   }
   else{
       window.sidebar.addPanel('javascript300实例','http://www.baidu.com',"");
   }
}