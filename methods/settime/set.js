
// set time
function getname (){
    let a=new Date ().toLocaleTimeString ();
    time.textContent=a;
}
//set interver
//let b=setInterval(getname,1000);

//clear intervel
function clearTime (){
    clearInterval(b);
}
stoptime.addEventListener("click",clearTime);{


}

//set time out

function myfunction () {
    alert("Hello");
}

function settimeout() {
    setTimeout(myfunction,3000);

}
btn.addEventListener("click",settimeout); 








   
