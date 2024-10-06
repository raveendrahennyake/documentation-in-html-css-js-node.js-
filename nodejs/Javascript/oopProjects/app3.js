//FetchApi

// let api= fetch('https://jsonplaceholder.typicode.com/todos')
//    .then(responce=>responce.json())
//    .then(json=>console.log(json)).catch(error=>{console.log(error)});
      
//asyncapi


let NewApi=async ()=>{
    let fetchapi=await fetch ('https://jsonplaceholder.typicode.com/todos')

    let data=await fetchapi.json();

    console.log(data);
}

NewApi();



    