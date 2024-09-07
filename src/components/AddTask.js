import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid4 } from "uuid";
import { addtask } from "../redux/taskSlice";
const AddTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("To Do");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: uuid4(),
      title,
      description,
      status,
    };
    dispatch(addtask(newTask));
    setTitle("");
    setDescription("");
    setStatus("To Do");
  };

  return (
    <>
      <div className="row">
        <form
          class="row g-3 
        needs-validation"
          onSubmit={handleSubmit}
          noValidate
          style={{ width: "500px", marginLeft: "200px" }}
        >
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <div class="form-floating">
            <textarea
              class="form-control"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
          </div>

          <select
            class="form-select"
            aria-label="Default select 
            example"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option defaultValue></option>
            <option value="To Do">To DO</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>

          <div class="col-12">
            <button class="btn btn-primary" type="submit">
              AddTask
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddTask;
