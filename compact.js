// Creates an array with all falsey values removed.
//  The values false, null, 0, "", undefined, and NaN are falsey.

function compact(arr){
    const result = arr.reduce((acc,cur) => {
        if(cur) acc.push(cur);

        return acc;
    },[]);

    return result;
}

console.log(compact([0, 1, false, 2, '', 3]));