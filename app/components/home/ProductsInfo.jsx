"use client"
import Image from "next/image"
import Link from "next/link"
import React, { useState, useEffect ,  useRef } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import WOW from 'react-wow';


const ProductsInfo = ({data}) => {
    const products = data.products;
    const sliderRef = useRef(null);
        
    const settings = {
      autoplay: true,
      speed: 1000,
      infinite: true,
      dots: false,
      slidesToShow: 3,
      slidesToScroll: 3,
      responsive: [
         {
           breakpoint: 576,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: true,
             dots: true
           }
         },
         {
           breakpoint: 768,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2
           }
         },
         {
           breakpoint: 992,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3
           }
         }
       ]
    };
  return (
    <div className="container-fluid product py-5 my-5">
        <div className="container py-5">
        <WOW animation='fadeInUp' delay="0.1s">
            <div className="section-title text-center mx-auto" style={{maxWidth : "500px"}}>
                <p className="fs-5 fst-italic text-primary">{products.secname}</p>
                <h1 className="display-6">{products.sectitle}</h1>
            </div>
            </WOW>
            <WOW animation="fadeInUp" delay="0.5s">
               <div className="owl-carousel product-carousel">
                  <Slider  ref={sliderRef}  {...settings}>
                  {products.productitems.map((item, index) =>
                     <Link href={item.link} className="d-block product-item px-3 rounded" key={index}>
                        <Image src={item.media} alt="" width={415} height={276}/>
                        <div className="bg-white shadow-sm text-center p-4 position-relative mt-n5 mx-4">
                              <h4 className="text-primary">{item.title}</h4>
                              <span className="text-body">{item.discription}</span>
                        </div>
                     </Link>
                  )}
                  </Slider>
               <div className="owl-nav">
                  <button onClick={() => sliderRef.current.slickPrev()} className="owl-prev"><FaChevronLeft className="bi"/></button>
                  <button onClick={() => sliderRef.current.slickNext()} className="owl-next"> <FaChevronRight className="bi"/> </button>
               </div>
               </div>
            </WOW>
        </div>
    </div>
  )
}

export default ProductsInfo