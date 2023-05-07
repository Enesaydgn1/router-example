import { NavLink ,Routes,Route, } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";
import User from './User';

import './style.css' 

export default function Users() {
    const [loading,setLoading] = useState(true);
    const [users, setUsers] =  useState([]);
  
    useEffect(() =>{
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data)).finally(() => setLoading(false))
        .catch((err) => {
            console.log(err);
          });
    },[])
  return (
    <div className="container">
       <div>
                <h1>Users</h1>
                {loading && <div>Loading......</div>}
                <ul> 
                    {!loading && users?.map((user) =>
                    (
                        <li key={user.id}  className="users">
                            <NavLink
                                to={`${user.id}`} activeClassName="active">
                                {user.name}
                            </NavLink>
                        </li>

                    ))}

                </ul>
            </div>
            <Routes>
                {/* Burada /user/:id yerine sadece :id yazmamız yeterli 
                    sebebi ise zaten users'ın içinde olduğu için user'ımız yolu bu şekilde bulucaktır aksi taktirde okumuyacak */}
                <Route path=':id' element={<User />} />
              
            </Routes>
    </div>
  )
}
