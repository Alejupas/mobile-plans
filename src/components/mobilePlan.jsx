import React, { Component } from 'react';
import '../style/mobilePlan.css'

class MobilePlans extends Component {
  render() {
    return <div className="plan-card">

      <div className="card-top">
        <p className="plan-card__name"></p>
      <span className="plan-card__data"><i></i></span>
      <p className="plan-card__description"></p>
      <p className="plan-card__cmsContent"></p>
      </div>
      
      <div className="card-middle">
      <i>icon</i><a href="#"> Textas</a>
      <i>icon</i><a href="#"> Textas</a>
      <i>icon</i><a href="#"> Textas</a>
      </div>

    <div className="card-bottom">
      <div className="plan-card">
        <div className="price">12.00/men</div>
        <div className="period">24 men. sutartis</div>
      </div>
      <button href="#">Domina</button>
    </div>

    </div>;
  }
}

export default MobilePlans;