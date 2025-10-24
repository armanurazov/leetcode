
var romanToInt = function(s) {
    var len = 0;
    var count = 0;
    var total = 0;
    while (len==0){
        if(s[count] == undefined){
            len = count;
            console.log('len is: '+len)
        }
        count++;
    }
    for (var i = 0; i < len; i++){
        if(s[i] == 'M'){
            if(s[i-1] == 'C'){
                total = total + 900
            }else
            {
                total = total + 1000
            };
        };
        if(s[i] == 'D'){
            if(s[i-1] == 'C'){
                total = total + 400
            }else
            {
                total = total + 500
            };
        };
        if(s[i] == 'C'){
            if(s[i+1] == 'D' || s[i+1] == 'M'){
                total = total;
            }
            else if(s[i-1] == 'X'){
                total = total + 90
            }else
            {
                total = total + 100
            };
        };
        if(s[i] == 'L'){
            if(s[i-1] == 'X'){
                total = total + 40
                console.log('fuck')
            }else
            {
                total = total + 50
            };
        };
        if(s[i] == 'X'){
            if(s[i+1] == 'L' || s[i+1] == 'C'){
                total = total;
            }
            else if(s[i-1] == 'I'){
                total = total + 9
            }else
            {
                total = total + 10
            };
        };
        if(s[i] == 'V'){
            if(s[i-1] == 'I'){
                total = total + 4
            }else
            {
                total = total + 5
            };
        };
        if(s[i] == 'I'){
            if(s[i+1] == 'V' || s[i+1] == 'X'){
                total = total;
            }else{
            total = total + 1;
            }
        };
        console.log('total for s[' + i + ']'+s[i] + total)
        
    }
    return total;
};


console.log(romanToInt('MMDXI'))