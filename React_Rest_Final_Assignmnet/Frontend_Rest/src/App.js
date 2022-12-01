import Signin from "./components/Signin";
import Blogs from "./components/Blogs";
import Signup from "./components/Signup";
import Comment from "./components/Comment";
import Profile from "./components/Profile";
import Addblog from "./components/Addblog";
import {  Routes,Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Searchblog from "./components/Searchblog";
import Blogid from "./components/Blogid";
import Update from "./components/Update";
import Deleteblog from "./components/Deleteblog";
import Allblog from "./components/Allblog";

function App() {

  
  return (
    <div className="App">

      <Routes>
           <Route path='/' element={<Home />}></Route> 
           <Route path='/Navbar/:user_id' element={<Navbar />}></Route> 
           <Route path='/Signup' element={<Signup />}></Route> 
           <Route path='/Signin' element={<Signin />}></Route> 
           {/* <Route path='/Blogs' element={<Blogs />}></Route>  */}
           {/* <Route path='/Blogs/:user_id' element={<Blogs />}></Route>  */}
           <Route path='/Blogs/:user_id' element={<Blogs />}></Route> 
           <Route path='/Comment/:user_id/:blog_id' element={<Comment />}></Route> 
           <Route path='/Profile/:user_id' element={<Profile />}></Route> 
           <Route path='/Searchblog/:user_id' element={<Searchblog />}></Route> 
           {/* <Route path='/Blogs' element={<Blogs />}></Route>  */}
           <Route path='/Blogid/:blog_id' element={<Blogid />}></Route> 
           <Route path='/Addblog/:user_id' element={<Addblog />}></Route> 
           <Route path='/Update/:user_id/:blog_id' element={<Update />}></Route> 
           <Route path='/Deleteblog/:user_id/:blog_id' element={<Deleteblog />}></Route>
           <Route path='/Allblog/:user_id' element={<Allblog />}></Route>
           
          
          </Routes>

    </div>
  );
}

export default App;
