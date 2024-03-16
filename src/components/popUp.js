import axios from "axios"
import {Component} from 'react'
import "../assets/scss/page.scss"

class popUp extends Component{
  constructor(props){
    super(props)
    this.state = {
      popUp:false,
      pop:[],
    }
  }
  componentDidMount() {
    // localStorage.getItem('access_token')

    this.pop();

  }
  popUpI=()=>{
    if(this.state.popUp === true){
      this.setState({popUp:false})
    }else{
      this.setState({popUp:true})
    }
  }
  pop=()=> {
    const token= localStorage.getItem('access_token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
 
    axios.get("https://soal.staging.id/api/home",config)
    .then(response=>{
    
      console.log("response :", response.data)
      
      const pop= response.data.result;   
      this.setState({pop})
    
    })
    .catch(error=>{
      console.log("error");
    })

  }
  
  render(){
    
    const {pop}=this.state
    console.log(pop.qrcode);
    return(
      <div >
       
        {this.state.popUp &&
          <div className='background-popup'>
            <div className='popup'>
                <div 
                className="close" 
                onClick={this.popUpI}> 
                
              </div>
              <div className='write-popup'> 
                <img src={pop.qrcode} className="imgPop"/>
              </div> 
              
            </div>
            
          </div>
        }
        <img src={pop.qrcode} onClick={this.popUpI}  className="tombol_popup"/>


      </div>

        


    );
  }
  
}
export default popUp;
 