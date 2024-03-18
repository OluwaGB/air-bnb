import React from 'react'
//import './App.css'
const Joke =({author,article,date})=>{
    
    return(<>
    <h2>
        {author}
    </h2>
    <p>{article}</p>
    <h5>{date}</h5>
    
    </>


    )

}
const Jokes =(props)=>{
    console.log(props.comments);
    //console.log(new Date());
    const h = new Date();
    console.log(h);
    const minutes = h.getUTCDate();
    console.log(minutes);
    const times = h.getTime();
/*const  d = new Date()
 const dates= d.getUTCDate();
const  hour = d.getHours();
 const minutes = d.getMinutes();*/
    return(<>
    <h1>{times}</h1>
    <h2>
        {props.author}
    </h2>
    <p>{props.article}</p>
    <h3>{props.date}</h3>
    <p>{props.comments}</p>
    </>


    )

}
export {Joke,Jokes}