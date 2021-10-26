import React from 'react';
import { Row, Col, Container, Card } from 'react-bootstrap';
// import Rahaf from './images/Rahaf'
// import Mohammad from './images/Mohammad'
// import Osaid from './images/Osaid'
// import Tariq from './images/Tariq'
// import Doaa from './images/Doaa'
// import Hatem from './images/Hatem'
// import Anas from './images/anas'
import App from "../../App";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col xs={8} md={4}>
              <Card >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large', height: '60px', backgroundColor: 'rgb(255, 246, 230)' }}> Rahaf Al-Jazzazi</Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }}>
                    Rahaf graduated from the German Jordanian University with Bachelor's degree in Electrical engineering
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

              <Col xs={6} md={4}>
              <Card >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large', height: '60px', backgroundColor: 'rgb(255, 246, 230)' }}> Mohammad Al-Zoubi</Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }}>
                     Mohammad graduated from the Yarmouk University with Bachelor's degree in Computer Science
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card class="card" >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large', height: '60px', backgroundColor: 'rgb(255, 246, 230)' }} >Osaid al-Homedy </Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }} >
                    Osaid graduated from the Al-Hussein Bin Talal University with Bachelor's degree in Mechanical Engineering
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

              <Col xs={6} md={4}>
              <Card class="card" >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large', height: '60px', backgroundColor: 'rgb(255, 246, 230)' }} >Tariq Zeedeh </Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }} >
                    Tariq graduated from the University of Jarash with Bachelor's degree in .......        </Card.Text>
                </Card.Body>
              </Card>
            </Col>
              <Col xs={6} md={4}>
              <Card class="card" >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large', height: '60px', backgroundColor: 'rgb(255, 246, 230)' }} >Doa'a K.Daban </Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }} >
                    Doaa graduated from the University of Jordan with Bachelor's degree in Computer engineering
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>

            <Col xs={6} md={4}>
              <Card >
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large', height: '60px', backgroundColor: 'rgb(255, 246, 230)' }}>Hatem Sallam</Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }}>
                    Hatem graduated from the Balqa applied university with Bachelor's degree in Civil engineering
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://lh3.googleusercontent.com/proxy/R67i9l1oK98OextK_nZsU0YtJV73xcGGHD4FrQP0Sad02aRZlY75n0L7Nq-OsfXETdCnTWQQ9Of1C-q45YaJpcR7K_HChnOWXN4" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)', height: '200px' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', height: '60px', fontSize: 'xx-large', backgroundColor: 'rgb(255, 246, 230)' }}> Anas Dalal'ah</Card.Title>
                  <Card.Text style={{ fontFamily: 'Patrick Hand', fontSize: '20px' }}>
                    Anas graduated the from Yarmouk university with Bachelor's degree in Electrical Engineering.
                    .
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <br></br>
            <br></br>
          </Row>
        </Container>
      </>
    )
  }
}
export default AboutUs;