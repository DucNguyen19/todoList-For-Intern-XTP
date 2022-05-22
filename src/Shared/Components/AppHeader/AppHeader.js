// import React from "react";
// import { withRouter } from "react-router-dom";
// import { Row, Col, Nav, NavItem, NavLink, Dropdown, DropdownToggle } from "reactstrap";
// import { GetNameUser, ROLE } from "../../../Constances/const";
// import AuthService from '../../Services/AuthService';
// import "./AppHeader.scss"
// class AppHeader extends React.Component {
//   state = {
//     dropdownUserOpen: false,
//     dropdownMasterDataOpen: false,
//     dropdownInventoryOpen: false,
//     role: ""
//   };

//   goTo(url = "") {
//     url = window.location.origin + "/" + url;
//     window.location.replace(url);
//   }

//   toggleUser = () => {
//     this.setState({
//       dropdownUserOpen: !this.state.dropdownUserOpen,
//     });
//   };

//   toggleMasterData = () => {
//     this.setState({
//       dropdownMasterDataOpen: !this.state.dropdownMasterDataOpen,
//     });
//   };

//   toggleWareHouse = () => {
//     this.setState({
//       dropdownInventoryOpen: !this.state.dropdownInventoryOpen,
//     });
//   };

//   logout() {
//     AuthService.userInfo = null;
//     window.sessionStorage.clear();
//     window.location.replace("login");
//   }

//   render() {
//     return (
//       <div>
//         <>
//           <Nav pills>
//             <Row className="appHeaderContainer align-center">
//               <Col xs="1">
//                 <a className="navbar-brand" href="!#" target="_blank"><i className="fa fa-cube fontsz-50"></i>IS<b>System</b></a>
//               </Col>
//               <Col xs="3"></Col>
//               <Col xs="2">
//                 <NavItem className="forEach">
//                   <NavLink onClick={() => this.goTo('app/order')}>
//                     <i className="fa fa-home fontsz-30"/> QL Thực đơn
//                   </NavLink>
//                 </NavItem>
//               </Col>
//               <Col xs="2">
//                 <NavItem className="forEach">
//                   <NavLink onClick={() => this.goTo('app/inventory')}>
//                     <i className="fa fa-bar-chart fontsz-25"/> Xuất - Nhập
//                   </NavLink>
//                 </NavItem>
//               </Col>
//               {AuthService.userInfo.user.role === ROLE.ADMIN ? 
//                 <Col xs="1">
//                 <NavItem className="forEach">
//                   <NavLink onClick={() => this.goTo('app/system')}>
//                     <i className="fa fa-cogs fontsz-25"/> S
//                   </NavLink>
//                 </NavItem>
//               </Col> : <Col xs="1"></Col>
//               }
//               <Col xs="3" className="middle" style={{width: "20%"}}>
//                 <Dropdown nav isOpen={this.state.dropdownUserOpen} toggle={this.toggleUser}>
//                   <DropdownToggle onClick={() => this.logout()}>
//                     {/* <img src="https://www.tutorialrepublic.com/examples/images/avatar/3.jpg"/>  */}
//                     <b className="fontsz-28">{GetNameUser(AuthService.userInfo.user.full_name)}</b> 
                    
//                     <i className="fa fa-sign-out fontsz-30" aria-hidden="true"></i>
//                     <i className="fontsz-12">Log out</i>
//                   </DropdownToggle>
//                 </Dropdown>
//               </Col>
//             </Row>
//           </Nav>
//         </>
//       </div>
//     );
//   }
// }


// export default withRouter(AppHeader);