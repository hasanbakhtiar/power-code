import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import TodoPage from "./pages/TodoPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/todo" element={<TodoPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App