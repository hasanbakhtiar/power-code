import React from 'react';
import ReactDOM from 'react-dom';
import photo from './img/unsplash.jpg'


class App extends React.Component{
    render(){
        return(
            <>
            <h1>Hello React</h1>
            <img src={photo} alt="" />
            </>
        )
    }
}

ReactDOM.render(<App/>,document.querySelector('#root'));