// Creates an array of array values not included in the other given
// arrays using SameValueZero for equality comparisons.
// The order and references of result values are determined by the first array.

function difference(arr,val){

    let res = [];
    
    for(let i=0;i<arr.length;i++){
        let flag = true;
        for(let j=0;j<val.length;j++){
            if(arr[i] == val[j]){
                flag = false;
                break;
            }
        }
        if(flag) res.push(arr[i]);
    }

    return res;
}


console.log(difference([2, 1, 4, 3, 6, 9], [2, 3, 4, 5]));