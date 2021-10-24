import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from 'react-bootstrap/Nav'
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';
import BasicInfo from './BasicInfo';
import History from './History';
import WishList from './WishList';


class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userImg: '',
            userName: '',
            isLoggedBasic: true,
            isLoggedWish: false,
            isLoggedHistory: false
        };
    }

    handleBasicInfoClick = () => {
        this.setState({
            isLoggedBasic: true,
            isLoggedWish: false,
            isLoggedHistory: false

        });
    }

    handleWishListClick = () => {
        this.setState({
            isLoggedWish: true,
            isLoggedBasic: false,
            isLoggedHistory: false,
        });
    }

    handleHistoryClick = () => {
        this.setState({
            isLoggedBasic: false,
            isLoggedWish: false,
            isLoggedHistory: true
        });
    }

    render() {
        return (
            <>

                <Container style={{ marginTop: '0px' }}>

                    <Card className="bg-dark text-white" >

                        <Card.Img height="100px" src={this.state.userImg} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{this.state.userName}</Card.Title>
                        </Card.ImgOverlay>

                    </Card>
                </Container>

                <Nav  fill variant="tabs" defaultActiveKey="/home" >
                    <Nav.Item onClick={this.handleBasicInfoClick}>
                        <h1>BasicInfo</h1>
        
                        {
                            this.state.isLoggedBasic && <BasicInfo />

                        }
                    </Nav.Item>

                    <Nav.Item onClick={this.handleWishListClick}>
                    <h1>WishList</h1>
                        {
                            this.state.isLoggedWish && <WishList />

                        }

                    </Nav.Item>

                    <Nav.Item onClick={this.handleHistoryClick}>
                    <h1>History</h1>
                        {
                            this.state.isLoggedHistory && <History />
                        }


                    </Nav.Item>
                </Nav>

            </>
        )

    }
}
export default Profile;
