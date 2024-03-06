import React from 'react'
import './App.css'
import image1 from './img/image 12.png'
import image2 from './img/wedding-photography 1.png'
import image3 from './img/mountain-bike 1.png'



const Column =()=>{

    return(
        <div className='flex'>
            <div id="card1">
                <img id="fImage" src={image1}></img>
                <span><p>5.0</p><p>USA</p></span>
                <p>Life Lessons with Kolte Zaffres</p>
                <p><b>From $316</b>/person</p>

            </div>
            <div id="card1">
                <img id="fImage" src={image2}></img>
                <span><p>5.0</p><p>USA</p></span>
                <p>Life Lessons with Kolte Zaffres</p>
                <p><b>From $316</b>/person</p>
</div>
            <div id="card1">
                <img id="fImage" src={image3}></img>
                <span><p>5.0</p><p>USA</p></span>
                <p>Life Lessons with Kolte Zaffres</p>
                <p><b>From $316</b>/person</p>

            </div>
        </div>
    )
}
export default Column