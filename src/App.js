import {BrowserRouter,Routes, Route} from 'react-router-dom';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { User } from './pages/User';
import { Navbar } from './components/Navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

const url = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users,setUsers] = useState([])

  const fetchUsers = async () => {
    try {
      const res = await axios(url);
      setUsers(res.data);
    } catch (error) {
      alert("Can't connect to the server")
    }
  }

  useEffect(()=>{
    fetchUsers()
  },[])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home users={users}/>}/>
        <Route path='/users/:userId' element={<User users={users}/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
