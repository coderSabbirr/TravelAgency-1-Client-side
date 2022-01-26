import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Components/Context/AuthProvider';
import Login from './Components/Login/Login';
import ContactUs from './Components/Pages/ContactUs/ContactUs';
import AddNewProduct from './Components/Pages/Dashboard/AddNewProduct/AddNewProduct';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import DashboardHome from './Components/Pages/Dashboard/DashboardHome/DashboardHome';
import MakeAdmin from './Components/Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageAllProducts from './Components/Pages/Dashboard/ManageAllProducts/ManageAllProducts';
import Payment from './Components/Pages/Dashboard/Payment/Payment';
import Home from './Components/Pages/Home/Home';
import NotFound from './Components/Pages/NotFound/NotFound';
import AdminRoute from './Components/ProtectedRoute/AdminRoute';
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
       
            {/* <Route path="buyProducts/:productId" element={<ProtectedRoute><BuyProducts /></ProtectedRoute>} /> */}
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="dashboard" element={<Dashboard />} >
            <Route path='/dashboard' element={<DashboardHome />}>
            </Route>
              <Route path="/dashboard/addnewproduct" element={<AdminRoute ><AddNewProduct /></AdminRoute>} ></Route>
              <Route path="/dashboard/manageallproducts" element={<AdminRoute ><ManageAllProducts /></AdminRoute>} ></Route>
              <Route path="/dashboard/makeadmin" element={<AdminRoute ><MakeAdmin /></AdminRoute>} ></Route>
              <Route path='/dashboard/payment' element={<Payment />}></Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>

      </AuthProvider>
    </div>
  );
}

export default App;
