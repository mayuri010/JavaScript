//Object is a Collection of any type of Data
const person = {
    name :'testing',
    age : 24,
    hobbies : ['cricket','listen'],
    greet : function ()
    {
        console.log("hello")
    }
}
//access values from object
console.log(person.name)
console.log(person['name']);

//adding or modifying tha data of obj

person.job ="developer"
person.salary=50000
console.log(person);
//delete
delete person.salary
console.log(person);

//nested object
const person1 ={
    name : 'john',
    age : 20,
    address :{
        city :"junagadh",
        ZipCode :'362220',
        street:"123 keshod"
    }
}
console.log(person1);
console.log(person1?.address?.city);
console.log(Object.keys(person1));
console.log(Object.entries(person1));//Object entries



