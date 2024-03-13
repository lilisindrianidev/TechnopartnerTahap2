import { Component } from 'react';
import '../assets/scss/page.scss';
import Logo from "../assets/images/logo technopartner.png"
import Motif from "../assets/images/motif.png"

import axios from "axios"
class report extends Component {
  constructor(props){
    super(props)
    this.state = {
      tampilkanPopu: false,
      domisili:[],
      categories:'',
      
      cName:'',
      mName:'',
      mDes:'',
      mPhoto:'',
      mPrice:'',
     
    }
  }
  // componentDidMount(){
  //   //localStorage.getItem('token')
   
  //   this.domisiliNaive()
   
  // }
  // domisiliNaive = ()=>  {
  //   axios.get("https://soal.staging.id/api/home")
  //   .then(response=>{
  //     console.log("response :", response.result)
  //     const home = response.result;
  //     this.setState({home});      
  //   })
  //   .catch(erroe=>{
  //     console.log("error");
  //   })



    // const user= this.props.match.params.categories;
    // axios.get(`https://soal.staging.id/api/menu`,{withCredentials: true})

    // .then(response=>{ 
    //   console.log(response.data)
    //   if(response.data){
    
    //     this.setState({
    
    //       categories: response.result.categories,
    //       category_name: response.result.categories.category_name,
    //       mName: response.result.categories.menu.name,
    //       mDes: response.result.categories.menu.description,
    //       mPhoto: response.result.categories.menu.photo,
    //       mPrice: response.result.categories.menu.price ,
          
    //     })
    //   }
    // })
  // }
  
 
  
  render(){

    return(
    
   
     
        
      <div className='home'>
        <div className='logo'>
          <img src={Logo} className='logo_imageH'/>
        </div>
        <div className='cover_home1'>
          <div className='code_back'>
            <div className='inside'>
              <div className='writeH1'>Good Aftrnoon,</div>
              <div className='writeH2'>Guntur Saputro</div>
              <div className='cover_home2'>
                <div className='cirC'>
                  <div className='cirH'>
                    <img src={Motif} className='cirImage'/>
                  </div>
                </div>
                
                <div className='price_h'>
                  <div className='saldoH'>
                    <div className='write_saldoH'>Saldo</div>
                    <div className='write_poinH'>Point</div>
                  </div>
                  <div className='poinH'>
                   
                    <div className='nom_saldoH'>Rp.200</div>
                    <div className='nom_poinH'>2.345</div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
          
        </div>\
        <div className='black_coverH'>
            <img src={Logo} className='black_logoH'/>
          </div>     
      </div>
      

    
    )
} 
 

 
}
export default report;
   
