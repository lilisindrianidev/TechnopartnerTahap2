import { Component } from 'react';
import '../../assets/scss/page.scss';
import Menu from '../../components/menu'
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
  componentDidMount(){
    //localStorage.getItem('token')
   
    this.domisiliNaive()
   
  }
  domisiliNaive = ()=>  {
    axios.post("https://soal.staging.id/api/menu")
    .then(response=>{
      console.log("response :", response.result.categories)
      const categories = response.result.categories;
      this.setState({categories});      
    })
    .catch(erroe=>{
      console.log("error");
    })



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
  }
  
  // domisili = ()=>  {

  //   axios.get(`${window.origin}/domisiliShow`,{withCredentials: true}).
  //   then(response => {
  //     console.log(response);
  //     const domisili=response.data;
  //     this.setState({domisili });
  //   })
  // }
  
  render(){
   // const domisili = [1, 2, 3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17];
    // const listItems = numbers.map((number) =>
    //   <li>{number}</li>
    // );
    
    return(
    
   
     
        
      <div>
        <div className="background_dasar">
          <Menu/>

          <div className='tulisan_daftar' style={{fontSize:"30px", marginBottom:"10px"}}>PEMBERBAHARUAN SURAT DOMISILI</div>
          <span className="sum"> Jumlah jenis surat domisili : {this.state.jumlah_surat_domisili}</span>
         
          <div className="letter_tabel">
            
            
              
              
        
           
                {this.state.categories && this.state.categories.map((cat) => {
                
                  return(
                    <tr className="body_letter" > 
                 <td className="body_letter">
                    <div className="write_letter">
                       <p></p>
                        </div>
                </td>
                {/* <tr className="body_letter" key= {person.id}>  */}
                 <td className="body_letter">
                    <div className="write_letter">
                        {cat.category_name}
                        </div>
                </td>
                 
             </tr>
             
               
            )})}
           
            

           
         
       
          </div>
          
        </div>
      
            
      </div>
      

    
    )
} 
 

 
}
export default report;
   
