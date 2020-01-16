import React from 'react';
import Rating from 'react-star-rating-component'
import './rating.css'

 export default class ResetRating extends React.Component {

    constructor() {
      super();
   
      this.state = {
        rating: 1
      };
    }
  
  render() {
      const { rating } = this.state;
      return (
                      
          <div>
            <Rating 
              name="rate1" 
              starCount={5}
              onStarClick={this.onStarClick}
            />
          </div>
        );



    }
  }
  
