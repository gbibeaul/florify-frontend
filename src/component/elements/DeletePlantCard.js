import React, { Component } from 'react';
import api from '../../api';
import './DeletePlantCard.css';
// This component should be passed a prop which will be a function that
// allows the CreatePlant modal to be rendered over the Home.js

export default class DeletePlantCard extends Component {

  render() {
    console.log("DeletePlantCard.js render is working or not??????");
    let { showModal } = this.props
    return (
      <div className="delete-plant-card" onClick={showModal}>
        <button> Delete </button>
      </div>
    );
  }

}
