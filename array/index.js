let arr = [1,2,3,4,5,10]

// console.log(arr)
// arr.push(20,30)

// console.log(arr)


// arr.unshift(5,6,786)


// console.log(arr)





 

// arr.shift(1,2,3,4)
// console.log(arr)


// arr.pop()
// console.log(arr)

// console.log(arr.sort( function (a,b){
//     return a+b
// }))

// arr.forEach(function (ele, index){
//     console.log(ele, index)
// })


// let maps = arr.map(function (value){
//     return  value*2
// })

// console.log(maps)


let checkpositivevalue =(checkvalue)=>{
    return checkvalue>0;
}
let arr1 = [-1,34,44,-33]
console.log(arr1.filter(checkpositivevalue))


let checkfunc = (check)=>{
    return check>1
}
console.log(arr1.find(checkfunc))





// filter

let filtercheck =  (ele = >{
    return ele >=0
}