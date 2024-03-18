import { Component } from 'react';
import '../assets/scss/page.scss';
import Logo from "../assets/images/logo technopartner.png"
import Motif from "../assets/images/motif.png"
import { Link } from "react-router-dom";
import axios from "axios";
import Menu22 from "../components/menu2.js";
import PopUp from "../components/popUp.js"
class report extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tampilkanPopu: false,
      categories: '',
      slide: '',
      home: '',
      banner: [],
      bannerL: [],
      same: [],

    }
  }
  componentDidMount() {
    // localStorage.getItem('access_token')

    this.home();

  }
  home() {
    const token = localStorage.getItem('access_token');
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };

    axios.get("https://soal.staging.id/api/home", config)
      .then(response => {

        console.log("response :", response.data)

        const home = response.data.result;
        this.setState({ home })
        console.log("final :", home.greeting)

        const banner = response.data.result.banner;
        const bannerL = [];
        for (let i = 0; i < banner.length; i++) {
          bannerL[i] = {
            key: i,
            picture: banner[i],
          }
        }

        this.setState({ bannerL })

      })
      .catch(error => {
        console.log("error");
      })

  }

  logout() {

    localStorage.clear();
    this.setState({
      navigate: true,
    });

  }

  //   componentDidUpdate(){
  //     this.componentDidMount();
  // }

  render() {
    const { home, bannerL, slide } = this.state;


    const nextSlide = () => {
      //let sl=0

      this.setState({
        slide: slide - 3 > 2 ? 0 : slide + 1
      })
      console.log(slide, "slide")

    }





    return (




      <div className='home'>
        <div className='logo'>
          <img src={Logo} className='logo_imageH' />
        </div>
        <div className='cover_home1'>
          <div className='code_back'>

            <div className='inside'>
              <div className='writeH1'>{home.greeting}</div>
              <div className='writeH2'>{home.name}</div>
              <div className='cover_home2'>
                <div className='cirC'>
                  <div className='cirH'>
                    <PopUp/>
                  </div>
                </div>

                <div className='price_h'>
                  <div className='saldoH'>
                    <div className='write_saldoH'>Saldo</div>
                    <div className='write_poinH'>Point</div>
                  </div>
                  <div className='poinH'>

                    <div className='nom_saldoH'>{home.saldo}</div>
                    <div className='nom_poinH'>{home.point}</div>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        <div className='black_coverH'>



          <div className="scroll">
            <div className="arrow arrow-right"

              onClick={nextSlide}> view all </div>
            {bannerL.map((item, index) => {


              return <img src={item.picture} alt={item.key} key={index} className={slide + 0 === index ? "slide" : "slide slide-hidden"} />
            })}



            {/* <button className="arrow arrow-left" onClick={prevSlide}/> */}


            <span className="indicators">
              {bannerL.map((_, idx) => {
                return <button key={idx} onClick={null} className={slide === idx ? "indicator" : "indicator indicator-inactive"}></button>
              })}
            </span>
          </div>



        </div>
        <Link to="/login" onClick={() => this.handleSubmit} className="style">keluar</Link>
        <Menu22 />
      </div>


    )
  }
}
export default report;

