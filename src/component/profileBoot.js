// import React from 'react';
// import "bootstrap/dist/css/bootstrap.min.css";
// import Nav from 'react-bootstrap/Nav'
// import Card from "react-bootstrap/Card";
// import Container from 'react-bootstrap/Container';
// import './profile.css';
// import BasicInfo from './BasicInfo';
// import History from './History';
// import WishList from './WishList';


// class Profile extends React.Component {



//     constructor(props) {
//         super(props);
//         this.state = {
//             userImg: '',
//             userName: '',
//             isLoggedBasic: true,
//             isLoggedWish: false,
//             isLoggedHistory: false
//         };
//     }

//     handleBasicInfoClick = () => {
//         this.setState({
//             isLoggedBasic: true,
//             isLoggedWish: false,
//             isLoggedHistory: false

//         });
//     }

//     handleWishListClick = () => {
//         this.setState({
//             isLoggedWish: true,
//             isLoggedBasic: false,
//             isLoggedHistory: false,
//         });
//     }

//     handleHistoryClick = () => {
//         this.setState({
//             isLoggedBasic: false,
//             isLoggedWish: false,
//             isLoggedHistory: true
//         });
//     }


//     render() {
//         return (
//             <>


//                 <Container style={{ marginRight: "-280px" }}>

//                     <Card style={{ width: '15rem', height: "15rem" }}>
//                         <Card.Img roundedCircle src="https://static.remove.bg/remove-bg-web/99ab439c6e8e26adfd8c59cee4eb26f0376a9584/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="Card image" />
//                         <Card.Title> Doaa Daban</Card.Title>
//                     </Card>

//                 </Container>

//                 <Nav fill variant="tabs" defaultActiveKey="/home" >
//                     <Nav.Item onClick={this.handleBasicInfoClick}>
//                         <h3>BasicInfo</h3>
//                         {/* <Nav.Link href="/BasicInfo">BasicInfo</Nav.Link>    */}
//                         {
//                             this.state.isLoggedBasic && <BasicInfo />
//                         }
//                     </Nav.Item>

//                     <Nav.Item onClick={this.handleWishListClick}>
//                         <h3>WishList</h3>
//                         {/* <Nav.Link href="/WishList">WishList</Nav.Link> */}

//                         {
//                             this.state.isLoggedWish && <WishList />

//                         }

//                     </Nav.Item>

//                     <Nav.Item onClick={this.handleHistoryClick}>
//                         <h3>History</h3>
//                         {/* <Nav.Link href="/History">History</Nav.Link> */}

//                         {
//                             this.state.isLoggedHistory && <History />
//                         }


//                     </Nav.Item>
//                 </Nav>


//             </>
//         )

//     }
// }
// export default Profile;


