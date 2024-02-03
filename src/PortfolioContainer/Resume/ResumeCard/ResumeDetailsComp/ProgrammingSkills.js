import React from 'react'
import './ProgrammingSkills.css'
import ProgressBar from './ProgressiveBar/ProgressiveBar';

const testData = [
    { bgcolor: "#333333", completed: 60 }
  ];
  
export default function ProgrammingSkills() {
  return (
    <div className='skill-container'>
        <div className='skill-parent'>
            <div className='skills'>
                <div className='orangee'>
                    <span className='skill-name'><i class="fa fa-circle" aria-hidden="true"></i><b>HTML5</b></span>
                    <ProgressBar bgcolor={testData[0].bgcolor} completed='90' />
                </div>
                <div className='orangee'>
                    <span className='skill-name'><i class="fa fa-circle" aria-hidden="true"></i><b>CSS3</b></span>
                    <ProgressBar bgcolor={testData[0].bgcolor} completed='90' />
                </div>
                <div className='orangee'>
                    <span className='skill-name-js'><i class="fa fa-circle" aria-hidden="true"></i><b>JAVASCRIPT</b></span>
                    <ProgressBar bgcolor={testData[0].bgcolor} completed='80'/>
                </div>
                <div className='orangee'>
                    <span className='skill-name'><i class="fa fa-circle" aria-hidden="true"></i><b>JAVA</b></span>
                    <ProgressBar bgcolor={testData[0].bgcolor} completed='90' />
                </div>
                <div className='orangee'>
                    <span className='skill-name'><i class="fa fa-circle" aria-hidden="true"></i><b>REACT JS</b></span>
                    <ProgressBar className="bar" bgcolor={testData[0].bgcolor} completed='90' />
                </div>
                <div className='orangee'>
                    <span className='skill-name'><i class="fa fa-circle" aria-hidden="true"></i><b>FLUTTER</b></span>
                    <ProgressBar bgcolor={testData[0].bgcolor} completed='40' />
                </div>
                <div className='orangee'>
                    <span className='skill-name'><i class="fa fa-circle" aria-hidden="true"></i><b>SQL</b></span>
                    <ProgressBar bgcolor={testData[0].bgcolor} completed='90' />
                </div>
            </div>
        </div>
    </div>
  )
}
