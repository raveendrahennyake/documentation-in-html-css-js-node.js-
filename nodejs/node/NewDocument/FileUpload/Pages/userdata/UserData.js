 export const dataHtml=(state)=>{
  const message=state==="ok"?"data send":"server is error"
    return (`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>${message}</h1>
       <a href="./"><button>Preview</button></a>

    </body>
</html>`)
}
