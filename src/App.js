import './App.css';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Electronics from './Pages/Electronics';
import Clothing from './Pages/Clothing';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
    
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/electronics' element={<Electronics/>}/>
      <Route path='/clothing' element={<Clothing/>}/>
      <Route path='/cart' element={<Cart/>} />

    </Routes>
    
     </Provider>
    </div>
  );
}

export default App;
