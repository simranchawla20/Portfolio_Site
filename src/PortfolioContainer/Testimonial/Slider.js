import React from 'react'
import './Slider.css'
import linkedIn from '../../assets/Home/linkedin.png'
import Java from '../../assets/Home/java.png'
import python from '../../assets/Home/python.png'
import Web from '../../assets/Home/web.png'
import github from '../../assets/Home/github.png'
import linux from '../../assets/Home/linux.png'
import codechef from '../../assets/Home/codechef.jpg'
import hackerrank from '../../assets/Home/Hackerrank.png'

import coding1 from '../../assets/Home/coding1.jpg'
import coding2 from '../../assets/Home/coding2.jpg'
import coding3 from '../../assets/Home/coding3.jpg'
import coding4 from '../../assets/Home/coding4.jpg'
import coding5 from '../../assets/Home/coding5.jpg'
import coding6 from '../../assets/Home/coding6.jpg'
import coding7 from '../../assets/Home/coding7.jpg'
import coding8 from '../../assets/Home/coding8.jpg'


export default function Slider() {
  return (
    <div className='Body'>
        <div className='slider'>
            <div className='slide-track'>
            <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={linkedIn}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={Java}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={python}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={Web}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={github}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={linux}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={codechef}></img>
                </div>
                <div className='slide'>
                    <img src={coding1}></img>
                </div>
                <div className='slide'>
                    <img src={hackerrank}></img>
                </div>
                

            </div>
        </div>
    </div>
  )
}
