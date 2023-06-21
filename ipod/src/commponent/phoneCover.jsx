import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast } from '@fortawesome/free-solid-svg-icons';
import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Display from './display';
class Phone extends React.Component{
   constructor(){
    super();
    this.state={
      showMenu:false
    }
   }
   menuCard = ()=>{
    console.log('menu is pressed',this.state.showMenu);
    this.setState({
      showMenu:true
    })
   }
  render(){
    const {showMenu} = this.state;
    return(
      <div id="outer" className='container ' style={{height:"100%"}}>
          <div className='container phone'>

            <div className='  display'>
            {showMenu && <Display/>}
             
            </div>
            <div className="container  buttons">
  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-center">
  <div className="button" onClick={this.menuCard}  style={{ fontFamily:'verdana' }}>
  MENU
</div>
  </div>
  <div className="d-flex flex-row justify-content-between">
    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-left">
      <div><FontAwesomeIcon icon={faBackwardFast} style={{ color: '#061e47' }}/></div>
    </div>
    <div className='rounded-circle okbutton border border-1'></div>
    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-right">
      <div>      <FontAwesomeIcon icon={faForwardFast} style={{ color: '#061e47' }} />
</div>
    </div>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-bottom">
    <div><FontAwesomeIcon icon={faPlay} /> <FontAwesomeIcon icon={faPause} /></div>
  </div>
</div>

          </div>
      </div>
    )
}

}

export default Phone;