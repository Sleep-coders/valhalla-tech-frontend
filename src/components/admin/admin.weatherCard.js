import React, { Component } from "react";
import axios from "axios";
import "./styles/admin.weatherCard.scss";

export class WeatherCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    axios
      .get(
        "http://api.weatherbit.io/v2.0/current?key=c743d2192e3e4f26990b46f916594ecf&lat=31.946627&lon=35.924574"
      )
      .then((res) => {
        let today = new Date();
        let time = today.getHours() + ":" + today.getMinutes();
        console.log(time);
        console.log(res.data.data[0]);
        this.setState({
          information: res.data.data[0],
          time: time,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <>
        {this.state.information && (
          <div class="col-4 mt-2 mx-3">
            <div class="card p-4 m-2">
              <div class="d-flex">
                <h6 class="flex-grow-1">{this.state.information.city_name}</h6>
                <h6>{this.state.time}</h6>
              </div>
              <div class="d-flex flex-column temp mt-2 mb-3">
                <h1 class="mb-0 font-weight-bold" id="heading">
                  {" "}
                  {this.state.information.temp}° C{" "}
                </h1>{" "}
                <span class="small">
                  {this.state.information.weather.description}
                </span>
              </div>
              <div class="d-flex">
                <div class="temp-details flex-grow-1">
                  <p class="my-1">
                    {" "}
                    <img
                      src="https://i.imgur.com/B9kqOzp.png"
                      height="17px"
                    />{" "}
                    <span> {this.state.information.wind_spd} km/h </span>{" "}
                  </p>
                  <p class="my-1">
                    {" "}
                    <i class="fa fa-tint mr-2" aria-hidden="true"></i>{" "}
                    <span>
                      {" "}
                      {Math.round(this.state.information.rh * 10) / 10}%{" "}
                    </span>{" "}
                  </p>
                  <p class="my-1">
                    {" "}
                    <img
                      src="https://i.imgur.com/wGSJ8C5.png"
                      height="17px"
                    />{" "}
                    <span> 0.2h </span>{" "}
                  </p>
                </div>
                <div>
                  {" "}
                  <img
                    src={`https://www.weatherbit.io/static/img/icons/${this.state.information.weather.icon}.png`}
                    width="100px"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default WeatherCard;
