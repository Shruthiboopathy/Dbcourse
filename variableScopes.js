// //data types
// // Number	A number representing a numeric value
// let num = 1
// // Bigint	A number representing a large integer
// let numbid = BigInt(31231348137498317)
// // String	A text of characters enclosed in quotes
// let string = 'lakshman boopathy'
// // Boolean	A data type representing true or false
// let bool = true
// // Undefined	A variable with no assigned value
// // Null	A value representing object absence


// //structures
// let arr = string.split(" ")
// console.log(arr,arr[1],string)

/** types of declarations -> let , var ,const

    var -> global / functional scopes
    let const -> block scopes

 */
let bool = true

var a = 0;
let b = 0;
const c = 0;

{
    let a = 0
    {
        var v = 0
        console.log(a)
        let b2 = 3
    }
    console.log(b2)
}



if(bool){
     var a1 = 1;
     let b1 = 1;
     const c1 = 1;
}

console.log(a,b,c);
console.log('a1: ',a1);
console.log('b1: ',b1);
console.log('c1: ',c1);


// console.log(a1,a2,a3)

// objects array
// let fullname = 'Lakshman boopathy'
// let age = 25
// let gender = "male"

// let user = {
//     firstname:fullname.split(" ")[0],
//     lastname:fullname.split(" ")[1],
//     Age: age,
//     gender:gender
// }

// console.log([user,user,user])
// a = 2
// console.log(a)















/** 
quali = "BE";
console.log(quali);
var firstname = "rajan"; //declaration
var firstname = "kumar"; //redeclaration
firstname = "raj"; //reassignment
const lastname = "kanann";
//var lastname="rajesh"; //redeclaration  error
//lastname="gokul";//reassignment  error
console.log(firstname);
let age = 45; //declaration
age = 24; //reassignment
//let age=34; //redeclaration error
//var age=32;//redeclaration error
//let firstname="rajan"; //redeclaration error
console.log(firstname);
console.log(age);
let a = 6; //global scope
if (true) {
const a = 5; // block scope
console.log(a);

if (true) {
const a = 8; // block scope
console.log(a);
}
}
console.log(a); // 6



let full_name = "shruthi boopathy"



let stringA = "abc"
let n = 5
let arraya = ['a','b','c','d']

let first_name = full_name.split(" ")[0];
console.log(first_name)
let second_name = full_name.split("")[1];
console.log(second_name)
*/

