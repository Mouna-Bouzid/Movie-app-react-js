import React, { Component } from 'react'
import './movieList.css'
import AddMovie from './addMovie.js'
import Rating from 'react-star-rating-component'
import Hoc from './loadingHoc'
class movieList extends Component {

    render(props) {
        return (
        <div className="movieboxes">
          
        {this.props.cards.filter((el,indice)=>(el.title.toUpperCase().includes(this.props.movieSearched.toUpperCase())) && (el.rate>=(this.props.starRate))).map((el, i) =>(
        <div key={i} className="moviebox">
        <img src={el.src} />
        <div className="movieinfo">
        <p>{el.title}</p>
        <span className='Rating'> <Rating 
              name="rate1" 
              starCount={5}
              value={el.rate}
              onStarClick={this.onStarClick}
            />
        </span>
            
          </div>
        </div>)
      )}

      </div>
        )
    }
}
export default  Hoc(movieList);
