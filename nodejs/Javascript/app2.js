let a="10";

let name="sam";
let Details="documents";
// console.log(Details.substring(1,3));

// console.log(Details.lastIndexOf('Details'));
// console.log(Details.charAt('1'));


// console.log(`My name is ${name}`);


let newNumber=Number(a);
// console.log(newNumber);
// console.log(a-1);
// console.log(a/2);


//Arraw

// const arr=["sam","tom","david"];

// console.log(arr.reverse());

// let city="badulla to sri lanka";
// console.log(city.slice(0,6));



// let documents1=[1,2,8,[87,66]];
// console.log(documents1[3][0])


//Spread

let obj1={
    name:"sam",
    city:"badulla",
    age:25
}



let nreArray=[77,88,9,44,55];

console.log(nreArray[0,3]);



// console.log([...nreArray.slice(0,2),99,...nreArray.slice(3)]);
// console.log(...nreArray);

let NewArrays=[...nreArray,66,77,88,99];
// console.log(NewArrays);



// const originalObject = { e: 5, f: 6 };
// const clonedObject = { ...originalObject };
// console.log(clonedObject); // Output: { e: 5, f: 6 }


let new1=["sam","tom"];
let new2=["david"];
// console.log(new1.concat(new2));

let new4=[44,55];
let new5=[66,77];

new5[0]=6000;
// console.log(new4.concat(new5));


let news=["saa","pass","gaaa"];
news.unshift("wwwe");
news.push("last");
news.shift();
news.pop();
// console.log(news);


//Objects

let obj2={
    name:"sam",
    age:25,
    language:["java","javascript","python"],
    city:{
        addres1:"badulla",
        addres2:"sri lanka",
        addres3:"india"
    }

}
// obj2.country="srilanka"
// console.log(obj2)


//functions

// function function5 (name,age,city){
//     return name;


// }
// function5("sam",25,"badulla");

// let newname=name;
// // console.log(newname);


// let news1=prompt("Enter your name");
// console.log(new1);


//Arraw functions

let age=50;

const documents=()=>{
    let age=25;
    
    return console.log(`my age is ${age}`)
}
















