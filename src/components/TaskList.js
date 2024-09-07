import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletTask, fetchTodo } from "../redux/taskSlice";
import EditTask from "./EditTask";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const loading = useSelector((state) => state.tasks.loading);
  const error = useSelector((state) => state.tasks.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodo());
  }, [dispatch]);
  if (loading) {
    return <p>loading...</p>;
  }
  if (error) {
    return <p>error {error}</p>;
  }

  const handleDelet = (id) => {
    dispatch(deletTask(id));
  };

  return (
    <>
      <div className="container">
        <h2>Todo List</h2>
        <div className="row">
          <div className="col">
            <ul className="list-group">
              {tasks.map((el) => (
                <li className=" list-group-item" key={el.id}>
                  <div>
                    <p className="text-primary">{el.title}</p>
                    {el.description && (
                      <p className="text-success">{el.description}</p>
                    )}
                    <p className="text-info">Status: {el.status}</p>
                  </div>
                  <div style={{ display: "flex" }}>
                    <EditTask el={el} />
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelet(el.id)}
                    >
                      delet
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TaskList;
