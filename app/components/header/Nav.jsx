'use client'
import Link from 'next/link';
//import { FaUserAlt } from 'react-icons/fa';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from "next/image";
import logo from "../../../public/logo.png"


const Navmenu = ({data}) => {
	const mainmenu = data.mainmenu;
	const mainsubmenu = data.mainsubmenu;
	//console.log(mainsubmenu.pages)
	return (
		<Container>
			{/* {data.map((item)=>item)} */}
			<Navbar expand="lg" className="bg-white py-2 py-lg-0">
				<Navbar.Brand href="/"><Image src={logo} width='170' height={'135'} alt="logo"/></Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto me-0'/>
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						{mainmenu.slice(0,4).map((item, i) =>
							<Link href={`/`+ (item.linkName === 'home' ? "" : item.linkName)} key={i} className='nav-item nav-link'>{item.linkName}</Link>
							)}
						<NavDropdown title="Pages" id="basic-nav-dropdown">
							{mainsubmenu.pages.map((item, i) =>
								<NavDropdown.Item href={`/`+ item.replace(/ /g, '-')} key={i}>{item}</NavDropdown.Item>
							)}
						</NavDropdown>
						{mainmenu.slice(5,6).map((item, i) =>
							<Link href={`/`+ (item.linkName === 'home' ? "" : item.linkName) } className='nav-item nav-link'>{item.linkName}</Link>
							)}
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</Container>
	)
}

export default Navmenu

