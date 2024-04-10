import React, { Component } from 'react'

class List extends Component{
    componentWillUnmount(){
        alert('compoenent is deleted')
    }
    render(){
        return(
            <ul>
                <li>Orange</li>
                <li>Apple</li>
                <li>Banana</li>
            </ul>
        )
    }
}



export class App extends Component {

    constructor() {
        super();
        this.state={
            text:"Hello",
            display:true
        }
        // console.log('constructor is running...');
    }
    componentDidMount() {
        console.log('componentDidMount is running...');
        // document.querySelector('div').style.backgroundColor="red";

    }
    componentDidUpdate(){
        // document.querySelector('div').style.backgroundColor="red";

            console.log('compoenentDidUpdate is running...');
    }


    render() {
        let info;
        if (this.state.display) {
            info = <List/>
        }
        return (
            <div>
                {info}
                <h1>{this.state.text}</h1>
                <button onClick={()=>{
                    this.setState({
                        text:"Bye",
                        display:false
                    })
                }}>change</button>
            </div>
        )
    }
}

export default App