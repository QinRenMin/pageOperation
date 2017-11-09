
function submitForm() {
    var doing = document.getElementById('doing');//获取dom界面
    doing.style.display='';//取消隐藏
    self.location.reload();//重新加载页面来模拟表单的提交
}