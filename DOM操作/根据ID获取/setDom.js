function  getDomText() {
    //获取DOM链接
    var myLink=document.getElementById("myLink");
    var mySpan = document.getElementById("mySpan");
    var str ='';
    str+=myLink.innerHTML;
    str+=mySpan.innerHTML;
    alert("两个DOM的内容是： "+str);
}