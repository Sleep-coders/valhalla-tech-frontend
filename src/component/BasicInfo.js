import React from 'react';
import { Row, Col, Modal, Form } from 'react-bootstrap';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActions } from '@mui/material';
import { Button, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import BasicModal from './BasicModal';


class BasicInfo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            title: "",
            save: false,
            description: "",
            userName: '',
            userEmail: '',
            url: ''
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
        console.log("clicked" + this.state.show);
        
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
                {/* <h1> Your Basic Information  </h1> */}
                {/* <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Doaa</Card.Title>
                        <Card.Title>doaa@gmail.com</Card.Title>
                        <Button variant="primary" onClick={this.handleShow}>Edit Card Info</Button>
                    </Card.Body>
                </Card> */}

                <Card sx={{ maxWidth: 345 }}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Doaa Daban
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            doaa@gmail.com
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={this.handleShow}>{<BasicModal/>}</Button>
                    </CardActions>
                </Card>

                {/* <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Card Info
                        </Typography>
                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="FullName"
                                    />
                                    <TextField
                                        required
                                        id="outlined-password-input"
                                        label="Password"
                                        autoComplete="current-password"   

                                    />
                                    
                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Email"
                                    />

                                    <TextField
                                        required
                                        id="outlined-required"
                                        label="Address"
                                    />
                                    <br/>
                                    <br/>
                                    <TextField
                                        id="outlined-helperText"
                                        label="Card number"
                                        defaultValue="1234 1234 1234 1234"
                                        helperText="(Cridet or Depit)"
                                    />
                                    <TextField
                                        id="outlined-helperText"
                                        label="Experiation Date"
                                        defaultValue="MM/YY"

                                    />
                                    <TextField
                                        id="outlined-helperText"
                                        label="CVV/CVN"
                                        defaultValue="CVC"

                                    />
                                </div>
                            </Box>
                        </Typography>
                        <Button size="small" onClick={this.handleClose}>Close</Button>
                        <Button size="small" onClick={this.handleSave}>Save changes</Button>
                    </Box>
                </Modal> */}

                {/* <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.state.title}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Row className="align-items-center">
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor="Name:">
                                        full name
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="Enter Your FullName" />
                                </Col>
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor="Email:">
                                        Email
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="Enter Your Email" />
                                </Col>
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor="Address:">
                                        Address
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="Enter Your Address" />
                                </Col>
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor="Country:">
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
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor="Card number(Cridet or Depit):">
                                        Card number(Cridet or Depit)
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="1234 1234 1234 1234" />
                                </Col>
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor=" Experiation Date:">
                                        Experiation Date
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="MM/YY" />
                                </Col>
                                <Col sm={3} className="my-1" style={{ width: '30rem' }}>
                                    <Form.Label htmlFor="CVV/CVN">
                                        CVV/CVN
                                    </Form.Label>
                                    <Form.Control id="inlineFormInputName" placeholder="CVC" />
                                </Col>
                                <Col xs="auto" className="my-1" style={{ width: '30rem' }}>
                                    {/* <Button style={{ width: '25rem' }} type="submit">Save card</Button> */}
                {/* </Col>
                            </Row>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>Close</Button>
                        <Button variant="primary" onClick={this.handleSave}>Save changes</Button>
                    </Modal.Footer>
                </Modal>
                 */}
            </>

        )
    }

}
export default BasicInfo;