import React, { Component } from "react";
import '../../assets/scss/page.scss';
import Logo from "../../assets/images/logo technopartner.png"
import { Link, BrowserRouter, Route , useNavigate} from 'react-router-dom';
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLoading: '',
      isChecked: false,
      errMsg: '',
      hasError: false,
      grant_type:'',
      client_secret:'',
      client_id:''
   
    }
   
  }
    handleChange=(event)=>{
      this.setState({
        [event.target.name]:event.target.value
      }) 
    }
    componentDidMount() {
     if(localStorage.getItem('access_token')){
       // this.props.history.push('/');
      } 
    }
    handleSubmit=(event)=>{  
      event.preventDefault();
      this.setState ({ isLoading: true });
      
     
      const{username,password}=this.state;
      axios.post( "https://soal.staging.id/oauth/token",{
        username:username,
        password:password,
        grant_type:'password',
        client_secret:'0a40f69db4e5fd2f4ac65a090f31b823',
        client_id:'e78869f77986684a'
      })
      .then((response) => {
        console.log(response.data);
        this.setState ({ isLoading: false });
       
      
          if(response.data.access_token && response.data.token_type){
            localStorage.setItem('access_token', response.data.access_token)
            localStorage.getItem('access_token')
            this.props.history('/');
          
          }    
          else{
            this.setState({
              msg:response.data.message,
            });
            setTimeout(()=>{
              this.setState({msg:"error"});
            },2000);
          }
    
      }) 
    }


  render() {

      const isLoading = this.state.isLoading;
    return (
      <div>

        <div className="background_dasar">

          <form className="column_login"  onSubmit={event=>this.handleSubmit(event)} >
            <div className="masuk_image">
              <img src={Logo} className="m_image_dalam" />
            </div>


            <br />
            <div className="tulisan_form">Email: </div>
            <input
              type="email"
              name="username"
              className="login_form"
              required
              value={this.state.username}
              onChange={this.handleChange}
            />


            <div className="tulisan_form" style={{}}>Password:  </div>
            <input
              type="password"
              name="password"
              className="login_form"
              required
              value={this.state.password}
              onChange={this.handleChange}
            />





           <button
              type="submit"
              className="button_login"
              style={{}}
            // onClick={() => this.handleSubmit}
            >
              Login
            </button>
            <span  >
              { isLoading ? (
                    <div>loading...</div>
                ) : (
                  <span></span>
                )
              } 
            </span>
            <p className="text-white">{this.state.msg}</p>
           
          </form>

         

        </div>




      </div>

    );
  }
}
export default (props) => (
  <Login history={useNavigate()} />
);
// const [isLogin, setIsLoging] = useState(localStorage.isLogin ? true : false);
// return (
//   <>
//     {isLogin ? (
//       <h1>Welcome User </h1>
//     ) : (
//       <button onClick={login}>login</button>
//     )}
//   </>
// );
// function login() {
//   setIsLoging(true);
//   if(!localStorage.isLogin)
//     localStorage.isLogin = true;
// }
// }
// export default App;