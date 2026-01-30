let student={
    name: "first name",
    email: "USER@GMAIL>COM",
    course: "javaScript,React,Node",
    marks:[45,78,60,90,33],
    hobbies: ["Music","Cricket","Reading"],
    address: ["India",["Gujarat","Ahemdabad"]]
};
// ***STRING OPERATION


// Remove extra spaces from name and convert it toUpperCase
// let sname=student.name.trim().toUpperCase();
// console.log(sname);

// Convert email to lowercase
// console.log("toLowerCase() :",student.email.toLowerCase());

// Check whether course includes "React"
// console.log("includes () :",student.course.includes("React"));

//Find the index of "Node" in course
// console.log("indexOf ():",student.course.indexOf("Node"));

//Replace "JavaScript" with "js"
// console.log("replace():", student.course.replace("javaScript", "js"));

// Convert Course string into an array
// console.log("Split():",student.course.split(" "));

// // Display the length of student name
// console.log("Length() :",student.name.length);


// ***Array Operation

// Add "Swimming to hobbies "
// console.log("Push():", [...student.hobbies, "Swimming"]);

//Remove the Last Hobby
// student.hobbies.pop();
// console.log("After pop :",student.hobbies);

// Add "Drawing" at the beginning of hobbies
// student.hobbies.unshift("Drawing")
// console.log(student.hobbies);

//Remove the First Hobby
// student.hobbies.shift()
// console.log(student.hobbies);

//merge hobbies with course array
// const student = {
//   course: ["javaScript", "React", "Node"],
//   hobbies: ["Music", "Cricket", "Reading"]
// };

// const mergedArray=[...student.course,...student.hobbies]
// console.log(mergedArray);

//25.check if "React" exists in course array
// console.log("Includes():",student.course.includes("React"));

// Find Index of "js" in course array
// console.log("IndexOf () :",student.course.indexOf("js"));

//Extract first two marks
// const [first,second]=student.marks
// console.log(first);
// console.log(second);

// Remove one failed subject mark (less then 40)using splice


//convert hobbies array into a string

// let hobbiesString = student.hobbies.join(", ");

// console.log(hobbiesString);


// ****ARRAY ITERATION METHODS


// use map() to add 5 bonus marks to each mark
// console.log("Map () :",student.marks.map(num=>num+5));

//Use filter() to get only passed marks (>=40)
// console.log("Filter() :",student.marks.filter(num=>num>=40));

//use find() to find the first mark above 80

// let result = student.marks.find(mark => mark > 80);
// console.log(result);

// use forEach() to print each hobby

// console.log("forEach :-");
// student.hobbies.forEach(num => console.log(num))

// sort marks in ascending order 
// console.log("sort() :",student.marks.sort());

// Reverse marks order 
// console.log("Reverse () :",student.marks.reverse());

//Flatten the address array
// let flatAddress = student.address.flat();
// console.log(flatAddress);

// Add a new property result ="pass" if all marks are >=40
// if (student.marks.every(mark => mark >= 40)) {
//     student.result = "pass";
// } else {
//     student.result = "fail";
// }

// console.log(student);

// print final student object
console.log(student);