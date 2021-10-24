import React, {Component} from 'react';
import {Container, Row, Col} from "react-bootstrap";
import "./styles/store.productList.css";

class StoreProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            productList: [],
            showProductInfo:false,
        }

    }

    showProductInfoHandler = () =>{

    }

    render() {
        return (
            <Row xs={3}>

            </Row>
        );
    }
}

export default StoreProductList;