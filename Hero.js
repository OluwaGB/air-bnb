import React from 'react'
import './App.css'
import img from './logo.svg'

const Hero=()=>{
    return(<div className='hero'>
        <div id="flex">
            <button id="btn">Welcome to iT</button>
            <button id="btn1">Tech And Product</button></div>
            <h1>We create digital experiences</h1>
            <p>We have the knowledge and expertise in design and modern programming<br/>
                 languages and platforms to help startups and<br/>
growing companies build successful products.</p>
<button id="btn3">Get Started</button>

            
    </div>)
}

/*const Img=()=>{
    return(<>
    <img src={img}/>
    </>)
}*/
export default Hero