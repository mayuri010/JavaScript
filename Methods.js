// String methods
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

let str ="hello javascript world"
console.log(str);
console.log(str.length);
//trim
let trimText = str.trim();
console.log("trim() :",trimText);

//UpperCase

console.log("toUpperCase() : ", str.toUpperCase());

//LowerCase
console.log("toLowerCase() :",str.toLowerCase());

// includes
console.log("includes() :",str.includes("jss"));

console.log("indexOf() :",str.indexOf("js"));

console.log("slice() :",str.slice(2,7));

console.log("suubString():",str.substring(2,7));

console.log("replace()",str.replace("javascript","React"));

let extraext =" - hello js";
console.log("Concat():",str.concat(extraext));

console.log("Split():",str.split(" "));