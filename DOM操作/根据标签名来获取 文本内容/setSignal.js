function getDomsByTag() {
    var doms = document.getElementsByTagName("p");
    var str='';
    for(var i =0; i <doms.length;i++)
    {
        str+=doms[i].innerHTML;
    }
    alert("两个DOM文本是："+str);

}