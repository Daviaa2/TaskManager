import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Sign up and loging routes
import Login from './pages/Auth/Login'
import SignUp from './pages/Auth/SignUp'

// Admin routes
import Dashboard from './pages/Admin/Dashboard'
import ManageTasks from './pages/Admin/ManageTasks'
import CreateTask from './pages/Admin/CreateTask'
import ManageUsers from './pages/Admin/ManageUsers'
import PrivateRoute from "./routes/PrivateRoute";

// User Routes
import UserDashboard from "./pages/User/UserDashboard"
import MyTasks from "./pages/User/MyTasks"
import ViewTaskDetails from "./pages/User/ViewTaskDetails";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            {/* Sign up and loging routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/signUp" element={<SignUp />} />

            {/* Admin Routes */}
            <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
              <Route path="/admin/dashboard" element={<Dashboard />} />
              <Route path="/admin/tasks" element={<ManageTasks />} />
              <Route path="/admin/create-task" element={<CreateTask />} />
              <Route path="/admin/users" element={<ManageUsers />} />
            </Route>

            {/* User Routes */}
            <Route element={<PrivateRoute allowedRoles={["user"]} />}>
              <Route path="/user/dashboard" element={<UserDashboard />} />
              <Route path="/user/tasks" element={<MyTasks />} />
              <Route path="/user/tasks-details/:id" element={<ViewTaskDetails />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
