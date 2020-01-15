import React, { Component } from 'react';
import Modal from 'react-awesome-modal';
import './movieList.css'
import './addMovie.css'

export default class Examples extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false,
            Title:'',
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

    newMovieName=(e)=>{
        this.setState({
            Title:e.target.value,
        })
    }
    newMovieImg=(e)=>{
        this.setState({
            src:e.target.value
        })
    }
    newMovieData=(e)=>{
        e.preventDefault();
        this.props.add(this.state.src,this.state.Title)
        this.closeModal()  
        this.setState({
            Title:'',
            src:'',
            rate:''
        }  )
    }
    newMovieRate=(e)=>{
        this.setState({
            rate:e.target.value
        })
    }
    render() {
        return (
            
                <div className='moviebox'>
                <div className='addbox' onClick={() => this.openModal()}>| + |</div>
                <Modal className="modal" visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div className='form-container '>
                    <h1>Create a Movie Card</h1>
                    <form>
                    <label>Movie Title</label>
                    <input type="text" placeholder="Enter Title" value={this.state.Title} onChange={(e)=>this.newMovieName(e)} name="Movie-Title" required />

                    <label>Image Source</label>
                    <input type="text" placeholder="Enter img src" value={this.state.src} onChange={(e)=>this.newMovieImg(e)} name="img-src" required />

                    <label>Rate</label>
                    <input type="text" placeholder="Enter Rate" value={this.state.rate} onChange={(e)=>this.newMovieRate(e)} name="Movie-Rate" required />

                    <button type="submit" className="btn" onClick={(e)=>this.newMovieData(e)}>Create</button>
                    <button type="button" className="btn cancel" onClick={() => this.closeModal()}>Cancel</button>
                     </form>
                        {/* <a href="javascript:void(0);" onClick={(e) => this.closeModal(e)}>Close</a> */}
                    </div>
                </Modal>
                </div>
            
        );
    }
}








// import React, { Component } from 'react'
// import './movieList/movieList.css'
// import './addMovie.css'
// import Popup from "reactjs-popup";
// export default class addMovie extends Component {

//     popupForm=()=>{
//      return(<Popup trigger={<button>+</button>} position="right center">
//      <div>hello</div>
//      </Popup>)
//     }
//     render() {
//         return (
//             <div className='movieboxes'>
//             {/* <button className='moviebox addbox' onClick={()=>this.popupForm()}> 
//               | + |
//             </button> */}
            
//             <Popup trigger={<div className='moviebox addbox'>| + |</div>} position="center">
//      {/* <div className="popup">hello</div> */}
//      {/* <div class="form-popup" id="myForm"> */}
//   <form action="/action_page.php" class="form-container">
//     <h1>Login</h1>

//     <label for="email"><b>Email</b></label>
//     <input type="text" placeholder="Enter Email" name="email" required />

//     <label for="psw"><b>Password</b></label>
//     <input type="password" placeholder="Enter Password" name="psw" required />

//     <button type="submit" class="btn">Login</button>
//     <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
//   </form>
// {/* </div> */}
//      </Popup>
          
     
//             </div>
//         )
//     }
// }
