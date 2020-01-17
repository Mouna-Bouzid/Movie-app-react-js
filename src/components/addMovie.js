import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './movieList.css'
import './addMovie.css'

export default class AddMovie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            title:'',
            src:'',  
            rate:''         
        }
    }

    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }

  handleChange=(event)=>{
      this.setState({
          [event.target.name]:event.target.value
      })
  }
    
    render() {
        return (
            
                <div className='moviebox'>
                <div className='addbox' onClick={() => this.openModal()}>| + |</div>
                <Modal className="modal" visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                   
                    <div className='form-container '>
                    <h1>Create a Movie Card</h1>
                    
                    <label>Movie Title</label>
                    <input type="text" placeholder="Enter Title" value={this.state.title} onChange={this.handleChange} name="title" required />

                    <label>Image Source</label>
                    <input type="text" placeholder="Enter img src" value={this.state.src} onChange={this.handleChange} name="src" required />

                    <label>Rate</label>
                    <input type="text" placeholder="Enter Rate" value={this.state.rate} onChange={this.handleChange} name="rate" required />

                    <button type="submit" className="btn" onClick={()=>this.props.add(this.state,this.state.visible=!this.state.visible)}>Create</button>
                    <button type="button" className="btn cancel" onClick={() => this.closeModal()}>Cancel</button>
                     
                    </div>
                </Modal>
                </div>
               
            
        );
    }
}




