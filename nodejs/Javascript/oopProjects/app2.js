// let Myfunction=()=>{
//      return new Promise ((reslover,reject)=>{
//         let errror=false;
//         if(errror){
//             reject("you have errror");
//         }else {
//             reslover([
//                 "your succes"
//             ]);
//         }
//     })

// }
// Myfunction().then((reslover)=>{console.log(reslover)}).catch((errror)=>{console.log(errror);
//     })

//async    

// let arr=[];

// let Myfunction1= async (val)=>{

//     let error=false;

//     let  TimeOut= await new Promise ((reslove,rejected)=>{
//         if(error){
//             rejected("data is not updated");
//         }else {
//             setTimeout(()=>{
//             arr.push(val);
//             reslove("data is update")
//         },2000)
//         }
//     })
//     console.log(TimeOut);
//     console.log(arr);
// }

// Myfunction1(5000);

// let error=false;
// setInterval((error)=>
//     error?console.log("data is errror")||console.log("data is ")
    
  
// ,5000)


// Myfunction1(100).then((reslove)=>{console.log(reslove);}).catch((reject)=>{console.log(reject);});

let NewArray=[];

let newfunction=async (val)=>{

    let error=false;
     let data  =await new Promise((res,rej)=>{
        setTimeout(()=>{
            if(error){
            rej("error is find")
        }else{
            res(NewArray.push(val))
        }

        },5000)
        
    })
    console.log(NewArray)
}
newfunction(10)



//Api Asscess

//promiceapi

let Api=fetch('https://jsonplaceholder.typicode.com/todos/').then(responce=>responce.json()).then(json=>console.log(json)).catch(error=>console.log(error))