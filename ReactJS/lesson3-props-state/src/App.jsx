import { Component } from "react";
import SingleCard from "./components/SingleCard";
import phones from "./data/data";
import Counter from "./components/Counter";




class App extends Component {
    render() {
        return (
            <>
                <div className='info container mt-5'>
                    {/* <Counter /> */}


                    <div className="row g-5">
                    {phones.map((item,c) => (
                        <SingleCard key={c} title={item.title} photo={item.image} />
                    ))}
                </div>
                </div>
            </>
        )
    }
}

export default App;