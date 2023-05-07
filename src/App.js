import { Route, Routes,Link } from 'react-router-dom';
import Home from "./page/Home";
import Blog from "./page/Blog";
import Users from "./page/Users";
import User from "./page/User"
import Error404 from "./page/Error404"


function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path='users/*' element={<Users />}>
            <Route path=':name/:id' element={<User />} />
        </Route>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
