import React from 'react';
// import { Card } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


class History extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            productName: null,
            productImage: null,
            productPrice: 0,
            productQuantity: 0,
            productDescription: null
        }
    }


    modalData = (productName, productImage, productPrice, productQuantity, productDescription) => {
        this.setState({
            productName: productName,
            productImage: productImage,
            productPrice: productPrice,
            productQuantity: productQuantity,
            productDescription: productDescription
        });
    };

    render() {
        return (
            <>
               

                <Card style={{height :"10%"}} sx={{ maxWidth: 230 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://mediadesknm.com/wp-content/uploads/2018/09/photographer-698908_960_720.jpg"
                        alt="item image"
                    />
                    </Card>
                    <Card style={{marginLeft: "29%" , marginTop: "-15%", height :"-6%"}} sx={{ maxWidth: 220}}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         Camera HD Price: 500$
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                        Photo Usage for Nonprofits
                        </Typography>
                    </CardContent>
                    </Card>

        

                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.state.productImage} />
                    <Card.Body>
                        <Card.Title>{this.state.productName}</Card.Title>
                        <Card.Text>
                        {this.state.productPrice}
                        </Card.Text>
                        <Card.Text>
                        {this.state.productQuantity}
                        </Card.Text>
                        <Card.Text>
                        {this.state.productDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>

            </>

        )
    }
}

export default History;