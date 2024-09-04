const obj1={
    name:"sam",
    age:25
  }


  obj1.city=["kandy"];

  const Count={...obj1};
  Count.country=["sam"];
  console.log(Count)


  Combining arrays
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];
console.log(combinedArray); // Output: [1, 2, 3, 4, 5, 6]

// Cloning an array
const originalArray = [7, 8, 9];
const clonedArray = [...originalArray];
console.log(clonedArray); // Output: [7, 8, 9]


Spreading in Arrays


const Array=[77,88,66];

const NewArray=[...Array];
console.log(NewArray);


const [first, ...rest] = [100, 200, 300, 400];
console.log(first); // Output: 100
console.log(rest);  // Output: [200, 300, 400]

const Details={
  name:"sam",
  age:224,
  document:{
    city:"kandy",
    town:"badulla",
    country:"srilanka"
  }
}
//change Obbect details

const NewCopy={...Details,age:{...Details.age,age:1000}}

const NewCountry={...Details,country:{...Details.country,country:"indial"}};


console.log(NewCopy);
console.log(NewCountry);



add to data to object;

const CopyDetails=produce(Details)

Details.city="badulla";

const CopyDetails={...Details};

CopyDetails.stree="town";

console.log(Details);
console.log(CopyDetails);


change data in object;
