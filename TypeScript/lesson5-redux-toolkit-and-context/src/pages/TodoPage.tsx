import swal from "sweetalert";
import { add } from "../tools/slices/todoSlice";
import { AppUseDispatch, AppUseSelector } from "../tools/store/todo";
import { useState } from "react";

const TodoPage: React.FC = () => {
  const [inputvalue, setInputvalue] = useState<string>("");
  const data = AppUseSelector((p: any) => p);
  const dispatch = AppUseDispatch();
  const todoSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputvalue) {
      swal("Please fill input", "", "warning");
    } else {
      dispatch(add(inputvalue));
      setInputvalue("");
    }
  };
  return (
    <div className="container">
      <div className="d-flex align-items-center justify-content-center flex-column">
        <h1 className="text-danger my-5">Todo App</h1>
        <form onSubmit={todoSubmit} className="col-6">
          <div className="input-group mb-3">
            <input
              value={inputvalue}
              type="text"
              className="form-control"
              onChange={(e) => setInputvalue(e.target.value)}
            />
            <button className="btn btn-dark" type="submit">
              Add todo
            </button>
          </div>
          <ul className="list-group">
            {data.map((item: any) => (
              <li
                key={item.id}
                className="list-group-item d-flex align-items-center justify-content-between"
              >
                {item.text}
                <button className="btn btn-danger">X</button>
              </li>
            ))}
          </ul>
        </form>
      </div>
    </div>
  );
};

export default TodoPage;
