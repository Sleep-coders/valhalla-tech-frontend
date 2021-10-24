import React, {Component} from 'react';
import {Col, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

class StoreProductListProductCard extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }

    productClickHandler = () =>{

    }
    render() {
        return (
            <Col>
                <Card style={{width: '15rem'}} onClick={()=>this.productClickHandler()}>
                    <Card.Img variant="top" src="https://www.dwyers.ie/wp-content/uploads/2019/10/WM1480P1-600x600.jpg"/>
                    <Card.Body>
                        <Card.Text>
                            Fisher & Paykel WM1480P1 Washing Machine
                        </Card.Text>
                        <Card.Text>
                            <p className="h3">450.00 JD</p>
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </Col>
        )
    }
}

export default StoreProductListProductCard;