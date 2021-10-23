import React from 'react';
import { Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';


class BasicInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: "",
            save: false,
            description: "",
            userName: '',
            userEmail:'',
            url:''
        }
    }

    modalData = (title, url, description) => {
        this.setState({
          title: title,
          url: url,
          description: description,
        });
      };
    
    handleShow = () => {
        this.setState({
            show: true,
        });
        console.log("clicked"+ this.state.show);

    };

    handleClose = () => {
        this.setState({
            show: false,
        });
    };

    handleSave = () => {
        this.setState({
            show: false,
        });
    };
    
    render() {
        return (
            <>
            <h1> Your Basic and card Information  </h1>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Doaa</Card.Title>
                        <Card.Title>doaa@gmail.com</Card.Title>
                        <Button variant="primary" onClick={this.handleShow}>SHIPPING & PAYMENT</Button>
                    </Card.Body>
                </Card>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Row className="align-items-center">
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                    {this.state.fullName}
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="name" />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                    {this.state.eMail} 
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="email" />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                    {this.state.address} 
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="address" />
                                </Col>
                                <Col sm={3} className="my-1">
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
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                        Card number(Cridet or Depit)
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="1234 1234 1234 1234" />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                        Experiation Date
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="MM/YY" />
                                </Col>
                                <Col sm={3} className="my-1">
                                    <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                                        CVV/CVN
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="CVC" />
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Form.Check type="checkbox" id="autoSizingCheck2" label="Save Card" />
                                </Col>
                                <Col xs="auto" className="my-1">
                                    <Button type="submit">Confirm Purchase</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary" onClick={this.handleSave}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }

}
export default BasicInfo;