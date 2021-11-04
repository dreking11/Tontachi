import React from 'react';
import { Button, ButtonGroup } from 'reactstrap';

export default class Navbar extends React.Component {
  render() {
    return (
      <ButtonGroup>
        <Button>Left</Button>
        <Button>Middle</Button>
        <Button>Right</Button>
      </ButtonGroup>
    );
  }
}


// import React, {useState} from "react";
// import {Link} from "react-router-dom";

// function Navbar() {
//     const [click,setClick] = useState(false);

//     const handleClick = () => setClick(!click)
//     const closeMobileMenu = () => setClick(false)
//     return(
//         <>
//         <nav className="navbar">
//             <div className="navbar-container">
//             <Link to="/" className="navbar-logo">
//                 Tontchi
//             </Link>
//             <div className="menu-icon" onClick={handleClick}>
//                 <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                 <li className="nav-item">
//                     <Link to="/" className="nav-links" onClick={closeMobileMenu}>
//                         Home
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/Market" className="nav-links" onClick={closeMobileMenu}>
//                         MarketPlace
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/Market" className="nav-links" onClick={closeMobileMenu}>
//                         NFT Game Import
//                     </Link>
//                 </li>
//                 <li className="nav-item">
//                     <Link to="/Market" className="nav-links" onClick={closeMobileMenu}>
//                         FAQs
//                     </Link>
//                 </li>
//             </ul>
//             </div>
//         </nav>
//         </>
//     )
// }

// export default Navbar;

// import React from 'react'
// import './Navbar.css'

// const Navbar = () => {
//   return (
//     <div class="bg-img">
//       <div class="container">
//         <div class="topnav">
//           <a href="/home">Home</a>
//           <a href="/market">Market Place</a>
//           <a href="#contact">Contact</a>
//           <a href="#about">About</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar


// import React from 'react';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   UncontrolledDropdown,
//   DropdownToggle,
//   DropdownMenu,
//   DropdownItem } from 'reactstrap';

// export default class Example extends React.Component {
//   constructor(props) {
//     super(props);

//     this.toggle = this.toggle.bind(this);
//     this.state = {
//       isOpen: false
//     };
//   }
//   toggle() {
//     this.setState({
//       isOpen: !this.state.isOpen
//     });
//   }
//   render() {
//     return (
//       <div>
//         <Navbar color="light" light expand="md">
//           <NavbarBrand href="/">reactstrap</NavbarBrand>
//           <NavbarToggler onClick={this.toggle} />
//           <Collapse isOpen={this.state.isOpen} navbar>
//             <Nav className="mr-auto" navbar>
//               <NavItem>
//                 <NavLink href="/components/">Components</NavLink>
//               </NavItem>
//               <NavItem>
//                 <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
//               </NavItem>
//               <UncontrolledDropdown nav inNavbar>
//                 <DropdownToggle nav caret>
//                   Options
//                 </DropdownToggle>
//                 <DropdownMenu right>
//                   <DropdownItem>
//                     Option 1
//                   </DropdownItem>
//                   <DropdownItem>
//                     Option 2
//                   </DropdownItem>
//                   <DropdownItem divider />
//                   <DropdownItem>
//                     Reset
//                   </DropdownItem>
//                 </DropdownMenu>
//               </UncontrolledDropdown>
//             </Nav>
//           </Collapse>
//         </Navbar>
//       </div>
//     );
//   }
// }
