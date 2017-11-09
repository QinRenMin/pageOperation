function findLongestWord(str) {
    // 请把你的代码写在这里
    var newString =str.split(" ");
    var max = newString[0].length;
    for(var i =1; i < newString.length; i++)
    {
        if(max < newString[i].length)
            max = newString[i].length;
    }
    console.log(max);
}

var Max =findLongestWord("The quick brown fox jumped over the lazy dog");
