import readFiles from "./readFile.js";
import WriteFile from "./writeFile.js";

readFiles('documents.txt',(data)=>{
   const NewData=String(data).split(" ")
   const firstData=NewData[0];
   const MiddleData=NewData.slice(1,NewData.length-1).join (" ");
//    console.log(MiddleData);

   const lastdata=NewData[NewData.length-1];//elements
//    console.log(lastdata);
//   console.log(firstData);

  if(firstData==='write'){
   WriteFile(lastdata,MiddleData,(data)=>{console.log(data)})
   


  }

});