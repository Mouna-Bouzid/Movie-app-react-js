import React, { Component } from 'react'
import './header.css'
import Rating from './Rating'


export class header extends Component {
    constructor(){
        super();
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
                    {/* <button onClick={(e)=>this.toSearch(e)}>search</button> */}
                    </form>
                    <Rating />
                </div>
            </div>
        )
    }
}

export default header
