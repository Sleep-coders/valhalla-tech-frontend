import React from 'react';
import {Card} from 'react-bootstrap';


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
                <h1>
                    Your orders History
                </h1>

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