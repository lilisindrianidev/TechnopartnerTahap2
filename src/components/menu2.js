import React, { Component } from "react";
import '../assets/scss/page.scss';
import { Link } from "react-router-dom";
import Menu from '../components/menu'
import axios from "axios"

//import Menu2 from "../../assets/images/home1.png"

class Menu2 extends Component {

  render() {
    return (
      <div className="cover_menu2">


        <div className="menu2">

          <a href="/" className="home_menu">
            <div className="small_cover_home">
              <div className="home_image"></div>
              <div className="home_image_write">Home</div>
            </div>
          </a>
          <a href="/product" className="menu_menu">
            <div className="small_cover_menu">
              <div className="menu_image"></div>
              <div className="menu_image_write">Menu</div>
            </div>
          </a>
        </div>
      </div>

    )
  }

}
export default Menu2;