import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/taskSlice";

const EditTask = ({ el }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(el.title);
  const [description, setDescription] = useState(el.description);
  const [status, setStatus] = useState(el.status);
  const dispatch = useDispatch();

  const handleEdit = () => {
    dispatch(editTask({ id: el.id, title, description, status }));
    setIsEdit(false);
  };

  return (
    <div>
      {isEdit ? (
        <div
          className="row p-3 m-3"
          style={{
            width: "400px",

            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <input
            type="text"
            class="form-control"
            id="validationCustom01"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div class="">
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
            <option value="To Do">To DO</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <div class="col-12">
            <button class="btn btn-primary" type="submit" onClick={handleEdit}>
              Edit task
            </button>
            <button className="btn btn-danger" onClick={() => setIsEdit(false)}>
              cancel
            </button>
          </div>
        </div>
      ) : (
        <>
          <button className="btn btn-primary" onClick={() => setIsEdit(true)}>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default EditTask;
