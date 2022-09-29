// Creates a duplicate-free version of an array, using SameValueZero for
// equality comparisons,in which only the first occurrence of each element is kept.
// The order of result values is determined by the order they occur in the array.


function uniq(arr){
    let unique = [];
    for(i=0; i < arr.length; i++){ 
        if(unique.indexOf(arr[i]) === -1) { 
            unique.push(arr[i]); 
        } 
    }
    return unique;
}

const arr = [2,1,2,3,5,2,4,5,7,8,5,4,6,7];

console.log(uniq(arr));