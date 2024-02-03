import React from 'react'
import './Projects.css'

export default function Projects() {
  return (
    <div className="proj-container">
        <div className='proj-parent'>
            <div className='proj-row'>
                <div className='proj-head-rw1'>
                    <span className="orange">
                        <i class="fa fa-circle" aria-hidden="true"></i>Rental Storey
                    </span>
                    <div className="edu-year">2022</div>
                </div>
                <div className='desc-rw'>
                    <div className='desc-highlight'>Technology Used : HTML, CSS, JavaScript, SQL, React Js, Java Springboot, Redux, MongoDB</div>
                    <div className='desc-curr'>Offered a 100% free-to-use solution for managing properties, rooms, tenants, and rental fees
                    Enabled property owners to easily manage their rental properties and track tenant
information, ensuring a seamless rental management experience without any costs involved.
                    </div>
                </div>
            </div>
            <div className='proj-row'>
                <div className='proj-head-rw2'>
                        <span className="orange">
                            <i class="fa fa-circle" aria-hidden="true"></i>Origo eMandi
                        </span>
                        <div className="edu-year">2022</div>
                    </div>
                    <div className='desc-rw'>
                        <div className='desc-highlight'>Technology Used : HTML, CSS, JavaScript, ReactJs, </div>
                        <div className='desc-curr'>Developed an innovative digital platform that revolutionizes the procurement and sale of
agricultural commodities nationwide.Offered a 100% cost-effective and efficient solution, empowering users to seamlessly buy
and sell agricultural products while ensuring compliance with price expectations and quality
criteria. Enabled stakeholders in the agricultural industry to optimize their transactions, making the
process more streamlined and effective.
                    </div>
                </div>
            </div>
            <div className='proj-row'>
            <div className='proj-head-rw3'>
                        <span className="orange">
                            <i class="fa fa-circle" aria-hidden="true"></i>PortFolio Website
                        </span>
                        <div className="edu-year">2022</div>
                    </div>
                    <div className='desc-rw'>
                        <div className='desc-highlight'>Technology Used : HTML, CSS, JavaScript, ReactJs</div>
                        <div className='desc-curr'>Developed and developed a live personal portfolio website from scratch , showcasing my
skills, projects, and achievements.ther of city entered , using open weather api.Implemented responsive design for optimal viewing across devices , ensuring a seamless user
experience.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
