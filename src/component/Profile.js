// import React from 'react';
// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
// import TabContext from '@mui/lab/TabContext';
// import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';
// import BasicInfo from './BasicInfo';
// import WishList from './WishList';
// import History from './History';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import { width } from '@mui/system';
// import {Nav , Container,Table}  from 'react-bootstrap';



// export default class LabTabs extends React.Component{
//         constructor(props) {
//         super(props)
//         this.state = {
//             redirect: null,
//             userReady: false,
//             currentUser: { username: "" },
//             userImg: '',
//             userName: '',
//             isLoggedBasic: true,
//             isLoggedWish: false,
//             isLoggedHistory: false,
//             purchaseHistory:[],
//             flag: false,
//             value: 0,
//         }
//     }


//     componentDidMount = async() => {
//         const currentUser = AuthService.getCurrentUser();
//         console.log(this.state.purchaseHistory);

//         if (!currentUser) this.setState({ redirect: "/home" });
//         this.setState({ currentUser: currentUser, userReady: true })

//         let dataHistory = JSON.parse(localStorage.getItem("cartHistory")) || [];
//         await this.setState({
//             purchaseHistory:dataHistory
//         })


//         if (this.state.purchaseHistory.length > 0){
//             this.setState({
//                 flag:true
//             })
//         }
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
    
//     // const [value, setValue] = React.useState('1');

//     handleChange = (event, newValue) => {
//         setValue(newValue);
//     }

//     if (this.state.redirect) {
//         return <Redirect to={this.state.redirect} />
//     }

//     const { currentUser } = this.state;

//     return (
//         <>
//         <div className="container">
                
//                 {(this.state.userReady) ?
//                     <div>
//                         <header>
//                             <h3>
//                                 <strong>{currentUser.username}</strong> Profile
//                             </h3>
//                         </header>
//                         <p>
//                             <strong>Token:</strong>{" "}
//                             {currentUser.accessToken.substring(0, 20)} ...{" "}
//                             {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
//                         </p>
//                         <p>
//                             <strong>Id:</strong>{" "}
//                             {currentUser.id}
//                         </p>
//                         <p>
//                             <strong>Email:</strong>{" "}
//                             {currentUser.email}
//                         </p>
//                         <strong>Authorities:</strong>
//                         <ul>
//                             {currentUser.roles &&
//                             currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
//                         </ul>
//                     </div>: null}
                    
//                     <Table striped bordered hover>
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Product Image</th>
//               <th>Product Name</th>
//               <th>Brand</th>
//               <th>Model</th>
//               <th>Color</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
          
//             {JSON.parse(localStorage.getItem("wishlistItems")).map((item, idx) => (
//               <tr>
//                 <td>{idx + 1}</td>
//                 <td style={{ width: "15%", height: "15%" }}>
//                   <img
//                     style={{ width: "50%", height: "50%" }}
//                     src={item.imageUrlList}
//                   ></img>
//                 </td>
//                 <td>{item.name}</td>
//                 <td>{item.brand}</td>
//                 <td>{item.model}</td>
//                 <td>{item.color}</td>
//                 <td>{item.price}</td>
               
//               </tr>
//             ))}
            
//           </tbody>
//                 </Table>

//                 <Table striped bordered hover>

//            <thead>
//             <tr>
//               <th>#</th>
//               <th>Product Image</th>
//               <th>Product Name</th>
//               <th>Brand</th>
//               <th>Model</th>
//               <th>Color</th>
//               <th>Price</th>
//             </tr>
//           </thead>
//           <tbody>
//               {this.state.flag && this.state.purchaseHistory.map((item,idx) =>
//               (
//                   <tr> <td>
//                       {idx+1}
//                       </td> 
//                       <td>
//                           <img src={item.imageUrlList[0]}></img>
//                       </td>
//                       <td>
//                           {item.name}
//                       </td>
//                       <td>{item.brand}</td>
//                 <td>{item.model}</td>
//                 <td>{item.color}</td>
//                 <td>{item.price}</td>
//                       </tr>

//               )
            
              
//               ) }
//           </tbody>
//           </Table>

//             </div>


//             <div style={{marginLeft: "13%" , marginTop: "4%" }} sx={{ maxWidth: 200}} >
//                 <img  
//                     style={{borderRadius: '50%' ,width: "10%" ,height: "10%"}}
//                     src="https://i.pinimg.com/originals/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg"
//                     alt="green iguana"
//                 />
//                 </div>


//                 <Card style={{marginLeft: "38%" , marginTop: "-9%"}} sx={{ maxWidth: 220}} >
//                 <CardContent >
//                 <Typography style={{textAlign: "center"}} gutterBottom variant="h5" component="div">
//                        User 01
//                     </Typography>
//                     <Typography style={{textAlign: "center"}} variant="body2" color="text.secondary">
//                         bio <FavoriteIcon/>
//                     </Typography>
//                 </CardContent>
//                 </Card>
//             <Box sx={{ width: '80%', typography: 'body1' }} style={{margin: "5%" , marginTop: "5%"}}>
//                 <TabContext value={value}>
//                     <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//                         <TabList style={{alignItems: "center"}} onChange={handleChange} aria-label="lab API tabs example">
//                             <Tab label="Your BasicInfo" value="1" />
//                             <Tab label="Your WishList" value="2" />
//                             <Tab label="Your History" value="3" />
//                         </TabList>
//                     </Box>
//                     <TabPanel value="1"><BasicInfo /></TabPanel>
//                     <TabPanel value="2"><WishList /></TabPanel>
//                     <TabPanel value="3"><History /></TabPanel>
//                 </TabContext>
//             </Box>
//         </>
//     );
// }
