import React from 'react'
import {Link} from 'react-router-dom'



const Common = (props) => {
  return (
    <div>
   <section id='header' className='d-flex align-items-center'>
   <div className='container-fluid'>
          <div className='row'>
            <div className='col-10 mx-auto'>
              <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center f-column'>
                <div className="row">
                <h1>{props.name} <strong className='text-primary navbar-brand'>TechInfo</strong></h1>
                <h2 className='my-3'>We are the team of tallented web developer making websites</h2>
                <div className="mt-3">
                  <Link to={props.visit} className='btn1'>{props.btname}</Link>
                </div>
                </div> 
                <div className='col-lg-1 order-lg-2 header-img animated'>
                   <img src={props.imgsrc} className='img' alt='home'/>
                </div> 
                </div>
            </div>
          </div>
        </div>
  </section>
    </div>
  )
}

export default Common
