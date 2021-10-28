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
import "./aboutus.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <>
    
<div class="main_aboutus-container">
  {/* <div class="heading_aboutus">
    <h2 class="heading_aboutus__title">About the website</h2>
      <p>Valhalla Tech
In this web application there are four pages store, profile, cart, about us:
- When you successfully register you will go to the profile page and u will find your basic info, your card info and your wishlist contais the products you added and your history contains the products you've been bought before.
- In store page you will find list of products, you can filter the products depending on your needs, your budget, rating and reviews of that product.
 You can also check the details on that product on right side of the page and you can add it to cart or add it to your wish list.
- In cart page you can realized from the products that you've been choosed and choose the quantity and finally you can press checkout to fill your card information and confirm the purchase.
- At the last page you will find a brief of Valhalla Tech web applicatopn and the team members information.
Usage
First create an account by clicking on the signup button
then go to your profile page and there will be a your profile info and you can edit your info card there and update your wishlist and checkout your history.
You can edit your info of your profile by click edit card info button and fill the form.
If you want to buy any product you can choose the product from store page,add it to cart, see the reviwes, rating, and also add review of that product.
when you add the product to your cart you can go to the cart page and check out your products and increment or decrement the quantity or delete that product and when you press on checkout button you fill the form of your card information.
Admin user
As an admin can add any new product to our store page.</p>
  </div> */}
  <div class="cards_aboutus">
    <div class="card_aboutus card-1">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Rahaf Al-Jazzazi</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-2">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Mohammad Al-Zoubi</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-3">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Osaid Al-Homedy</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#">Apply Now <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-4">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Tareq Zeedeh </h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-5">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Doa'a Daban</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-1">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Hatem Sallam</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-1">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Anas Dalal'ah</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
  </div>
</div>
        {/* <Container>
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
        </Container> */}
      </>
    )
  }
}
export default AboutUs;