import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import LayoutDefault from './layout/LayoutDefault';
import AD from './pages/AD';
import Lawennac from './layout/Lawennac';
import Explore from './pages/Explore';
import Create from './pages/Create';
import MyCreations from './pages/MyCreations';
import Edit from './pages/Edit';
import LoginPage from './pages/Login';
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<LayoutDefault />}>
          <Route path='/' element={<Home />}></Route>
          <Route path='/a' element={<AD />}></Route>
          <Route path='*' element={<NotFound />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          {/* <Route path='/account' element={<Account />}></Route> */}

        </Route>
        <Route path='/lawennac' element={<Lawennac />}>
            <Route path='explore' element={<Explore />} />
            <Route path="create" element={<Create />} />
            <Route path="edit" element={<Edit />} />
            <Route path="my-creations" element={<MyCreations />} />
          </Route>
      </Routes>
    </>
  );
}

export default App;
