import './App.css';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AddUser from './Components/AddUser';
import AllUser from './Components/AllUser';
import Edit from './Components/Edit';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/alluser' element={<AllUser />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/edit/:id' element={<Edit />} />
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App;
