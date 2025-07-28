/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(arr, Target) {

for (i = 0; i < arr.length; i++) {

    for (let j = i + 1; j < arr.length; j++) {

        if (arr[i] + arr[j] == Target)

            return [i,j]
    }

} 
}
    