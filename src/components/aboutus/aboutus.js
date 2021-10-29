import React from 'react';

import "./aboutus.scss";

class AboutUs extends React.Component {
  render() {
    return (
      <>
    
<div class="main_aboutus-container">
  <div class="heading_aboutus">
    <h2 class="heading_aboutus__title m-2">About the website</h2>
        <h5> Valhalla Tech</h5>
      <p>
In this web application there are four pages store, profile, cart, about us: <br/>
- When you successfully register you will go to the profile page and u will find your basic info, your card info and your wishlist contais the products you added and your history contains the products you've been bought before. <br/>
- In store page you will find list of products, you can filter the products depending on your needs, your budget, rating and reviews of that product.<br/>
 You can also check the details on that product on right side of the page and you can add it to cart or add it to your wish list.<br/>
- In cart page you can realized from the products that you've been choosed and choose the quantity and finally you can press checkout to fill your card information and confirm the purchase.
- At the last page you will find a brief of Valhalla Tech web applicatopn and the team members information.
</p>
  </div>
  <div style={{overflow:"auto", height:"55vh"}}>

  <div class="cards_aboutus">
    <div class="card_aboutus card-1 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Rahaf Al-Jazzazi</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-2 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Mohammad Al-Zoubi</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-3 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Osaid Al-Homedy</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-4 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Tareq Zeedeh </h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"> <i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-5 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Doa'a Daban</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-1 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Hatem Sallam</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
    <div class="card_aboutus card-3 text-center">
      <div class="card_aboutus__icon"><i class="fas fa-bolt"></i></div>
      <p class="card_aboutus__exit"><i class="fas fa-times"></i></p>
      <h2 class="card_aboutus__title">Anas Dalal'ah</h2>
      <p class="card_aboutus__apply">
        <a class="card_aboutus__link" href="#"><i class="fas fa-arrow-right"></i></a>
      </p>
    </div>
  </div>
  </div>
</div>

      </>
    )
  }
}
export default AboutUs;