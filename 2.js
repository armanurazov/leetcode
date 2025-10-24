var addTwoNumbers = function (l1, l2) {
    let num1 = 0;
    let num2 = 0;
    let sum = 0;
    let x = l1.length;
    let y = l2.length;
    for (let i = 0; i < x; i++) {
        num1 += l1[x - i - 1] * 10 ** (x - i - 1)
    }
    for (let i = 0; i < y; i++) {
        num2 += l2[y - i - 1] * 10 ** (y - i - 1)
    }

    sum = num1 + num2;
    let result = [];

    let max = 10
    let flag = 0
    for (let i = 0; i < max + 1; i++) {
        if (sum / 10 ** (max - i) > 1) {
            result[max - i] = Math.floor(sum / 10 ** (max - i))
            sum = sum - (result[max - i] * 10 ** (max - i))
            flag = 1
        } else if (flag == 1){
            result[max - i] = 0
        }
    }
    return result;
}
console.log(addTwoNumbers([0], [0]))