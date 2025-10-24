var isPalindrome = function(x) {
    var len = 0;
    var first = 0;
    var result = []
    for (var i = 10; i > 0; i--){
        if((x/10**i) > 1){
            len = i+1;
            first = Math.floor(x/10**i)
            result[0] = first
        }
    }
    console.log(len)
    console.log(first)
    /*
    for (var i = 1; i < len; i++){
        x = x - (first*10**(len -i));
        console.log('x = ', x)
        console.log(first)
        result[i+1] = Math.floor(x/10**i)
        console.log('result = ', result)
    }*/
    return;
};

console.log(isPalindrome(333))