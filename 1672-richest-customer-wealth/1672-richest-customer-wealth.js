/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let newAccBal=[]
    for (let i=0; i< accounts.length; i++){
        let wealth=0;
        for (let j=0; j < accounts[i].length; j++){
            wealth+=accounts[i][j]
        }
        newAccBal.push(wealth)
        console.log(newAccBal)
    }
    return Math.max(...newAccBal)
};