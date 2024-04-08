import React, { Component } from 'react'

class Counter extends Component {
    constructor(){
        super();
        // this.increment = this.increment.bind(this);
        this.state={
            count:0,
            photo:"https://getwallpapers.com/wallpaper/full/f/b/7/301522.jpg"
        }
    }

    increment=()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    reset=()=>{
        this.setState({
            count:0
        })
    }
    
    
  render() {
    return (
    <>
    {/* <button onClick={()=>{
        this.setState({
            photo:"https://getwallpapers.com/wallpaper/full/f/b/7/301522.jpg"
        })
    }}>prev</button>
    <img width={500} src={this.state.photo} alt="" />
    <button onClick={()=>{
        this.setState({
            photo:"https://wallpaperaccess.com/full/4358693.jpg"
        })
    }}>next</button> */}
    <div>
        <button className='btn btn-danger' onClick={()=>{
        if (this.state.count>0) {
            this.setState({
                count:this.state.count-1
            })
        }
    }}>-</button>
        <span className='mx-3'>{this.state.count}</span>
        <button className='btn btn-success' onClick={this.increment}>+</button>
        <button className='btn btn-warning ms-3' onClick={this.reset}>reset</button>
      </div>
    </>
    )
  }
}

export default Counter