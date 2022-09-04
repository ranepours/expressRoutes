const mean = (nums) => {
    if(nums.length === 0) return 0;
    return nums.reduce((acc,next) => {
        return acc + next;
    }) / nums.length;
}

const median = (nums) => {
    nums.sort((a,b) => a - b);

    let mid = Math.floor(nums.length/2);
    let med;

    if(nums.length % 2 === 0){
        med = (nums[mid] + nums[mid -1])/2;
    } else {
        med = nums[mid];
    } return med
}

function frequency(nums) {
    return nums.reduce(function(acc, next) {
      acc[next] = (acc[next] || 0) + 1;
      return acc;
    }, {});
}

const mode = (nums) => {
    let freqCounter = frequency(nums);

    let count = 0;
    let mostFrequent;

    for(let f in freqCounter){
        if(freqCounter[f] > count){
            mostFrequent = f;
            count = freqCounter[f];
        }
    } return +mostFrequent;
}

function validate(nums){
    let res = [];

    for(let i = 0; i < nums.length; i++){
        let val = Number(nums[i]);
        if(Number.isNaN(val)){
            return new Error(
                `${nums[i]} at index ${i} is not a valid number.`
            );
        } res.push(val);
    } return res;
}

module.exports = {mean, median, mode, frequency, validate}
