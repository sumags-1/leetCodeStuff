/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function(num) {
    let numofStps=0;
    while (num != 0 && num > -1){
        if (num % 2 == 0){
            num=num/2
            console.log("num is " +num)
            numofStps+=1
            console.log("number of steps is "+numofStps)
        } else
        {
        num=num - 1
        console.log("num is " +num)
        numofStps+=1
            console.log("number of steps is "+numofStps)
        }
    }
    return numofStps
};