import React, {Component, Fragment} from 'react';
import {Container, Col, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StoreUserinfo from "./store.userinfo";
import StoreCategoryFilter from "./store.catagoryFilter";
import StoreProductInfo from "./store.productInfo";
import StoreProductList from "./store.productList";


class StoreMainpage extends Component {
    productList = [{
        "title": "Home Appliances",
        "submenu": [
            {
                "title": "Refrigerators",
                "submenu": null
            },
            {
                "title": "Washing Machines",
                "submenu": null
            },
            {
                "title": "Vacuums",
                "submenu": null
            }
        ]
    }, {
        "title": "Entertainments",
        "submenu": [
            {
                "title": "TV's",
                "submenu": null
            },
            {
                "title": "Gaming Console",
                "submenu": null
            },
            {
                "title": "Home Theater",
                "submenu": null
            }
        ]
    }, {
        "title": "Computer",
        "submenu": [
            {
                "title": "Desktop",
                "submenu": null
            },
            {
                "title": "Laptop",
                "submenu": null
            }
        ]
    }, {
        "title": "Smart Phones",
        "submenu": null
    }];

    render() {
        return (
            <Container>
                <Row className="vh-100">
                    <Col xs={2} className="bg-secondary">

                    </Col>

                    <Col xs={6}>
                        <Row className="bg-primary">
                            <StoreCategoryFilter config={this.productList}/>
                        </Row>
                        <Row className="bg-warning">
                            <StoreProductList/>
                        </Row>
                    </Col>

                    <Col xs={4}>
                        <Row className="bg-info">
                            <StoreUserinfo/>
                        </Row>
                        <Row className="bg-danger">
                            <StoreProductInfo/>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StoreMainpage;