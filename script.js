const id = 'abh';
const nid = 'abh';
console.log(id)
console.log(nid)
console.log(id == nid)

/* object */

let obj = {
  name : "kanak",
  age : "19"
  
}
  console.log(obj)
// Array

let arr= [1,2,3,5,6]
console.log(`${arr[2]}, ${arr[3]}`)

//string
let sttrim = new String("  k.a.n.n.u  ");

let news = sttrim.slice(0,2)
  let news1 = sttrim.indexOf('n')
let news2 = sttrim.charAt(2)
let news3 = sttrim.trim()
let news4 = sttrim.split(".")
let news5 = sttrim.search('a')
  console.log(news4)
  console.log(news3)
  console.log(Math)
  console.log(sttrim)
  console.log(news5)

let num = new Number(25788554);
let conv = num.toString();
let conv1= num.toLocaleString();

console.log(conv)
console.log(conv1)
console.log(num)
console.log(Math)

let min = 1
let max = 6
let Digit = Math.floor(Math.random()* (max - min + 1) + min)
console.log(Digit)


let date = new Date().toLocaleString()
console.log(date)


////array////

let narr = [1,2,3,4,5,5,6,7]
let narr1 = [10,12,13,18]  




let slice = narr.slice( 0,3)  // does not delete any part from the array
console.log(narr)
  console.log(slice)

let splice = narr.splice(1,3) // delete the part from existing array
console.log(splice)
console.log(narr)


let concat = narr.concat(narr1)
console.log(concat)

let spread = [...narr , ...narr1]
  console.log(spread)


/// objects /////


let symbol = Symbol()
let obj1={
  Name : "kanak",
  class : "EC A",
  Roll_no  : 68,
  [symbol] : "key3"
}

console.log(obj1[symbol])
obj1["Name"] = "kannu"
console.log(obj1)

const { Roll_no : enroll} = obj1
console.log(enroll)


////// Function //

function rest_use(...num){
     return(num)
}
console.log(rest_use(5,4,6,4))

function object_pass(anyobj){
    return(`Hello my name is ${anyobj.Name} and my roll number is ${anyobj.Roll_no}`)
}

console.log(object_pass(obj1))

function array_pass(anyarray){
    return(`Numbers are ${anyarray[0]},${anyarray[1]}`)
}

console.log(array_pass(arr))



function star(kitne){
  for(i=0;i<=kitne;i++){
    console.log("*" + "_")
  }
}
star(8)


////////----- Scope - Chota bade se le sakta hai lekin chota bade se nahi //////

let nobject = {
  id : "kuch bhi",
faltu : function  hello(){
  let banda = "male"
   console.log(banda)
  console.log(this)
 }

}
nobject.faltu();





///// IIFE (Immidiately Invoked Function) ///
// Global scope ki problem ko solve karne key liye
// function ko immidiately execute karne ke liye

(function amaste(){
  console.log("namste neta ji")
}) ();

(function namaste(){
  console.log("namste mama ji")
}) ()
