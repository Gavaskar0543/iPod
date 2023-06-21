import React from 'react'

const Phone = ()=>{
    return(
      <div id="outer" className='container ' style={{height:"100%"}}>
          <div className='container phone'>

            <div className='  display'>
            

            </div>
            <div className="container  buttons">
  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-center">
    <div className="button">MENU</div>
  </div>
  <div className="d-flex flex-row justify-content-between">
    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-left">
      <div>back</div>
    </div>
    <div className='rounded-circle okbutton border border-1'></div>
    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-right">
      <div>forward</div>
    </div>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-bottom">
    <div>pause</div>
  </div>
</div>

          </div>
      </div>
    )
}

export default Phone;