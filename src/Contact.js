import React, { useState } from "react";

const Contact = () => {
  const [data, setData]=useState({
    fullname:"",
    phone:"",
    email:"",
    msg:"",
  })

  const inputEvent=(event) =>{
const {name, value} = event.target;
  setData((preVal)=>{
    return {
        ...preVal,
        [name] : value,
    }
  })
  }
  const formSubmit = (e) =>{
    e.preventDefault();
    alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I want to say ${data.msg}`)
  };
  return (
    <div>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
           

              <form onSubmit={formSubmit}>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                  FullName
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter your name"
                  
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                   Phone
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                   Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                   Message
                  </label>
                  <input
                    // type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    name="msg"
                    value={data.msg}
                    onChange={inputEvent}
                    placeholder="Enter your message"
                    rows="3"
                  />
                </div>
               


                
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    rows="3"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <button type="submit" className="btn btn-outline-primary">
                  Submit 
                </button>
              </form>

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
