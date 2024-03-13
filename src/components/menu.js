import React, { Component } from "react";
import '../assets/scss/page.scss';
class Menu extends Component{

  render(){
    return(
      <div className="menu">
        <h1 className="text_menu">MENU</h1>
        <div className="menu_cover">
          <a href="#SP" className="per_menu">
            Seasonal Product
          </a>
          <a href="#BS" className="per_menu">
            Best Seller
          </a>
          <a href="#C" className="per_menu">
            Coffee
          </a>
        </div>

      </div>


    )
  }

}
export default Menu;