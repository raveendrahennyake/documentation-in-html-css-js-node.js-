let Myfunction=()=>{
     return new Promise ((reslover,reject)=>{

        let errror=false;
        if(errror){
            reject("you have errror");
        }else {
            reslover([
                "your succes"
            ]);

        }
    })

    

}
Myfunction().then((reslover)=>{console.log(reslover)}).catch((errror)=>{console.log(errror);

    })