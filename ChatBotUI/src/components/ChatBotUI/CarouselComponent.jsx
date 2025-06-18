'use client';
import { useRef } from 'react';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function CarouselComponent({ items }) {
  const deviceId = localStorage.getItem('deviceId')
  console.log("deviceId from the localStorage",deviceId);
  console.log("deviceId from the localStorage Type",typeof deviceId);
  
  const decideContentPath = (item)=>{
    let contentPath ;
      if(['11', '7', '6', '105'].includes(deviceId)){
        contentPath = `https://moviesandtv.myvi.in/appclose?path=${item.contentPath}`
      } else {
        console.log("HIi");
        
        contentPath = `https://moviesandtv.myvi.in/${item.contentPath}`
      }
    console.log("finalContentPath ",contentPath);
    
    return contentPath

    
  }
  
  
  let sliderRef = useRef(null);
  const play = () => {
  sliderRef.slickPlay();
  };
  const pause = () => {
  sliderRef.slickPause();
  };
  const settings = {
  dots: false,
  infinite: items.length > 1,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay : true,
  autoplaySpeed: 2000,
  responsive: [
    {
    breakpoint: 2000,
    settings: {
      slidesToShow: 2,
    },
    },
    {
    breakpoint: 640,
    settings: {
      slidesToShow: 1,
    },
    },
  ],
  };

  return (
  <div className="w-full px-2.5 mt-4 mb-4  ">  
    <Slider {...settings}>
    {items.map((item, idx) => (
      <a href={decideContentPath(item)} target='_blank' rel="noopener noreferrer" key={idx}>
      <div  className="px-2 ">
      <div className="bg-white rounded-lg shadow-md overflow-hidden h-full border border-gray-200">
        <img
        src={item.imgurl}
        alt={item.contentname}
        className="w-full h-40 object-cover"
        />
        <div className="p-2">
        <h3 className="text-sm font-medium">{item.contentname}</h3>
        </div>
      </div>
      </div>
      </a>
    ))}
    </Slider>
  </div>
  );
}
