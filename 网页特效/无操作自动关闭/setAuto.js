var willClose = true;//定义是否关闭的全局变量
function clickBody() {
    willClose = false;  //单击页面后，把变量值改为false
}
setInterval(function () {
    if(willClose){
        window.close();
    }
    else
    {
        willClose = true;
    }
},10000);