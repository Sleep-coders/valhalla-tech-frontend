import React, { Component } from "react";
import { Col, Row, Form, Modal, Button } from "react-bootstrap";
import "./styles/admin.updatingModal.scss";

export class UpdateModal extends Component {
  render() {
    return (
      <Modal
        show={this.props.showModal}
        onHide={this.props.closeModal}
        dialogClassName="modal-90"
      >
        <Form onSubmit={(e) => this.props.updateHandling(e)}>
          <Modal.Header closeButton>Updating a Product</Modal.Header>
          {this.props.toBeUpdatedProduct ? (
            <Modal.Body>
              <Row className="my-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    name="name"
                    defaultValue={this.props.toBeUpdatedProduct.name}
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Price"
                    defaultValue={this.props.toBeUpdatedProduct.price}
                    name="price"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Model"
                    defaultValue={this.props.toBeUpdatedProduct.model}
                    name="model"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Brand"
                    defaultValue={this.props.toBeUpdatedProduct.brand}
                    name="brand"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Weight"
                    defaultValue={this.props.toBeUpdatedProduct.weight}
                    name="weight"
                    size="sm"
                  />
                </Form.Group>
              </Row>
              <Row className="my-3">
                <Form.Group as={Col}>
                  <Form.Control
                    type="text"
                    placeholder="Color"
                    defaultValue={this.props.toBeUpdatedProduct.color}
                    name="color"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Power Consumption"
                    defaultValue={
                      this.props.toBeUpdatedProduct.powerConsumption
                    }
                    name="powerConsumption"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Year Of Production"
                    defaultValue={
                      this.props.toBeUpdatedProduct.yearOfProduction
                    }
                    name="yearOfProduction"
                    size="sm"
                  />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Control
                    type="number"
                    placeholder="Quantity"
                    defaultValue={this.props.toBeUpdatedProduct.quantity}
                    name="quantity"
                    size="sm"
                  />
                </Form.Group>
              </Row>
              <Row className="my-3">
                <Col>
                  <Form.Control
                    as="textarea"
                    placeholder="Product Description"
                    name="description"
                    defaultValue={this.props.toBeUpdatedProduct.description}
                    style={{ height: "80px" }}
                    className="mb-3"
                    size="sm"
                  />
                </Col>

                {this.props.sub_category == "homeappliances-refrigerator" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Door Numbers"
                        defaultValue={this.props.toBeUpdatedProduct.doorNumber}
                        name="doorNumber"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Drawer Numbers"
                        defaultValue={
                          this.props.toBeUpdatedProduct.drawerNumber
                        }
                        name="drawerNumber"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Size"
                        name="size"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="Has Ice Crusher"
                        defaultValue={this.props.toBeUpdatedProduct.iceCrusher}
                        name="iceCrusher"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="Has Water Cooler"
                        defaultValue={this.props.toBeUpdatedProduct.waterCooler}
                        name="waterCooler"
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category ==
                  "homeappliances-vacuummachine" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Air Flow"
                        defaultValue={this.props.toBeUpdatedProduct.airflow}
                        name="airflow"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Noise Level"
                        defaultValue={this.props.toBeUpdatedProduct.noiseLevel}
                        name="noiseLevel"
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category ==
                  "homeappliances-washingmachine" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        defaultValue={this.props.toBeUpdatedProduct.capacity}
                        placeholder="Capacity"
                        name="capacity"
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category == "entertainment-gamingConsole" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        defaultValue={this.props.toBeUpdatedProduct.storage}
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="VR Support"
                        defaultValue={this.props.toBeUpdatedProduct.vrSupport}
                        name="vrSupport"
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category == "entertainment-tv" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Size"
                        defaultValue={this.props.toBeUpdatedProduct.panelSize}
                        name="panelSize"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Type"
                        defaultValue={this.props.toBeUpdatedProduct.panelType}
                        name="panelType"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Resolution"
                        defaultValue={
                          this.props.toBeUpdatedProduct.panelResolution
                        }
                        name="panelResolution"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Check
                        type="checkbox"
                        label="Is Smart"
                        name="smart"
                        value={this.props.toBeUpdatedProduct.smart}
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category == "computer-desktop" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="CPU"
                        name="cpu"
                        defaultValue={this.props.toBeUpdatedProduct.cpu}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="RAM"
                        name="ram"
                        defaultValue={this.props.toBeUpdatedProduct.ram}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        name="storage"
                        defaultValue={this.props.toBeUpdatedProduct.storage}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="GPU"
                        name="gpu"
                        defaultValue={this.props.toBeUpdatedProduct.gpu}
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category == "computer-laptop" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="CPU"
                        name="cpu"
                        defaultValue={this.props.toBeUpdatedProduct.cpu}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="RAM"
                        name="ram"
                        defaultValue={this.props.toBeUpdatedProduct.ram}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        defaultValue={this.props.toBeUpdatedProduct.storage}
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="GPU"
                        name="gpu"
                        defaultValue={this.props.toBeUpdatedProduct.gpu}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Panel Size"
                        defaultValue={this.props.toBeUpdatedProduct.panelSize}
                        name="panelSize"
                      />
                    </Form.Group>
                  </>
                ) : this.props.sub_category == "smartphone" ? (
                  <>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="CPU"
                        name="cpu"
                        defaultValue={this.props.toBeUpdatedProduct.cpu}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="RAM"
                        name="ram"
                        defaultValue={this.props.toBeUpdatedProduct.ram}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="number"
                        placeholder="Storage"
                        defaultValue={this.props.toBeUpdatedProduct.storage}
                        name="storage"
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="GPU"
                        name="gpu"
                        defaultValue={this.props.toBeUpdatedProduct.gpu}
                      />
                    </Form.Group>
                    <Form.Group as={Col}>
                      <Form.Control
                        type="text"
                        placeholder="Camera"
                        defaultValue={this.props.toBeUpdatedProduct.camera}
                        name="camera"
                      />
                    </Form.Group>
                  </>
                ) : null}
              </Row>
            </Modal.Body>
          ) : (
            <h1>Please Choose an ID before updating</h1>
          )}
          <Modal.Footer>
            <Button color="secondary" onClick={this.props.closeModal}>
              Close
            </Button>
            <Button color="primary" type="submit">
              Save changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    );
  }
}

export default UpdateModal;
