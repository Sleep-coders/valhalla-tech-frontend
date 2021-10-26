import React from "react";
import Table from 'react-bootstrap/Table'
import { Row, Col, Button, Form } from 'react-bootstrap';



class Cart extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: "",
            image: "",
            name: "",
            price: 0,
            quantity: 1,
            itemArray: [],

        }
    }

    handleIncerement = () => {
        this.setState({
            quantity: this.state.quantity + 1
        });

    }

    handleDecrement = () => {
        if (this.state.quantity < 1) {
            this.setState({
                quantity: 0
            });
        } else {
            this.setState({
                quantity: this.state.quantity - 1
            });
        }
    }



    submitHandler = (e) => {
        e.preventDefault();
        let newArray = [];
        newArray.push({ number: 1, name: "aaaaaa" }, { number: 2, name: "bbbbbb" })
       

        localStorage.setItem('item', JSON.stringify(newArray))

    }

    // deleteHandler = () => {

    // }




    render() {

        let totalQuantity = 0;
        let totalPrice = 0;
        totalQuantity += this.state.quantity;
        totalPrice += this.state.quantity * this.state.price;


        return (

            <>


                <Table striped bordered hover>

                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product Image</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> 1</td>
                            <td><img src="data:image/jpeg;base64,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" style={{width:"50%",height:"50%"}}/></td>
                            <td> HP Laptop 15s-eq2005AU </td>
                            <td> 500 JD </td>
                            <td >{totalQuantity}
                                    <a style={{ marginLeft: "10%" }} href="#" onClick={this.handleIncerement}  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </a>
                                    <a style={{ marginLeft: "1%" }} href="#" onClick={this.handleDecrement} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                                        </svg>
                                    </a>
                                </td>

                        </tr>
                    </tbody>
                    {/* <tbody>
                        {JSON.parse(localStorage.getItem('item')).map((item) =>

                            <tr>
                                <td>{item.number}</td>
                                <td></td>
                                <td >{item.name}</td>
                                <td></td>
                                <td >{totalQuantity}
                                    <a style={{ marginLeft: "10%" }} href="#" onClick={this.handleIncerement}  >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
                                        </svg>
                                    </a>
                                    <a style={{ marginLeft: "1%" }} href="#" onClick={this.handleDecrement} >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                            <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z" />
                                        </svg>
                                    </a>
                                </td>
                                <td><a href="#" onClick={this.deleteProduct}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                    <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z" />
                                </svg></a></td>

                            </tr>


                        )}
                    </tbody> */}
                    <p>Total Price: {totalPrice}</p>
                </Table>



                <Form onSubmit={(e) => this.submitHandler(e)} >
                    <Row className="align-items-center">
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="First Name" >
                                First Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="First Name" />
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="Last Name" >
                                Last Name
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Last Name" />
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="Email" >
                                Email
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Email" />
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="Address">
                                Address
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="Address" />
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        > <Form.Label htmlFor="Country">
                                Country
                            </Form.Label>
                            <Form.Select aria-label="Country">
                                <option>choose country</option>
                                <option value="1">Jordan</option>
                                <option value="2">Palestine</option>
                                <option value="3">Turkey</option>
                                <option value="1">Egypt</option>
                                <option value="2">Saudi Arabia</option>
                                <option value="3">Germany</option>
                            </Form.Select>
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="Card number" >
                                Card number(Cridet or Depit)
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="1234 1234 1234 1234" />
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="Experiation Date" >
                                Experiation Date
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="MM/YY" />
                        </Col>
                        <Col sm={3} className="my-1" style={{ width: '45rem' }}
                        >
                            <Form.Label htmlFor="CVV/CVN" >
                                CVV/CVN
                            </Form.Label>
                            <Form.Control id="inlineFormInputName" placeholder="CVC" />
                        </Col>
                        <Col xs="auto" className="my-1" style={{ width: '45rem' }}
                        >
                            <Button type="submit">Confirm Purchase</Button>
                        </Col>
                    </Row>
                </Form>







            </>

        )
    }
}





export default Cart;