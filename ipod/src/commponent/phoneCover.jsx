import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast } from '@fortawesome/free-solid-svg-icons';
import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Display from './display';
class Phone extends React.Component{
  optionCount = -1

   constructor(){
    super();
    this.state={
      showMenu:false,
      selectedOption : '',
    }
   }
   product = ['coverflow','music','game','settings'];
  
   //show menu
   menuCard = ()=>{
    console.log('menu is pressed',this.state.showMenu);
    
    let action = this.state.showMenu;
    
    if(action){
    this.setState({
      showMenu :false
    });
  }else{
    this.setState({
      showMenu :true,
      
    })
  }
   }
   //ok button
    okButton = ()=>{
      console.log('ok button is pressed');
    }
    //forward button
    forwardButton = ()=>{
      let {selectedOption} = this.state;
     if(this.optionCount >= 3){
      console.log(this.optionCount)
      this.optionCount = -1;
     }
     this.optionCount += 1;
     
  
     console.log(this.state.selectedOption);
     selectedOption = this.product[this.optionCount];
     this.setState({
      selectedOption
     })
     
    }
    //backward button
    backwardButton = ()=>{
      console.log('backward button is pressed');
    }
    //pause button
    pauseButton = ()=>{
      console.log('pause button is pressed');
    }

    //mouse over
    handleMouseOver = ()=>{
      console.log('mouse over');
    }

  
  
  render(){
    const {showMenu,selectedOption} = this.state;
    return(
      <div id="outer" className='container ' style={{height:"100%"}}>
          <div className='container phone'>

            <div className='  display'>
             
             {showMenu && <Display selected={selectedOption} forwardButton = {this.forwardButton}  backwardButton={this.backwardButton} pauseButton={this.pauseButton}  okButton={this.okButton} />}
           
                        
            </div>
            <div className="container  buttons" onMouseOver={this.handleMouseOver} >
  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-center" >
  <div className="button" onClick={this.menuCard}  style={{ fontFamily:'verdana' }}>
  MENU
</div>
  </div>
  <div className="d-flex flex-row justify-content-between">
    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-left" onClick={this.backwardButton}>
      <div><FontAwesomeIcon icon={faBackwardFast} style={{ color: '#061e47' }}/></div>
    </div>
    <div className='rounded-circle okbutton border border-1' onClick={this.okButton}></div>
    <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-right" onClick={this.forwardButton}>
      <div>      <FontAwesomeIcon icon={faForwardFast} style={{ color: '#061e47' }} />
</div>
    </div>
  </div>
  <div className="d-flex flex-column align-items-center justify-content-center rounded-circle button-bottom" onClick={this.pauseButton}>
    <div><FontAwesomeIcon icon={faPlay} /> <FontAwesomeIcon icon={faPause} /></div>
  </div>
</div>

          </div>
      </div>
    )
}

}

export default Phone;