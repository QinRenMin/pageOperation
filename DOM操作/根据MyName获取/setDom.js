function setMyName() {
    var doms = document.getElementsByName("MyName");
    var str = '';
    for (var i = 0; i < doms.length; i++){
        str += doms[i].tagName;//获得拼接标签的名字

        str+=',';
}
alert("两个DOM标签是："+str);
}