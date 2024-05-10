 function dollrice () {

    const myinput=document.getElementById("input1").value;
    // console.log(myinput)
    const result=document.getElementById("result");
    const image=document.getElementById("image");
    const values=[];
    const images=[];
    // randomnumber;
    // const randomnumber="";


    for (let i=0;i<myinput;i+=1){
        
        const value=Math.floor(Math.random()*6)+1;
        // console.log(randomnumber);
        values.push(value);
        images.push(`<img src="Dice_image/${value}.png">`);
    } 

    

    result.textContent=`Dice : ${values} `
    image.innerHTML=images;

      
    


    

  


    


     
}


//  myinput.addEventListner("click",dollrice)


