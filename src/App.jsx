
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'


import Home from './pages/Home/Home';
import Job from './pages/Job/Job';
import PostJob from './pages/PostJob/PostJob';
// import Post from './pages/Post/Post';
// import Login from './pages/Login/Login';
// import Search from './pages/Search/Search';
// import Profile from './pages/Profile/Profile';



function App() {


  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home  />} />
        <Route exact path="/postjob" element={<PostJob  />} />
        <Route exact path="/job/:id" element={<Job  />} />
        {/* <Route exact path="/cat/:id" element={<Home  />} />
        <Route exact path="/post/:id" element={<Post  />} />
        <Route exact path="/profile/:id" element={<Profile  />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/search" element={<Search />} /> */}
      </Routes>
    </Router>

    
  );
}

export default App;

