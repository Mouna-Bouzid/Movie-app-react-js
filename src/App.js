import React, { Component } from 'react';
import Header from './components/header'
import MovieList from './components/movieList'

import './App.css'
import AddMovie from './components/addMovie'
import Rating from './components/Rating'



export default class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
        cards:[{src:"https://images-na.ssl-images-amazon.com/images/I/710MAaieKaL._AC_SY679_.jpg", title:"Joker", rate:4},
         {src:"https://cdn.shopify.com/s/files/1/0030/3802/products/2016-09-18_21-05-43.png?v=1475082945" , title:"Sherlock Holmes", rate:5},
          {src:"https://fanart.tv/api/download.php?type=download&image=110698&section=3" , title:"Julia's Eyes", rate:4}, 
          {src:"https://preview.redd.it/ohmlccyet7111.jpg?auto=webp&s=9a53666c41033f8768f65acec21eea0fe64a62d6", title:"Dragon", rate:5},
          {src:"https://www.posters.eu/media/catalog/product/cache/4/image/9df78eab33525d08d6e5fb8d27136e95/p/y/py_mpp50568.jpg", title:"Frozen", rate:5}, 
          {src:"https://images-na.ssl-images-amazon.com/images/I/81FN3aUeAOL._AC_SY550_.jpg", title:"Aladdin", rate:4}],
          inputSearch:'',
          value:0,
          val:3
        }
  }
handleAdd=(source,titre,rate)=>{
  this.setState({
    cards:[...this.state.cards,{src:source,title:titre,rate:rate}]
  })
}
handleChange=(e)=>{
  this.setState({
      inputSearch:e.target.value,
  })
} 
handleRating=(e)=>{
  this.setState({
    value:this.state.value
    // value: undefined
  });
}

  render() {
      return (
        <div className="App">
        <Header cards={this.state.cards} data={this.handleChange} val={this.state.val}/>
        <div className='MovieListAdd'>
        <MovieList cards={this.state.cards} movieSearched={this.state.inputSearch} val={this.state.value} />
        <AddMovie cards={this.state.cards} add={this.handleAdd} value={this.state.value} />
        </div>
       </div>
      );
  }
}

