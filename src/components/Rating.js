import React from 'react';
import Rating from 'react-rating'
import './rating.css'

 export default class ResetRating extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value:0};
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick(event) {
        this.props.handleRating(event)  
    }
   
  
    render() {
      return (
        
        <div>
          <Rating
            emptySymbol={<img src="https://i.ya-webdesign.com/images/svg-star-empty-18.png" className="icon" />}
            fullSymbol={<img src="http://files.softicons.com/download/toolbar-icons/flatastic-icons-part-2-by-custom-icon-design/ico/star-full.ico" className="icon" />}
            initialRating={this.props.value} />
           
        </div>

      );
    }
  }
  
//   <ResetRating placeholderRating={3} />