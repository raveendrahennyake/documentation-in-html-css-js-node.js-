//oop
class Person {
    static city="Srilanka";
    constructor (name,age,phumber){
        this.name=name;
        this.age=age;
        this.phumber=phumber;

    }

    displayname (){
        console.log(`your name is ${this.age}`);
    }
}

class Children extends Person{
    city="srilanka";
    constructor (name,age,phumber,city){
        super(name,age,phumber)
        this.city=city;

    }

}

let Children1=new Children("deen",58,12358,"nuwara");
console.log(Children1.name);







// let Person1=new Person ("sam",25,1234)
// console.log(Person1);
// console.log(Person1.age)
// console.log(Person1.displayname());
// console.log(Person.city)

// export default Person;