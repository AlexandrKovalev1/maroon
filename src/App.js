import './App.css';
import Catalog from './components/Catalog/Catalog';



const App = () => {
  return (
    <div className='app__wrapper'>
      <main className='main'>
        <Catalog />
      </main>
    </div>
  )
}

export default App;