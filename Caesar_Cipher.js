function rot13(str) {
    var answer = "";
    for(var i = 0; i < str.length; i++) {
        if(str.charCodeAt(i) >= 65 && str.charCodeAt(i) < 78) {
            answer += String.fromCharCode(str.charCodeAt(i) + 13);
        } else if(str.charCodeAt(i) >= 78 && str.charCodeAt(i) < 91) {
            answer += String.fromCharCode(str.charCodeAt(i) - 13);
        } else {
            answer += String.fromCharCode(str.charCodeAt(i));
        }
    }
    return answer;
}
  
console.log(rot13("SERR PBQR PNZC"));