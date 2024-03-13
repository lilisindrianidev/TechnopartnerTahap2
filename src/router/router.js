import { Component } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../screens/login/login";
import Product from "../screens/market/product";
import Home from "../screens/home";
class Router extends Component{

  render(){
    return(
      <BrowserRouter >
      {/* */}
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
    )  
  }
}
export default Router;  
//basename={window.location.pathname || '*'}