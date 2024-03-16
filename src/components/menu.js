import React, { Component } from "react";
import '../assets/scss/page.scss';
import {Link} from "react-router-dom";
class Menu extends Component{
  logout(){
   
    localStorage.clear();
    this.setState({
      navigate: true,
    });
  
  }
                     
                    
  render(){
    return(
      <div className="menuFirst">
        <h1 className="text_menu">MENU</h1>
        <div className="menu_cover">
          <a href="#Seasonal menu" className="per_menu">
            Seasonal Menu
          </a>
          <a href="#Best Sellers" className="per_menu">
            Best Seller
          </a>

          <a href="#Coffee" className="per_menu">
            Coffee
          </a>
          <a href="#Cold Brew" className="per_menu">
            Cold Brew
          </a>
          <a href="#Chocolate" className="per_menu">
            Chocolate
          </a>
        
        </div>

      </div>


    )
  }

}
export default Menu;