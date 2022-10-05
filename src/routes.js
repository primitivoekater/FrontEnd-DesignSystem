import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import AddProduct from './pages/AddProduct';
import CustomHead from './components/CustonHeaders';

function MainRoutes() {
  return (
    <Routes>
      <Route element={<CustomHead />}>
        <Route path='/' element={<Main />} />
        <Route path='/add-product' element={<AddProduct />} />
      </Route>
    </Routes>
  );
}

export default MainRoutes;