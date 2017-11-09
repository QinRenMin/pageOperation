function posRightCorner() {
    ad.style.top = document.body.scrollTop+document.body.clientHeight-120;
    ad.style.left = document.body.scrollLeft+document.body.clientWidth-200;
    setTimeout("posRightCorner();",100); //用定时器检查和定位div的位置
}
//关闭函数
function closeAd() {
    ad.style.display='none';//隐藏div
}
//川口加载后定位
window.onload=function () {
    //获得div的dom对象
    var ad = document.getElementById('ad');
    posRightCorner();//调用定位函数
}
