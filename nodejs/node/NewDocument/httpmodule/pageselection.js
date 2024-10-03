import About from "./pages/About.js"
import Contact from "./pages/Contact.js"
import Home from "./pages/Home.js"
import {URL} from 'node:url';

 export const pageselection=(url,res)=>{
const url=new URL(`http://localhost:4000/${url}`)
    if(url==='/'){
        res.end(Home())
    } else if (url==='/About'){
        res.end(About())
        
    }else if (url==='/Contact'){
        res.end(Contact());
    }


}