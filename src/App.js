// import { Route, Routes } from "react-router-dom";
// import AddStudent from "./Components/AddStudent";
// import Students from "./Components/Students";
// import EditStudent from "./Components/EditStudent";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
const App = () => {
  return (
    <>
      <AddTask />
      <TaskList />
      {/* <Routes>
        <Route path="/students/create" element={<AddStudent />} />
        <Route path="/" element={<Students />} />
        <Route path="/students/edit/:id" element={<EditStudent />} />
      </Routes> */}
    </>
  );
};

export default App;
