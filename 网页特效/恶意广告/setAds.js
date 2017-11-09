function setAd() {
    var ad = document.getElementById('ad');
    ad.innerHTML= '<img src="c00e5754-06b7-464b-81e5-288f40c4633f.jpg" width="300" height="200">'
    setTimeout(function () {
        var ad = document.getElementById('ad');
        ad.style.display='none';//隐藏
    },5000)
}
window.onload  = setAd;
