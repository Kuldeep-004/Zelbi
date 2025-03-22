import "./App.css";
import {Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx"
import Navbar from "./components/common/Navbar.jsx"
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import ForgotPassword from "./pages/ForgotPassword.jsx";
import UpdatePassword from "./pages/UpdatePassword.jsx";
import VerifyEmail from "./pages/VerifyEmail.jsx";
import Error from "./pages/Error.jsx"
import Blog from './pages/Blog.jsx';
import Ai from './pages/Ai.jsx';
import Project from './components/Project.jsx';

function App() {

  return (

   <div className="w-screen h-screen bg-black flex flex-col font-inter">

    <Navbar/>

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route
            path="signup"
            element={
                <Signup />
            }
          />
        <Route
            path="login"
            element={
                <Login />
            }
          />
        <Route
            path="forgot-password"
            element={
                <ForgotPassword />
            }
          />  
        <Route
          path="update-password/:id"
          element={
              <UpdatePassword />
          }
        />  
        <Route
            path="verify-email"
            element={
                <VerifyEmail />
            }
          />  
        <Route
            path="update-password/:id"
            element={
                <UpdatePassword />
            }
          />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/ai" element={<Ai/>}/>
        <Route path='/project' element={<Project/>}/>
        

        <Route path="*" element={<Error />} />

    </Routes>

   </div>

  );
}

export default App;
