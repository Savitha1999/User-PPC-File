import React from 'react'
import  logo  from "../Assets/Sale Property-01.png";


export default function Notification() {

  return (
    <div className='d-flex justify-content-center align-items-center mt-3'>
        <div style={{maxWidth:"450px",height:'100vh'}}>
          <div className="card mb-3 shadow">
    <div className="row g-0">
      <div className="col-4 d-flex justify-content-center pt-3">
        <img
          style={{ height: '50px' }}
          src={logo}
          className="img-fluid rounded-start"
        />
      </div>
      <div className="col-8">
        <div className="card-body">
          <h5 className="card-title fs-bold">Welcome!!</h5>
          <p className="card-text" style={{ color: 'grey' }}>
            Welcome to Rental Pondy. Buy or Rent your Property instantly. For any Support call us: 0413-2222244 /+91-8111022255
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}
