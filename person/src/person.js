class Person{
   constructor(name, age, gender, interests){
       this.name = name;
       this. age = age;
       this.gender = gender;
       this.interests = interests;

   }
   sayHello(){
       {console.log(`hello my name is ${this.name} I am ${this.age} years old and I am a ${this.gender} I love ${this.interests}`);
   } 
}
}
// let person = new Person("Emihle", 2, "female", "singing");
// let person1 = new Person("Unako", 6,"male", "dancing")
// person.sayHello();
// person1.sayHello();