import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Home from './components/Home/Home';
import WithRouter from './components/hoc/WithRouter';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import AnchorPortal from './components/common/AnchorPortal/AnchorPortal';
import FullCardProduct from './components/FullCardProduct/FullCardProduct';



const App = ({ router, ...props }) => {

  let urlPathName = router.location.pathname;

  let homePage = urlPathName === '/home';

  if (urlPathName === '/' || urlPathName === '/maroon/' || urlPathName === '/maroon') {
    return <Navigate to={'/home'} />
  };



  return (
    <div>
      <AnchorPortal />
      <div className={`app__wrapper`}>
        {!homePage && <Header />}
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/catalog/' element={<Catalog />} />
          <Route path='/product/:idProduct' element={<FullCardProduct />} />
        </Routes>
        {!homePage && <Footer />}
      </div>
    </div>

  )
}

export default WithRouter(App);