//Object is a Collection of any type of Data
// const person = {
//     name :'testing',
//     age : 24,
//     hobbies : ['cricket','listen'],
//     greet : function ()
//     {
//         console.log("hello")
//     }
// }
//access values from object
// console.log(person.name)
// console.log(person['name']);

//adding or modifying tha data of obj

// person.job ="developer"
// person.salary=50000
// console.log(person);
//delete
// delete person.salary
// console.log(person);

//nested object
// const person1 ={
//     name : 'john',
//     age : 20,
//     address :{
//         city :"junagadh",
//         ZipCode :'362220',
//         street:"123 keshod"
//     }
// }
// console.log(person1);
// console.log(person1?.address?.city);
// console.log(Object.keys(person1));
// console.log(Object.entries(person1));//Object entries


const user = {
    name: "user",
    role: "Admin",
    designation: "developer",
    age: 25,
    address: {
        city: "ksd",
        ZipCode: 362220,
        street: "123 main Road"
    }
}
// const{name,age,role}=user
// console.log(name,age,role);

// const {name:profileName,age:profileAge}=user//rename object 
// console.log(profileName,profileAge);

// const { name, age, role, state = "Gujarat" } = user//object ni under default value set krvi
// console.log(name, age, role, state);

//spread
// const array =[1,2,3]
// const moreElements = [...array,4,5,6]
// console.log(moreElements);
//copied
// const originalArray = [1,2,3]
// const copiedArray =[...originalArray]
// console.log(copiedArray);
//merged
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// const mergedArray=[...arr1,...arr2]
// console.log(mergedArray);

//spread opt.in obj
// const user1 ={
//     name:"user1",
//     city:"jngdh"
// }
// console.log(user1);

// const newObj ={
//     ...user1,
//     role:"React Developer",
// }
// console.log(newObj);

//copy obj
//merge
const obj1 ={
    name:"user2",
    age:20
}
const obj2={
       city:"ksd",
       state:"gujarat",
       age:30
}
const obj3={...obj1,...obj2}
console.log(obj3);


