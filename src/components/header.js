import React, { Component } from 'react'
import './header.css'
import Rating from 'react-star-rating-component'



export class header extends Component {
    constructor(props){
        super(props);
        this.state={
            
        }
    }

handleData=(e)=>{
    e.preventDefault()
    this.props.data(e)
}


    render() {
        return (
            <div className="topnav">
                <div>
                    <form className="search-container">
                    <input type="text" placeholder="Search.." name="search" value={this.state.inputSearch} onChange={(e)=>this.handleData(e)} />
                    </form>
                    
                </div>

                <div className='searchRating'>
                <Rating 
              name="rate1" 
              starCount={5}
              // value={rating}
              onStarClick={this.props.onStarClick}
            />
                </div>
            </div>
        )
    }
}

export default header
