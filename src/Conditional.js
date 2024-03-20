import React from 'react'
import './App.css'



const Conditional=()=>{
 const LoggedIn = 5;
if(LoggedIn == 5)
return(<><h1>Welcome Iyanuoluwa</h1>
    </>)
    else return(<h1>Welcome Guest</h1>

    )
}

const ObjectProps=({img,name,phone,email})=> {
    const colors = [<h5>red</h5>,
    <h5>Green</h5>,
<h5>Blue</h5>,
<h5>Yellow</h5>,
<h5>Purple</h5>]
/*const d = new Date();
 const date = d.getHour();
 console.log(date);
/*const comments = {author:"iyanu",
date:"20/03/2020",
upvote:11}*/
return(
    
    <div className="Grid">
    <img src={img}/>
    <h3>{name}</h3>
    <h4>{phone}</h4>
    <h5>{email}</h5>
    <h3>{colors}</h3>
    
    </div>
)
}
export {Conditional,ObjectProps}