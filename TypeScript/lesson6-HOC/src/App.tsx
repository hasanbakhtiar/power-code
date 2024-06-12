import CounterOne from "./components/CounterOne"
import CounterTwo from "./components/CounterTwo"

const App = () => {
  return (
    <div>
      <CounterOne title="Student"/>
      <hr />
      <CounterTwo title="Teacher"/>
    </div>
  )
}

export default App