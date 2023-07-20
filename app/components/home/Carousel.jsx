"use client"
import Image from "next/image"
import Link from "next/link"
import LoadingPage from '../../loading';
import React, { useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';


const Heroslider = () => {
	const [slideinfo , setSlideinfo] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(()=>{
		const topslider = async () => {
			const res = await fetch('http://localhost:3001/api/home/corosual', { next: { revalidate: 10 } });
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`)
			  }
			const slider = await res.json();
			setSlideinfo(slider);
			setLoading(false);
		};

		topslider().catch((e) => {
			// handle the error as needed
			console.error('An error occurred while fetching the data: ', e)
		  }); 
	}, []);

	

	if (loading) {
		return <LoadingPage />;
	 }
	
	//console.log(slideinfo.slideitem)
	return (
		<div className="container-fluid px-0 mb-5">
			<div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
				<div className="carousel-inner">
					<Carousel>
						{slideinfo.slideitem.map((item, i) =>
							<Carousel.Item className="">
								{console.log(item)}
								<Image className="w-100" src={item.slideimg} width={1920} height={1080} alt="Image" />
								<Carousel.Caption>
									<Container>
										<div className="row justify-content-center">
											<div className="col-lg-7 text-center">
												<p className="fs-4 text-white animated zoomIn"  dangerouslySetInnerHTML={{ __html: item.toptitle}}></p>
												<h1 className="display-1 text-dark mb-4 animated zoomIn">{item.slidetitle}</h1>
												<Link href="" className="btn btn-light rounded-pill py-3 px-5 animated zoomIn">{item.buttontxt}</Link>
											</div>
										</div>
									</Container>
								</Carousel.Caption>
							</Carousel.Item>
						)} 
					</Carousel> 
				</div>
			</div>
		</div>
	)
}

export default Heroslider