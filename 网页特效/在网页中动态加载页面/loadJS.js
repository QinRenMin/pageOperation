function loadJS() {
    var theHead = document.getElementsByTagName('head').item(0);
    var myScript = document.createElement('script');
    myScript.src = './loadJS.js';
    myScript.type = 'text/javascript';
    myScript.defer = true;
    theHead.appendChild(myScript);
}