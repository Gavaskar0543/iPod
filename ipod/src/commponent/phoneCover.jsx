import React ,{useEffect,useRef} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForwardFast } from '@fortawesome/free-solid-svg-icons';
import { faBackwardFast } from '@fortawesome/free-solid-svg-icons';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { faPause } from '@fortawesome/free-solid-svg-icons';
import Display from './display';
import Coverflow from './coverflow';
import Settings from './settings';
import GameScreen from './GameScreen';
import {Route,Routes} from 'react-router-dom';

class Phone extends React.Component{
  optionCount = -1
  optionCount2 = 4;

   constructor(){
    super();
    this.state={
      showMenu:false,
      selectedOption : '',
      showOptionSelected:false
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
      const {selectedOption} = this.state;
      console.log('selected option',selectedOption);
      this.setState({
        showOptionSelected:true
      })
    }
    //forward button
    forwardButton = ()=>{
      let {selectedOption} = this.state;
     if(this.optionCount >= 3){
      console.log(this.optionCount)
      this.optionCount = -1;
     }
     this.optionCount += 1;
     selectedOption = this.product[this.optionCount];
     this.setState({
      selectedOption
     })
  
     console.log(this.state.selectedOption);
     
     
    }
    //backward button
    backwardButton = ()=>{
      console.log('backward button is pressed');
     let {selectedOption} = this.state;
     if(this.optionCount2 == 0){
      console.log(this.optionCount2)
      this.optionCount2 = 4;
     }
     this.optionCount2 -= 1;
     selectedOption = this.product[this.optionCount2];
     this.setState({
      selectedOption
     })
    }
    //pause button
    pauseButton = ()=>{
      console.log('pause button is pressed');
      this.setState({
        showOptionSelected:false
      })
    }

  

  
  
  render(){
    const {showMenu,selectedOption,showOptionSelected} = this.state;
    return(

     
      <div id="outer" className='container ' style={{height:"100%"}}>
          <div className='container phone'>

            <div className='  display'>
             
             {showMenu && <Display showSelected={showOptionSelected} selected={selectedOption} forwardButton = {this.forwardButton}  backwardButton={this.backwardButton} pauseButton={this.pauseButton}  okButton={this.okButton} />}
           
                        
            </div>
            <div style={{cursor:'pointer'}} className="container  buttons"  >
  <div  className="d-flex flex-column align-items-center justify-content-center rounded-circle button-center" >
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