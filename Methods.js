// *************************************************
// ********String methods
// length()
// trim()-1.ltrim & 2.rtrim
// toUpperCase()
// toLowerCase()
// includes()
//indexOf()
// slice()=> (-) no use thy
// subString()=>(-) no use na thy
//replace()
// concat()
// split()

// let str ="hello javascript world"
// console.log(str);
// console.log(str.length);
//trim
// let trimText = str.trim();
// console.log("trim() :",trimText);

//UpperCase

// console.log("toUpperCase() : ", str.toUpperCase());

//LowerCase
// console.log("toLowerCase() :",str.toLowerCase());

// includes
// console.log("includes() :",str.includes("jss"));

// console.log("indexOf() :",str.indexOf("world"));

// console.log("slice() :",str.slice(2,7));

// console.log("suubString():",str.substring(2,7));

// console.log("replace():",str.replace("javascript","React"));

// let extraText =" - hello js";
// console.log("Concat():",str.concat(extraText));

// console.log("Split():",str.split(" "));

//******************************************* */
// ********array methods()
// push()
// pop()
// unshift()
// shift()
// concat()
// includes()
// indexOf()
// splice()
// slice()
// join()
// delete()
// map()
// filter()
// find()
// forEach()
// sort()
// reverse()
// flat()

// let arr = ['one','two','three',1,{name:'name'}]
// console.log("Default Array:",arr);
// console.log("length() :",arr.length);

//push=>last ma new element add thy
// console.log("push() :",arr.push( "new added"));
// arr.push("new array element");
// console.log("array after push :",arr);

//pop=>last element delete thy
// arr.pop();
// console.log("array after pop :",arr);

//unShift=>ahead element add thy
// arr.unshift("first element")
// console.log('array after unshift:',arr);

//shift=>ahead element delete thy
// arr.shift()
// console.log('array after shift :',arr);

//concat
// let newArr =["str 1","str 2"];
// let mixedArr =arr.concat(newArr);
// console.log("default array after concat :", arr);
// console.log("array after concat :",mixedArr);

//include=>element che k nahi te check kare->true fale return kre
// console.log("include(): ",arr.includes("three"));
// if(arr.includes("two")){
//     //logic
// }

//indexOf
// console.log("indexOf()",arr.indexOf("three"));

//slice
// console.log("slice()",arr.slice(2,4));

//splice
// console.log("splice():",arr.splice(2,4));
// console.log("old array:",arr);

//join
// console.log("join()",arr.join(","));

//delete
// delete arr[4]
// console.log(arr);


// console.log("Array iteration method : ");
let numbers = [1, 2, 3, 4, 5]

//map

// console.log("map :", numbers.map(num => num * 2));
// console.log("after map old array : ", numbers);

//filter

console.log("filter : ", numbers.filter(num => num > 2));//for and if combination then use
// console.log("after filter old array :", numbers);

//forEach

// console.log("forEach :");
// numbers.forEach(num => console.log(num))
// foreach ->each & every elemet iteration thay

//Sort 

// let num =[3,5,2,4,1,6]
// console.log("sort() :",num.sort());

//reverse
// console.log("reverse() :",num.reverse());

//nested array
// let nestedArray =[1,2,[3,4],[5,6]]
// console.log("Default nested array :".nestedArray)
// let flatArray = nestedArray.flat()
// console.log("flatArray",flatArray)

//****Array destructuring */
//array destructuring jetla element require che tetla element leva 
// let array =[1,2,3,4,5]
// const [first,second,third]=array
// console.log(first);
// console.log(second);
// console.log(third);

//SKIPPING VALUES
// let array1 =[1,2,3,4]
// const [first, ,third]=array1
// console.log(first);
// console.log(third);

//rest operator//spread
// const num1 =[1,2,3,4,5]
// const [fir,second,...rest]=num1
// console.log(fir);
// console.log(second);
// console.log(rest);