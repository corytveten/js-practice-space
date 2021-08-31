var removeDuplicates = function(nums) {
    let unique = [];
    nums.forEach(c => {
        if (!unique.includes(c)) {
            unique.push(c)
        }
    })
    return unique;
};

arr = [1, 1, 2]
console.log(removeDuplicates(arr))