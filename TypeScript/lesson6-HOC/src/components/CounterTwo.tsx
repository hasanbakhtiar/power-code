import HighOrderComponent from './HighOrderComponent'

const CounterTwo = (props:any) => {
    const {decCount,count,intCount} = props;
    
  return (
    <div>
        <h1>{props.title}</h1>
        <button style={{backgroundColor:"green",border:"none",borderRadius:"10px",marginRight:"10px"}} onClick={decCount}>-</button>

        {count}
        <button  style={{backgroundColor:"green",border:"none",borderRadius:"10px",marginLeft:"10px"}}  onClick={intCount}>+</button>
    </div>
  )
}


export default HighOrderComponent(CounterTwo);