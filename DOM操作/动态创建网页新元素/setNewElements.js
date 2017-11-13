function createNewElements() {
    //用innerHTML创建新标签
    var p1 = document.getElementById("p1");
    p1.innerHTML="<span>我的第一个DOM文本</span>";
    //用createElement创建元素
    var span = document.createElement("span");
    //为新元素内容创建一个文本节点
    span.appendChild(document.createTextNode("我的第二个DOM文本"));
    var p2 = document.getElementById("p2");
    //挂接
    p2.appendChild(span);
}