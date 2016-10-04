function calc(num1, num2, operator) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    switch (operator) {
    case '+':
        return num1 + num2;
    case '-':
        return num1 - num2;
    case '*':
        return num1 * num2;
    case '/':
        return num1 / num2;
    default:
        return 'Invalid parameter';
    }
}


function swap(array, num1, num2) {
    var aux = array[num1];
    array[num1] = array[num2];
    array[num2] = aux;
}

function mySort(numArray) {
    for (var i = 0; i < numArray.length - 1; i++) {
        for (var j = i; j < numArray.length; j++) {
            if (numArray[j] <= numArray[i]) {
                swap(numArray, j, i);
            }
        }
    }
    return numArray;
}

function howBigNumberIs(num1, num2, num3) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    num3 = parseFloat(num3);
    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        var sorted = mySort([num1, num2, num3]);
        var exp = Math.pow(Math.pow(sorted[2], sorted[0]), sorted[1]);
        console.log(exp);
        if (Number.isSafeInteger(exp)) {
            return 'ok';
        } else if (!Number.isFinite(exp)) {
            return 'Too much';
        } else {
            return 'Warning';
        }
    }
    return NaN;
}

function sumPositivesAndNegatives(args) {
        var sum = [0, 0];
        for (var i = 0, val; i < args.length; i++) {
            if (args[i] instanceof Array) {
                val = sumPositivesAndNegatives(args[i]);
                sum[0] += val[0];
                sum[1] += val[1];
            } else {
                val = new Number(args[i]);
                if (!isNaN(val)) {
                    if (val >= 0) {
                        sum[0] += val;
                    } else {
                        sum[1] += val;
                    }
                }
            }
        }
        return sum;
    }

module.exports = {
    calc: calc,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
