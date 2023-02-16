/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let newArr=[]
    for (let i=1; i <= n; i++){
        if ((Math.ceil(i % 3) == 0) && (Math.ceil(i % 5) == 0)){
            newArr.push("FizzBuzz")
        }
        else if (Math.ceil(i % 3) == 0){
            newArr.push("Fizz")
        }
        else if (Math.ceil(i % 5) == 0){
            newArr.push("Buzz")
        }
        else newArr.push(i.toString())
    }
    return newArr
};