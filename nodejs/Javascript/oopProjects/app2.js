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

let arr=[];

let Myfunction1= async (val)=>{

    let error=false;

    let  TimeOut= await new Promise ((reslove,rejected)=>{
        if(error){
            rejected("data is not updated");
        }else {
            setTimeout(()=>{
            arr.push(val);
            reslove("data is update")
        },2000)
        }
    })
    console.log(TimeOut);
    console.log(arr);
}

Myfunction1(5000);






// Myfunction1(100).then((reslove)=>{console.log(reslove);}).catch((reject)=>{console.log(reject);});