import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import BlogsView from './Components/Pages/BlogsView/BlogsView';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import AddNewProduct from './Components/Pages/Dashboard/AddNewProduct/AddNewProduct';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import DashboardHome from './Components/Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import Home from './Components/Pages/Home/Home';
import ManageBlogs from './Components/Pages/ManageBlog/ManageBlogs';
import NotFound from './Components/Pages/NotFound/NotFound';
import AdminRoute from './Components/ProtectedRoute/AdminRoute';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Register from './Components/Register/Register';


function App() {
  return (
    <div className="App">
      <AuthProvider>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="home" element={<Home />} />
     
            <Route path="contact" element={<ContactUs />} />

       
            <Route path="blogsView/:blogsId" element={<ProtectedRoute><BlogsView /></ProtectedRoute>} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} >
            <Route path='/dashboard' element={<DashboardHome />}>
            </Route>
              <Route path="/dashboard/addnewproduct" element={<AdminRoute ><AddNewProduct /></AdminRoute>} ></Route>
              <Route path="/dashboard/manageBlogs" element={<AdminRoute ><ManageBlogs /></AdminRoute>} ></Route>
              <Route path="/dashboard/makeadmin" element={<AdminRoute ><MakeAdmin /></AdminRoute>} ></Route>
      
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
