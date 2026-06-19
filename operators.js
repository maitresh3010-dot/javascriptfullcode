// // Operators examples
// document.addEventListener('DOMContentLoaded', function() {
//     const demo = document.getElementById('demo');
//     const demo1 = document.getElementById('demo1');
    etggbhghhhh;
//     // Basic arithmetic and comparison
//     let x = 4;
//     let y = 3;
//     demo.innerHTML += '<h3>Logical Operators:</h3>';
//     demo.innerHTML += `x > y && x < y: ${x > y && x < y}<br>`;
//     demo.innerHTML += `x > y || x < y: ${x > y || x < y}<br>`;
//     demo.innerHTML += `!(y > x): ${!(y > x)}<br><br>`;
    
//     // Bitwise operators
//     demo.innerHTML += '<h3>Bitwise Operators:</h3>';
//     demo.innerHTML += `x & y: ${x & y}<br>`;
//     demo.innerHTML += `x | y: ${x | y}<br>`;
//     demo.innerHTML += `x ^ y: ${x ^ y}<br>`;
//     demo.innerHTML += `x >> y: ${x >> y}<br><br>`;
    
//     // Ternary operator
//     let age = 20;
//     let status = (age >= 18) ? 'Adult' : 'Minor';
//     demo.innerHTML += `<h3>Ternary:</h3>Age ${age}: ${status}<br><br>`;
    
//     // Loops
//     demo.innerHTML += '<h3>For Loop 1-10:</h3>';
//     for(let i = 1; i <= 10; i++) {
//         demo.innerHTML += `${i} `;
//     }
//     demo.innerHTML += '<br><br>';
    
//     demo1.innerHTML += '<h3>For Loop 10-1:</h3>';
//     for (let i = 10; i >= 1; i--) {
//         demo1.innerHTML += `${i} `;
//     }
//     demo1.innerHTML += '<br><br>';
    
//     // Type coercion
//     demo.innerHTML += '<h3>Type Coercion:</h3>';
//     demo.innerHTML += `1 + 200: ${1 + 200}<br>`;
//     demo.innerHTML += `200 + '300': ${200 + '300'}<br><br>`;
    
//     // Strict equality
//     demo.innerHTML += '<h3>Equality:</h3>';
//     demo.innerHTML += `2 === 2: ${2 === 2}<br>`;
//     demo.innerHTML += `2 == '2': ${2 == '2'}<br><br>`;
    
//     // Variables
//     let username = 'maitresh uke';
//     demo.innerHTML += `<h3>Variables:</h3>${username}<br><br>`;
    
//     // Math operators
//     let a = 10;
//     let b = 4;
//     demo.innerHTML += '<h3>Math:</h3>';
//     demo.innerHTML += `a ** a: ${a ** a}<br>`;
//     demo.innerHTML += `a % 2: ${a % 2}<br><br>`;
    
//     // If-else
//     let marks = 90;
//     demo.innerHTML += '<h3>Grade:</h3>';
//     if (marks >= 90) {
//         demo.innerHTML += 'Pass (Distinction)<br><br>';
//     } else {
//         demo.innerHTML += 'Fail<br><br>';
//     }
    
//     // Odd check
//     if (a % 2 !== 0 && b % 2 !== 0) {
//         demo1.innerHTML += 'Both odd<br>';
//     } else {
//         demo1.innerHTML += 'Not both odd<br><br>';
//     }
    
//     // Assignment chain (fixed)
//     demo1.innerHTML += '<h3>Assignment:</h3>';
//     let c = 30;
//     let d = 40;
//     a = b;
//     // b = c;
//     c = d;
//     d = a;
//     demo1.innerHTML += `a=${a}, b=${b}, c=${c}, d=${d}<br><br>`;
    
//     // Multiplication table
//     demo1.innerHTML += '<h3>Table of 2:</h3>';
//     for (let i = 1; i <= 10; i++) {
//         demo1.innerHTML += `${2 * i} `;
//     }
//     demo1.innerHTML += '<br><br>';
    
//     // Expressions
//     demo1.innerHTML += `2+5*10-20**2 = ${2 + 5 * 10 - 20 ** 2}<br>`;
//     demo1.innerHTML += `20/5*10+10 = ${20 / 5 * 10 + 10}<br><br>`;
    
//     // Odd check single
//     if (a % 2 !== 0) {
//         demo.innerHTML += 'YES (odd)<br>';
//     } else {
//         demo.innerHTML += 'NO (even)<br>';
//     }
    
//     // Percentage grade
//     let percentage = 85;
//     if (percentage >= 80) {
//         demo.innerHTML += `85%: Distinction<br><br>`;
//     } else if (percentage >= 60 && percentage < 80) {
//         demo.innerHTML += `85%: First Class<br><br>`;
//     } else if (percentage >= 50 && percentage < 60) {
//         demo.innerHTML += `85%: Second Class<br><br>`;
//     } else {
//         demo.innerHTML += `85%: Fail<br><br>`;
//     }
    
//     // Max of three
//     if (a > b && a > c) {
//         demo1.innerHTML += 'a max<br>';


// // console.log(2+5*10-20**2)

// // console.log(20/5*10+10)

// // let a  = 3
// // if (a%2 !== 0
// // )
// // {
// //     console.log('YES')
// // }

// // else {
// //     console.log('NO')
// // }


// // let age =  24
// // let ans  = (age >= 21)? 'Adult ' :'Minor'



// // let   percentage = 85
// // if (percentage >= 80){
// //     console.log('Distinction')

// // }
// // else if (percentage >= 60 && percentage < 80){
// //     console.log('First Class')
// // }
// // else if (percentage >= 50 && percentage < 60){
// //     console.log('Second Class')
// // }

// // else 
// // {
// //     console.log('Fail')
// // }


// // let a =  10 
// // let  b = 30

// // let c = 40
// // if (a>b && a>c){
// //     console.log('a is maximum')
// // }

// // else if (b>c && b>a){
// //     console.log('b is maximum')
// // }

// // else {
// //     console.log( ' c is maximum')
// // }

// // document.write('Hello World')


// // let answer  = prompt('What is your name?')
// // console.log('Hello ' + answer)
// // confirm('Are you sure?')



// // if (NaN){
// //     console.log('yes')
// // }
// // else{
// //     console.log('no')
// // }

// // let i =1 
// // while(i<=10){
// //     console.log(i)
// //     i++
// // }


// // const numbers = [1,2,3,4]
// // for(const num of numbers){
// //     console.log(num)
// // }


// // var day = 'Monday'


// // switch(day){
// //     case 'Monday':
// //         console.log('Today is Monday')
// //         break
// //     case 'Tuesday':

// //         console.log('Today is Tuesday')
// //         break
// //     case 'Wednesday':
// //         console.log('Today is Wednesday')
// //         break


// //     default:        console.log('Invalid day')
// // }

// // var str = 'i am \'maitresh'
// // console.log(str)


// // string Object = new  String('Hello World')

// // console.log(String Object)


// // str  = 'maitresh tulshidas  uke '

// // console.log(str.length)
// // console.log(str.toUpperCase())
// // console.log(str.toLowerCase())
// // console.log(str.indexOf('a'))

// // console.log(str.lastIndexOf('a'))
// // console.log(str.slice(0,8))
// // console.log(str.replace('maitresh', 'backchod coder'))




// // ab  = 'hello world'
// // let set = ()=>{
// //     ab = 12
// //     console.log(ab)

// // }


// // let ans = set()
// // console.log(ans)


// // let content = () =>{
// //      name = 'maitreh'
 
// //      document.getElementById('demo').innerHTML = name


// // }

// // console.log(content())
// // document.getElementBy,b,Id('demo1').innerHTML  =   name

// // let arr = [1,2,3,4,5]
// // let [a,b,c] = [arr];


// // console.log(a,b,c)


// // / / revrse the value //
// let a =10
// let b = 40
// [b,a]= [a,b]
// console.log(a,b)


// let arr = [1, 2, [3, 4, [6, 7, 8], 5], 6, 7];
// let [, , [, , [, a]]] = arr;
// console.log(a);


// let obj={
//     name:'maitresh',
//     age:20,
//     address:{
//         city:'amravati', 
//         area:'kapsi'
//     }
// }
let  name = maitresh uke 
// let {name, age}=obj
// console.log(name, age)

const currentdate = new Date()

console.log(currentdate)
