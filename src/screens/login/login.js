import React, { Component } from "react";
import '../../assets/scss/page.scss';
import Logo from "../../assets/images/logo technopartner.png"
import { Link, BrowserRouter, Route, withRouter } from 'react-router-dom';
import axios from "axios";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      isLoading: '',
      isChecked: false,
      errMsg: '',
      msgNik: '',
      msgPwd: '',
      hasError: false
    }
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
    handleChange(event){
      this.setState({
        [event.target.name]:event.target.value
      }) 
    }
    componentDidMount() {
     if(localStorage.getItem('accessToken')){
        this.props.history.push('/');
      } 
    }
    handleSubmit(event){  
      event.preventDefault();
      this.setState ({ isLoading: true });
     
      const{username,password}=this.state;
      // const config = {
      //   headers: {
      //     "Access-Control-Allow-Origin": "*",
      //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      //     'Authorization': 'Bearer accessToken' 
      //   }
      // };
      
      axios.post( "https://soal.staging.id/oauth/token",{
        username:username,
        password:password,
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
        'Authorization': 'Bearer accessToken' 
      })
      .then((response) => {
        console.log(response.data);
        this.setState ({ isLoading: false });
             
             if(response.data){
              if(response.data.accessToken){
                localStorage.setItem('accessToken', response.data.accessToken)
       
                this.props.history.push('/');
              
              }    
              else{
                this.setState({
                  msg:response.data.message,
                });
                setTimeout(()=>{
                  this.setState({msg:"error"});
                },2000);
              }
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
             onClick={() => this.handleSubmit}
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
export default Login; 
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