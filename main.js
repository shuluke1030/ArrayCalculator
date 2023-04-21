function evaluate(arr) {
    if (arr.length % 2 === 0) {
        return undefined;
    }
    let sum = 0
    let addN = [];
    for (let i = 0; i < arr.length - 1; i += 2) {
        if (isNaN(arr[i])) {
            return undefined;
        } else if (arr[i + 1] !== "*" && arr[i + 1] !== "+") {
            return undefined;
        }
        if (arr[i + 1] === "+") {
            addN.push(Number(arr[i]));
        } else if (arr[i + 1] === "*") {
            sum = arr[i] * arr[i + 2]
            arr.splice(i + 2, 1, sum);
        }
    }
    let result = 0;
    if (arr[arr.length - 2] === "+") {
        addN.push(Number(arr[arr.length - 1]))
        for (let j = 0; j < addN.length; j++) {
            result += addN[j];
        }
        return result
    } else if (arr[arr.length - 2] === "*") {
        for (let j = 0; j < addN.length; j++) {
            result += addN[j];
        }
        return result + sum
    }

}

console.log(evaluate(['10', '+', '20', '*', '3']));
