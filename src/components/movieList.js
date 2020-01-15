import React, { Component } from 'react'
import './movieList.css'
import Rating from './Rating'

export default class movieList extends Component {

  render(props) {
    return (
      <div className="movieboxes">


        {this.props.cards.filter((el, indice) => (el.title.toUpperCase().includes(this.props.movieSearched.toUpperCase())) && (el.rate >= (this.props.val))).map((el, i) => (
          <div key={i} className="moviebox">
            <img src={el.src} />
            <div className="movieinfo">
              <p>{el.title}</p>
              <span className='Rating'><Rating value={el.rate} /></span>
            </div>
          </div>)
        )}
{console.log(this.props.value)}
      </div>
      
    )
  }
}
