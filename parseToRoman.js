function parseToRoman(n) {
    const decimal = [1000, 500, 100, 50, 10, 5, 1]
    const roman = ['M', 'D', 'C', 'L', 'X', 'V', 'I']
    let result = ""
    for (let i = 0; i < decimal.length; i++) {
        let q = Math.floor(n/decimal[i])
        n -= q * decimal[i] 
        if (q == 4) {
            result += roman[i] + roman[i-1]
        } else {
            while (q>0) {
                result += roman[i]
                q--
            }
        }

    }
    return result
}

console.log(parseToRoman(1234))