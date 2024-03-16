import { Component } from "react"
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Login from "../screens/login/login";
import Product from "../screens/market/product";
import Home from "../screens/home";
class Router extends Component{

  render(){
    return(
      <BrowserRouter >
      {/* */}
        <Routes>
        <Route path="/login" element={localStorage.getItem("access_token") ? <Navigate to="/" /> &&  <Navigate to="/product"/ > : <Login/>}/>
          {/* <Route path='/login' element={<Login/>}/> */}
         
            <Route path='/product' element={<Product/>}/>
            <Route path='/' element={<Home/>}/>
            {/* {user.token ?
          }:
          <></>
          {!user.token && <Redirect to="/"/>}
           <Route component={Notfound}/> */}
        </Routes>
      </BrowserRouter>
    )  
  }
}
export default Router;  
//basename={window.location.pathname || '*'}
