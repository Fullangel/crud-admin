import React from "react";
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import './app.css';
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewProduct from "./pages/newProduct/NewProduct";
import NewUser from "./pages/newUser/NewUser";
import Product from "./pages/product/Product";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import Userlist from "./pages/userList/UserList";


function App() {
  return (
    <BrowserRouter>
      <Topbar />
        <div className="container">
          <Sidebar />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/users' element={<Userlist />} />
              <Route path='/user/:userId' element={<User />} />
              <Route path='/newUser' element={<NewUser />} />
              <Route path='/products' element={<ProductList />} />
              <Route path='/product/:productId' element={<Product />} />
              <Route path='/newproduct' element={<NewProduct />} />
            </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
