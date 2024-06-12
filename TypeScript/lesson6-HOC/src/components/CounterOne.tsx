import HighOrderComponent from "./HighOrderComponent";

const CounterOne = (props:any) => {

    const {decCount,intCount,count} = props;
    
  return (
    <div>
        <h1>{props.title}</h1>

        <button style={{backgroundColor:"red",border:"none",borderRadius:"10px"}} onClick={decCount}>-</button>
      <span style={{margin:"0 10px"}}>  {count}</span>
        <button style={{backgroundColor:"red",border:"none",borderRadius:"10px"}} onClick={intCount}>+</button>
    </div>
  )
}

export default HighOrderComponent(CounterOne);