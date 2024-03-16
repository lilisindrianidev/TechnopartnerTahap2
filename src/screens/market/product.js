import { Component } from 'react';
import '../../assets/scss/page.scss';
import Menu from '../../components/menu'
import axios from "axios"
import Motif from "../../assets/images/home1.png"
import Menu2 from "../../components/menu2"
class report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tampilkanPopu: false,
      domisili: [],
      categories: '',
      item: [],
      itemMenu: [],
      itemSecon: [],
    }
  }
  componentDidMount() {

    this.app().callToken()

  }
  app = () => {
    const callMenu = (token) => {
      const body = new FormData();
      body.append("show_all", 1)

      fetch("https://soal.staging.id/api/menu", {
        method: "post",
        body: body,
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`
        }
      }).then((e) => e.json())
        .then((e) => {
          console.log(e, 'data menu')
          console.log(e.result.categories.menu, 'dhue')
          // return res


          const item = e.result.categories;
          this.setState({ item })
          console.log("final :", item)
        })
    }

    const callHome = (token) => {
      fetch('https://soal.staging.id/api/home', {
        method: "get",
        headers: {
          Authorization: `${token.token_type} ${token.access_token}`
        }
      }).then((e) => e.json())
        .then((e) => {
          // console.log(e,'data home')
          // return e

        })
    }

    return {
      callToken: () => {
        const body = new FormData();
        body.append("grant_type", "password")
        body.append("client_secret", "0a40f69db4e5fd2f4ac65a090f31b823")
        body.append("client_id", "e78869f77986684a")
        body.append("username", "support@technopartner.id")
        body.append("password", "1234567")
        fetch('https://soal.staging.id/oauth/token', {
          method: "post",
          body: body
        }).then((e) => e.json())
          .then((token) => {
            callHome(token)
            callMenu(token)

          })
      }

    }
  }

  render() {
    const { item, j } = this.state

    return (

      <div>

        <div className="product">

          <Menu />

          {item.map((items, idx) =>

            <div className="categories">
              <div className="wrapWriteCat">
                <div className="writeCat">
                  <div id={items.category_name}>
                    {items.category_name}
                  </div>

                </div>

              </div>
              {
                (typeof (items.menu) == 'object') ?
                  <div>
                    {
                      items.menu.map((ite, k) =>
                        <div>
                          <div className="wrapProd">
                            <div className="wrap_image_product">
                              <img src={ite.photo} className="image_product" />
                            </div>
                            <div className="prod_ket">
                              <div className="write_prod_ket1">{ite.name}</div>
                              <div className="write_prod_ket2">{ite.description}
                              </div>
                            </div>
                            <div className="prod_price">
                              <div className="write_prod_price">
                                {ite.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                  </div>

                  :
                  null


              }

            </div>

          )}




        </div>
        <Menu2/>
      </div>

    )
  }



}
export default report;

