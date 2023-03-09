import React, { useState } from 'react'


const Dclock = () => {
    let time = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(time);

    const UpdateTime=()=>{
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }
    setInterval(UpdateTime,1000);
  return (
    <div>
        <h6 className='btn1'>{ctime}</h6>
      {/* <button onClick={()=>setTime(new Date().toLocaleTimeString())}></button> */}
    </div>
  )
}

export default Dclock
