import './App.css';
import Header from './components/Header/Header';
import Catalog from './components/Catalog/Catalog';
import Home from './components/Home/Home';
import WithRouter from './components/hoc/WithRouter';
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';



const App = ({ router, ...props }) => {

  let urlPathName = router.location.pathname;
let homePage = urlPathName === '/home'
  if (urlPathName === '/'||urlPathName === '/maroon') { return <Navigate to={'/home'} /> };



  return (
    <div className={`app__wrapper ${homePage && 'wrapper_homePage'}`}>
      {!homePage && <Header />}
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
      </Routes>
      {!homePage && <Footer />}
    </div>
  )
}

export default WithRouter(App);