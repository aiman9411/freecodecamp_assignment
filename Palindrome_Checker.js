function palindrome(str) {

    function checkWhiteSpace(arr) {
        if(arr.indexOf(" ") > 0) {
            return arr.replace(/\s+/gi, "");
        }
        return arr;
    };

    function checkNonAlpha(arr) {
        var regex = /[^0-9a-z]/gi;
        if(arr.match(regex) !== null) {
            return arr.replace(regex, "")
        }
        return arr;
    }
    var str1 = checkNonAlpha(str);
    var str2 = checkWhiteSpace(str1).toLowerCase();
    var length = str2.length;
    for(var i = 0; i < length/2; i++) {
        if(str2[i] !== str2[str2.length - i - 1]) {
            return false;
        }
    }
    return true;
}
  
  
console.log(palindrome("A man, a plan, a canal. Panama"));