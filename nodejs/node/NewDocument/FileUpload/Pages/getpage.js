const getpage=()=>{
    return (`<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>FileUplaod</title>
    </head>
    <body>
        <form action="/send" method="POST" enctype="multipart/form-data">
            <input type="text" placeholder="Enter your username"
                name="username">
            <input type="file" name="userfile">
            <button type="submit">Sumbit</button>

        </form>

        <a href="./"><button>Preview</button></a>

        

      

      

    </body>
</html>`)

}

export default getpage;