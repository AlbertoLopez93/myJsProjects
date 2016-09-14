function cal(str1, str2, op) {
    let num1 = Number(str1);
    let num2 = Number(str2);
    if(Number.isNaN(num1) || Number.isNaN(num2)) {
        return Number.NaN;
    }

    switch(op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
    }
}

function howBigNumberIs(str1, str2, str3) {
    let num1 = Number(str1);
    let num2 = Number(str2);
    let num3 = Number(str3);
    let result, arr;
    if(Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3)) {
        return Number.NaN;
    }

    arr = [num1, num2, num3].sort();

    result = Math.pow(Math.pow(arr[2], arr[0]), arr[1]);

    if(Number.isSafeInteger(result)) {
        return 'Ok';
    } else {
        if(Number.isFinite(result)) {
            return 'Warning';
        } else {
            return 'To much';
        }
    }

}

function sumPositivesAndNegatives(arr) {
    let result = [0,0];

    function addValues (element){
        switch(typeof(element)) {
            case 'number':
                if(Number(element) > 0) {
                    result[0] += Number(element);
                } else {
                    result[1] += Number(element);
                }
                break;
            case 'boolean':
                result[0] += Number(element);
                break;
            case 'string':
                if(!Number.isNaN(Number(element))) {
                    if(Number(element) > 0) {
                        result[0] += Number(element);
                    } else {
                        result[1] += Number(element);
                    }
                }
                break;
            case 'object':
                if(element instanceof Array) {
                    element.forEach(addValues);
                }
                if(element instanceof Number) {
                    if(Number(element) > 0) {
                        result[0] += Number(element);
                    } else {
                        result[1] += Number(element);
                    }
                }
                if(element instanceof String) {
                    if(!Number.isNaN(Number(element))) {
                        if(Number(element) > 0) {
                            result[0] += Number(element);
                        } else {
                            result[1] += Number(element);
                        }
                    }
                }
                break;
        }
    }

    arr.forEach(addValues);

    return result;
}

module.exports = {
    cal: cal,
    howBigNumberIs: howBigNumberIs,
    sumPositivesAndNegatives: sumPositivesAndNegatives
}
