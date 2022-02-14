import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function BodyBody() {
    var settings = {
        dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 5000,
      autoplaySpeed: 1500,
      cssEase: "linear"
      };

    return (
        <div style={{ paddingBottom:30 }}>
            <center>
                <h3 style={{ color: "#9f9595", fontFamily: "Arial" ,paddingTop:50 }}> <strong>Nos Références</strong> </h3>
            </center>
            <Slider {...settings} >
           
            <div><img src="images/dxc_logo_hz_blk_rgb_300.png" alt="dxc" width="170" height="100" /></div>
            <div><img src="images/marina_logo.png" alt="dxc" width="170" height="100" /></div>
            <div> <img src="images/m.png" alt="dxc" width="170" height="100" /></div>
            <div> <img src="images/mo.png" alt="dxc" width="170" height="100" /></div>
            <div> <img src="images/nrj-logow.png" alt="dxc" width="170" height="100" /></div>
            <div><img src="images/unnamedg.png" alt="dxc" width="170" height="100" /></div>
       
           </Slider>
        </div>
    )
}

export default BodyBody


