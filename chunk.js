// Creates an array of elements split into groups the length of size. 
// If array can't be split evenly, the final chunk will be the 
// remaining elements


function chunk(arr,key){
    let res = [];
    
    for(let i=0,j=key;i<arr.length;i+=key,j+=key){
        const temp = arr.slice(i,j);
        res.push(temp);
    }

    return res;
}

const ar = ["a","b","c","d","e","f",'g'];

console.log(chunk(['a', 'b', 'c', 'd'], 3));