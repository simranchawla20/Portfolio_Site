import React, { useState } from 'react'
import { Link } from 'react-scroll';
import './ResumeNav.css'

export default function ResumeNav(props) {
  const [current, setCurrent]=useState({
    education:true,
    work:false,
    skills:false,
    projects:false,
    interests:false
  })
  function changeColor(clicked){
    if(clicked==="education")
    {
      setCurrent({
        education:true,
        work:false,
        skills:false,
        projects:false,
        interests:false
      })
      props.navProp({
        education:true,
        work:false,
        skills:false,
        projects:false,
        interests:false
      })
    }
    else if(clicked==="workhistory")
    {
      setCurrent({
        education:false,
        work:true,
        skills:false,
        projects:false,
        interests:false
      })
      props.navProp({
        education:false,
        work:true,
        skills:false,
        projects:false,
        interests:false
      })
    }
    else if(clicked==="programmingskills")
    {
      setCurrent({
        education:false,
        work:false,
        skills:true,
        projects:false,
        interests:false
      })
      props.navProp({
        education:false,
        work:false,
        skills:true,
        projects:false,
        interests:false
      })
    }
    else if(clicked==="projects")
    {
      setCurrent({
        education:false,
        work:false,
        skills:false,
        projects:true,
        interests:false
      })
      props.navProp({
        education:false,
        work:false,
        skills:false,
        projects:true,
        interests:false
      })
    }
    else if(clicked==="interests")
    {
      setCurrent({
        education:false,
        work:false,
        skills:false,
        projects:false,
        interests:true
      })
      props.navProp({
        education:false,
        work:false,
        skills:false,
        projects:false,
        interests:true
      })
    }
}
  return (
    <div className='nav-container'>
      <div className='icons'>
        <i class="fa fa-graduation-cap"></i>
        <i class='fa fa-rotate-left'></i>
        <i class='fa fa-code'></i>
        <i class="fa fa-bar-chart"></i>
        <i class="fa fa-arrows"></i>  
      </div>
      <nav className='sidenav'>
        <ul>
          <div className='li-div1'>
          <li>
            <div className={current.education?"side-link-div current-resume":"side-link-div"} onClick = {()=>changeColor("education")}>
                EDUCATION
            </div>
          </li>
          </div>
          <div className='li-div2'>
          <li>
          <div className={current.work?"side-link-div current-resume":"side-link-div"} onClick = {()=>changeColor("workhistory")}>
              WORK HISTORY
            </div>
          </li>
          </div>
          <div className='li-div3'>
          <li>
          <div className={current.skills?"side-link-div current-resume":"side-link-div"} onClick = {()=>changeColor("programmingskills")}>
              SKILLS
            </div>
          </li>
          </div>
          <div className='li-div4'>
          <li>
          <div className={current.projects?"side-link-div current-resume":"side-link-div"} onClick = {()=>changeColor("projects")}>
              PROJECTS
            </div>
          </li>
          </div>
          <div className='li-div5'>
          <li>
          <div className={current.interests?"side-link-div current-resume":"side-link-div"} onClick = {()=>changeColor("interests")}>
             INTERESTS
            </div>
          </li>
          </div>
          
        </ul>
      </nav>

    </div>
  )
}
