//oop
class Person {
    static city="Srilanka";
    constructor (name,age,phumber){
        this.name=name;
        this.age=age;
        this.phumber=phumber;
    }
    displayname (){
        console.log(`your name is ${this.name}`);
        return this;
    }
    displayage (){
        console.log(`your age is ${this.age}`);
        return this;

    }
}
class Children extends Person{
    static city="sam";
    constructor (name,age,phumber,city){
        super(name,age,phumber);
        this.name=`hi ${name}`;
        this.city=city;
    }
}

let Children1=new Children("deen",58,12358,"nuwara");
let Children2=new Children ("sam",23,1234,"Nuwarassss");
let Children3=new Children ("david",28,1234,"kandy");

const Children5=new Children("saa",41,7410,"badulla");

console.log(Children.city);

// let Person1=new Person ("sam",25,1234)
// console.log(Person1);
// console.log(Person1.age)
// console.log(Person1.displayname());
// console.log(Person.city)

// export default Person;

// const Person1=new Person ("san",74,5574);
// Person1.displayage().displayname();